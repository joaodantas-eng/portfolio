// Botão de tema claro/escuro
// Baseado no Skiper 26 (Skiper UI) - https://skiper-ui.com/v1/skiper26
// O original é em React, aqui fiz com JavaScript puro.
// O tema fica salvo no localStorage e a animação do círculo está no CSS.

import { t, aoMudarIdioma } from "./idioma.js";

const CHAVE = "tema";
const html = document.documentElement;
const botao = document.getElementById("botao-tema");

function temaAtual() {
  return html.dataset.theme === "dark" ? "dark" : "light";
}

function aplicarTema(tema) {
  html.dataset.theme = tema;
  try {
    localStorage.setItem(CHAVE, tema);
  } catch (erro) {
    // se não der pra salvar, só não lembra na próxima visita
  }
  atualizarBotao();
}

// atualiza o texto do botão pra quem usa leitor de tela
function atualizarBotao() {
  if (!botao) return;
  const escuro = temaAtual() === "dark";
  botao.setAttribute("aria-pressed", String(escuro));
  botao.setAttribute("aria-label", escuro ? t("tema-ativar-claro") : t("tema-ativar-escuro"));
  botao.title = escuro ? t("tema-claro") : t("tema-escuro");
}

function trocarTema() {
  const novo = temaAtual() === "dark" ? "light" : "dark";
  const trocar = () => aplicarTema(novo);

  // navegador sem suporte ou pessoa que desativou animações: troca direto
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || semMovimento) {
    trocar();
    return;
  }

  // com a View Transitions API, o tema novo aparece com o círculo
  document.startViewTransition(trocar);
}

if (botao) {
  atualizarBotao();
  botao.addEventListener("click", trocarTema);
  aoMudarIdioma(atualizarBotao);
}
