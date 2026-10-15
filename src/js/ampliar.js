// Projeto em ação
// Clicou no print de um projeto, abre o GIF dele funcionando por cima da página.
// Uso o <dialog> do próprio HTML, que já escurece o fundo e fecha no Esc.

const janela = document.getElementById("visualizador");
const imagem = document.getElementById("visualizador-img");
const legenda = document.getElementById("visualizador-legenda");

// quem desativou animações no sistema vê o print parado em vez do GIF
const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

// os cards são montados pelo JS (e remontados ao trocar o idioma),
// então escuto o clique na página toda e vejo se foi numa imagem
document.addEventListener("click", function (evento) {
  const botao = evento.target.closest("[data-ampliar]");
  if (!botao) return;

  const parado = semMovimento.matches;
  // o GIF tem 1 a 2 MB: enquanto carrega, a imagem fica clarinha
  imagem.classList.add("carregando");
  imagem.onload = () => imagem.classList.remove("carregando");
  imagem.src = parado ? botao.dataset.estatica : botao.dataset.ampliar;
  imagem.alt = parado ? botao.dataset.altEstatica : botao.dataset.alt;
  legenda.textContent = botao.dataset.legenda;
  janela.showModal();
});

// clicando fora da imagem (no fundo escuro) também fecha
janela.addEventListener("click", function (evento) {
  if (evento.target === janela) {
    janela.close();
  }
});

// ao fechar, tira o GIF (assim ele não fica rodando escondido)
janela.addEventListener("close", function () {
  imagem.removeAttribute("src");
});
