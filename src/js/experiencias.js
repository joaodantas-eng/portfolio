// Experiências
// Os dados ficam em src/data/experiencias.json, em português e inglês.

import experiencias from "../data/experiencias.json";
import { t, idiomaAtual, aoMudarIdioma } from "./idioma.js";
import { iniciarTilt } from "./tilt.js";
import { criarLink } from "./link.js";

const lista = document.getElementById("lista-experiencias");

// a linha de detalhe pode ser texto ou uma lista de links
function criarDetalhe(exp, idioma) {
  if (exp.links) {
    return exp.links.map((link) => criarLink(link.href, link.texto[idioma])).join(` ${t("conector-e")} `);
  }
  return exp.detalhe[idioma];
}

function criarCartao(exp) {
  const idioma = idiomaAtual();
  return `
    <li class="cartao-exp">
      <div class="tlt tlt-exp">
        <div class="tlt-card tlt-sigla" aria-hidden="true">${exp.sigla}<span class="tlt-sheen"></span></div>
      </div>
      <h3>${exp.cargo[idioma]}</h3>
      <p class="exp-lugar">${exp.lugar[idioma]}</p>
      <p class="exp-detalhe">${criarDetalhe(exp, idioma)}</p>
      <p>${exp.descricao[idioma]}</p>
    </li>`;
}

function montarExperiencias() {
  lista.innerHTML = experiencias.map(criarCartao).join("");
  iniciarTilt(lista);
}

montarExperiencias();
aoMudarIdioma(montarExperiencias);
