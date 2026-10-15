// Formulário de contato
// Valida os campos e envia a mensagem pro meu e-mail pelo EmailJS.
// As chaves ficam no arquivo .env.local (ver README, "Variáveis de Ambiente").

import emailjs from "@emailjs/browser";
import { t, aoMudarIdioma } from "./idioma.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("botao-enviar");
const status = document.getElementById("form-status");

// as três regras de validação
const regras = [
  { campo: campoNome, erro: "erro-nome", valido: (valor) => valor.length >= 2 },
  { campo: campoEmail, erro: "erro-email", valido: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor) },
  { campo: campoMensagem, erro: "erro-mensagem", valido: (valor) => valor.length >= 10 },
];

// mostra ou limpa o erro embaixo de um campo; devolve se está ok
function validarCampo(regra) {
  const ok = regra.valido(regra.campo.value.trim());
  const textoErro = document.getElementById("erro-" + regra.campo.id);
  regra.campo.classList.toggle("invalido", !ok);
  regra.campo.setAttribute("aria-invalid", String(!ok));
  textoErro.textContent = ok ? "" : t(regra.erro);
  return ok;
}

function mostrarStatus(chave, tipo) {
  status.textContent = chave ? t(chave) : "";
  status.dataset.chave = chave || "";
  status.className = "form-status " + (tipo || "");
}

// enquanto a pessoa digita, some o erro do campo (se ela já corrigiu)
regras.forEach(function (regra) {
  regra.campo.addEventListener("input", function () {
    if (regra.campo.classList.contains("invalido")) validarCampo(regra);
  });
});

formulario.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  // valida tudo (sem parar no primeiro erro, pra mostrar todos de uma vez)
  const resultados = regras.map(validarCampo);
  if (resultados.includes(false)) {
    const primeiroComErro = regras[resultados.indexOf(false)].campo;
    primeiroComErro.focus();
    return;
  }

  // anti-spam: se o campo escondido veio preenchido, foi um robô.
  // finjo que deu certo e não envio nada
  if (document.getElementById("site").value) {
    mostrarStatus("status-ok", "ok");
    formulario.reset();
    return;
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn("Faltam as chaves do EmailJS no .env.local");
    mostrarStatus("status-config", "falha");
    return;
  }

  botaoEnviar.disabled = true;
  botaoEnviar.textContent = t("form-enviando");
  mostrarStatus("", "");

  // mando o mesmo dado com nomes diferentes porque cada modelo de
  // template do EmailJS usa um nome ({{name}}, {{from_name}}...)
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const mensagem = campoMensagem.value.trim();
  const dados = {
    name: nome,
    from_name: nome,
    email: email,
    from_email: email,
    reply_to: email,
    message: mensagem,
    title: "Contato pelo portfólio",
    time: new Date().toLocaleString("pt-BR"),
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, dados, { publicKey: PUBLIC_KEY });
    mostrarStatus("status-ok", "ok");
    formulario.reset();
  } catch (erro) {
    console.error("Erro no EmailJS:", erro);
    mostrarStatus("status-erro", "falha");
  } finally {
    botaoEnviar.disabled = false;
    botaoEnviar.textContent = t("form-enviar");
  }
});

// se trocar o idioma, traduz os erros e o aviso que estiverem na tela
aoMudarIdioma(function () {
  regras.forEach(function (regra) {
    if (regra.campo.classList.contains("invalido")) validarCampo(regra);
  });
  if (status.dataset.chave) status.textContent = t(status.dataset.chave);
});
