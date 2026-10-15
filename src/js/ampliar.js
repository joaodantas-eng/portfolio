// Imagem ampliada
// Clicou no print de um projeto, ele abre grande por cima da página.
// Uso o <dialog> do próprio HTML, que já escurece o fundo e fecha no Esc.

const janela = document.getElementById("visualizador");
const imagem = document.getElementById("visualizador-img");
const legenda = document.getElementById("visualizador-legenda");

// os cards são montados pelo JS (e remontados ao trocar o idioma),
// então escuto o clique na página toda e vejo se foi numa imagem
document.addEventListener("click", function (evento) {
  const botao = evento.target.closest("[data-ampliar]");
  if (!botao) return;
  imagem.src = botao.dataset.ampliar;
  imagem.alt = botao.dataset.alt;
  legenda.textContent = botao.dataset.legenda;
  janela.showModal();
});

// clicando fora da imagem (no fundo escuro) também fecha
janela.addEventListener("click", function (evento) {
  if (evento.target === janela) {
    janela.close();
  }
});
