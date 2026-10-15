// Troca de abas
// O site é uma página só. Cada botão do menu muda o # do endereço
// (#sobre, #projetos...) e aqui eu mostro a aba certa.
// Usar o # deixa o botão "voltar" funcionando e dá pra mandar o link
// direto de uma aba, tipo .../#contato

import { t, aoMudarIdioma } from "./idioma.js";

const ABAS = ["sobre", "projetos", "experiencias", "contato"];

const html = document.documentElement;
const linksMenu = document.querySelectorAll(".botao-pagina");
const topoCabecalho = document.querySelector(".cabecalho .topo");

// pega a aba pelo endereço; se não tiver nenhuma válida, abre "Sobre mim"
function abaDoEndereco() {
  const nome = location.hash.replace("#", "");
  return ABAS.includes(nome) ? nome : "sobre";
}

function mostrarAba(nome) {
  html.dataset.aba = nome; // o CSS usa isso pra mostrar só essa aba
  document.title = `${t("aba-" + nome)} | João Pedro Silva Dantas`;

  // marca no menu qual aba está aberta
  linksMenu.forEach(function (link) {
    if (link.dataset.aba === nome) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// se a pessoa já desceu a página, volta pro começo do conteúdo
function voltarAoConteudo() {
  const limite = topoCabecalho.offsetHeight;
  if (window.scrollY > limite) {
    window.scrollTo({ top: limite });
  }
}

window.addEventListener("hashchange", function () {
  mostrarAba(abaDoEndereco());

// o título da aba do navegador também muda de idioma
aoMudarIdioma(() => mostrarAba(abaDoEndereco()));
  voltarAoConteudo();
});

mostrarAba(abaDoEndereco());

// o título da aba do navegador também muda de idioma
aoMudarIdioma(() => mostrarAba(abaDoEndereco()));
