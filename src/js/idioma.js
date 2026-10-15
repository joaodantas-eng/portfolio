// Idioma do site (português / inglês)
// Os textos ficam em src/data/textos.json, separados em "pt" e "en".
// No HTML, quem tem texto traduzível ganha um data-i18n="chave".
// Projetos e experiências são montados pelo JS, então eles se
// redesenham sozinhos quando o idioma muda (ver aoMudarIdioma).

import textos from "../data/textos.json";

const CHAVE = "idioma";
const html = document.documentElement;
const botao = document.getElementById("botao-idioma");

// funções que querem saber quando o idioma muda
const avisar = [];

let idioma = "pt";
try {
  idioma = localStorage.getItem(CHAVE) === "en" ? "en" : "pt";
} catch (erro) {
  idioma = "pt";
}

export function idiomaAtual() {
  return idioma;
}

// pega um texto pela chave, no idioma atual
export function t(chave) {
  return textos[idioma][chave] ?? textos.pt[chave] ?? chave;
}

// pra quem precisa redesenhar algo quando o idioma muda
export function aoMudarIdioma(funcao) {
  avisar.push(funcao);
}

// troca os textos fixos do HTML
function traduzirPagina() {
  html.lang = idioma === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
    elemento.textContent = t(elemento.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (elemento) {
    elemento.setAttribute("aria-label", t(elemento.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (elemento) {
    elemento.alt = t(elemento.dataset.i18nAlt);
  });

  if (botao) {
    botao.textContent = t("idioma-botao");
    botao.setAttribute("aria-label", t("idioma-trocar"));
    botao.title = t("idioma-trocar");
  }
}

function trocarIdioma() {
  idioma = idioma === "pt" ? "en" : "pt";
  try {
    localStorage.setItem(CHAVE, idioma);
  } catch (erro) {
    // se não der pra salvar, só não lembra na próxima visita
  }
  traduzirPagina();
  avisar.forEach((funcao) => funcao(idioma));
}

if (botao) {
  botao.addEventListener("click", trocarIdioma);
}

traduzirPagina();
