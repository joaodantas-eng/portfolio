// Linha do tempo de projetos
// Os projetos ficam em src/data/projetos.json. Aqui eu ordeno por data
// (do mais antigo pro mais recente) e monto os cards.
// O card mostra o print parado (carrega rápido) e, ao clicar, abre o GIF
// do projeto funcionando.
// Pra adicionar um projeto novo é só colocar mais um item no JSON.

import projetos from "../data/projetos.json";
import { t, idiomaAtual, aoMudarIdioma } from "./idioma.js";
import { iniciarTilt } from "./tilt.js";
import { criarLink } from "./link.js";

const lista = document.getElementById("lista-projetos");

// "2026-04" -> "abril de 2026" / "April 2026"
function formatarData(texto) {
  const [ano, mes] = texto.split("-").map(Number);
  const data = new Date(ano, mes - 1, 1);
  const local = idiomaAtual() === "en" ? "en-US" : "pt-BR";
  return data.toLocaleDateString(local, { month: "long", year: "numeric" });
}

function criarLinks(projeto) {
  const links = projeto.links;
  let html = "";
  if (projeto.atual) html += `<span class="selo selo-laranja giz">${t("projeto-atual")}</span>`;
  if (links.privado) html += `<span class="selo">${t("projeto-privado")}</span>`;
  if (links.github) html += criarLink(links.github, t("projeto-codigo"));
  if (links.site) html += criarLink(links.site, t("projeto-site"));
  if (links.demo) html += criarLink(links.demo, t("projeto-demo"));
  return html;
}

function criarCartao(projeto) {
  const idioma = idiomaAtual();
  const alt = projeto.alt[idioma];

  let tags = "";
  if (projeto.tecnologias.length > 0) {
    tags = `<ul class="tags">${projeto.tecnologias.map((tec) => `<li>${tec}</li>`).join("")}</ul>`;
  }

  return `
    <li class="marco${projeto.atual ? " atual" : ""}">
      <p class="marco-data giz">${formatarData(projeto.data)}</p>
      <article class="cartao">
        <button class="tlt tlt-projeto" type="button"
          data-ampliar="${projeto.gif}" data-alt="${projeto.altGif[idioma]}"
          data-estatica="${projeto.imagemGrande}" data-alt-estatica="${alt}"
          data-legenda="${projeto.nome}"
          aria-label="${t("projeto-ampliar-aria")} ${projeto.nome}">
          <span class="tlt-card" style="background-image: url('${projeto.imagem}')">
            <span class="tlt-sheen" aria-hidden="true"></span>
          </span>
          <span class="selo-ampliar" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z"/></svg>
            ${t("projeto-ampliar")}
          </span>
        </button>
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao[idioma]}</p>
        ${tags}
        <p class="links">${criarLinks(projeto)}</p>
      </article>
    </li>`;
}

function montarLinhaDoTempo() {
  // copia a lista antes de ordenar, pra não mexer no JSON original
  const ordenados = [...projetos].sort((a, b) => a.data.localeCompare(b.data));
  lista.innerHTML = ordenados.map(criarCartao).join("");
  iniciarTilt(lista);
}

montarLinhaDoTempo();
aoMudarIdioma(montarLinhaDoTempo);
