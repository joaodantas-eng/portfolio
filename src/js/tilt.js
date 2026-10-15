// Tilt card
// Baseado no "Tilt card" do Bencho (licença MIT - https://bencho.dev/licence)
// O original é em React, aqui fiz com JavaScript puro.
//
// A ideia: o card AFUNDA embaixo do mouse, em vez de levantar.
// O lado que está embaixo do mouse vai pra trás e o lado oposto sobe,
// como se você estivesse apertando o card com o dedo.

const clamp = (valor, min, max) => Math.min(max, Math.max(min, valor));
const mix = (a, b, t) => a + (b - a) * t;

// ---------- mola ----------
// Em vez de seguir o mouse na hora, o card "anda" até a posição com uma mola.
// É esse atraso que dá a sensação de peso.
//
// tune vai de 0 a 100: 0 é mais lento e pesado, 100 é mais rápido e quica mais.
// 50 fica no meio-termo (o padrão).
const springOf = (tune) => ({
  k: 0.08 + (tune / 100) * 0.16, // força que puxa pro alvo
  d: 0.62 + (tune / 100) * 0.2, // quanto da velocidade sobra a cada quadro
});

function criarMola(inicio, tune, instantaneo, aoMudar) {
  let alvo = inicio;
  let atual = inicio;
  let velocidade = 0;
  let raf = 0;
  let anterior = 0;
  const { k, d } = springOf(tune);

  const passo = (tempo) => {
    // dt é medido em "quadros" (1 = 1/60s). Se o navegador pular um quadro,
    // a conta compensa e a mola se comporta igual em PC rápido ou lento.
    const dt = anterior ? clamp((tempo - anterior) / 16.67, 0, 2.5) : 1;
    anterior = tempo;
    velocidade += (alvo - atual) * k * dt;
    velocidade *= Math.pow(d, dt);
    atual += velocidade * dt;

    // quando chega bem perto do alvo, para o loop (não fica rodando à toa)
    if (Math.abs(alvo - atual) < 0.02 && Math.abs(velocidade) < 0.02) {
      atual = alvo;
      velocidade = 0;
      raf = 0;
      anterior = 0;
      aoMudar();
      return;
    }
    aoMudar();
    raf = requestAnimationFrame(passo);
  };

  return {
    get valor() {
      return atual;
    },
    // muda o alvo; se a mola já estiver andando, ela continua de onde está
    definir(novoAlvo) {
      alvo = novoAlvo;
      if (instantaneo) {
        atual = novoAlvo;
        velocidade = 0;
        aoMudar();
        return;
      }
      if (!raf) raf = requestAnimationFrame(passo);
    },
  };
}

// quem desativou animações no sistema vê o card parado
const semMovimento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- números do efeito ----------
const PERSPECTIVA = 800; // distância da "câmera": menor = efeito 3D mais exagerado
const AFUNDAR = 14; // quanto o card vai pra trás quando é tocado (px). Passando de ~20 vira zoom
const CANTO = 12; // arredondamento, igual ao dos cards do site
const INCLINACAO = 10; // giro máximo em graus
const SOMBRA = 60; // força da sombra embaixo do mouse (0 a 100)

function montarTilt(quadro) {
  const card = quadro.querySelector(".tlt-card");
  const brilho = quadro.querySelector(".tlt-sheen");
  if (!card || !brilho) return;
  if (quadro.dataset.tiltPronto) return; // já está ligado
  quadro.dataset.tiltPronto = "sim";

  let mouse = { x: 0, y: 0 }; // posição do mouse de -1 a 1 em cada eixo
  let dentro = false;
  const parado = semMovimento();

  // a perspectiva fica no quadro (que não mexe), não no card
  quadro.style.perspective = `${PERSPECTIVA}px`;
  card.style.borderRadius = `${CANTO}px`;

  // lê as molas e atualiza rotação, sombra e brilho
  const desenhar = () => {
    const sx = molaX.valor;
    const sy = molaY.valor;
    const luz = molaLuz.valor;

    // sinais invertidos de propósito: é isso que faz o card afundar em vez de levantar
    const rx = -sy * INCLINACAO;
    const ry = sx * INCLINACAO;

    // posição do mouse em % pra colocar os gradientes no lugar certo
    const px = ((sx + 1) / 2) * 100;
    const py = ((sy + 1) / 2) * 100;

    const escuro = (SOMBRA / 100) * 0.55 * luz;
    const claro = (SOMBRA / 100) * 0.34 * luz;

    // primeiro afunda (translateZ), depois gira
    card.style.transform = `translateZ(${-AFUNDAR * luz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;

    // a sombra diminui quando afunda (tem menos espaço entre o card e o fundo)
    card.style.boxShadow = `0 ${mix(20, 9, luz)}px ${mix(44, 24, luz)}px -8px rgba(15, 23, 42, ${mix(0.22, 0.15, luz)})`;

    // sombra embaixo do mouse e brilho no lado oposto, que é o lado que "sobe"
    brilho.style.backgroundImage = `radial-gradient(42% 34% at ${px}% ${py}%, rgba(9, 14, 28, ${escuro}) 0%, rgba(9, 14, 28, 0) 100%), radial-gradient(52% 42% at ${100 - px}% ${100 - py}%, rgba(255, 255, 255, ${claro}) 0%, rgba(255, 255, 255, 0) 100%)`;
  };

  // uma mola pra cada eixo do mouse e uma pra intensidade do efeito
  // (assim a sombra e o brilho aparecem e somem suave)
  const molaX = criarMola(0, 50, parado, desenhar);
  const molaY = criarMola(0, 50, parado, desenhar);
  const molaLuz = criarMola(0, 50, parado, desenhar);

  const atualizar = () => {
    molaX.definir(dentro ? mouse.x : 0);
    molaY.definir(dentro ? mouse.y : 0);
    molaLuz.definir(dentro ? 1 : 0);
  };

  // pointer em vez de mouse: funciona com o dedo no celular também
  quadro.addEventListener("pointermove", (e) => {
    // mede no quadro, que não gira (o card girando daria a posição errada)
    const r = quadro.getBoundingClientRect();
    mouse = {
      x: clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1),
      y: clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1),
    };
    dentro = true;
    atualizar();
  });

  // saiu do quadro (ou da janela): volta ao normal
  quadro.addEventListener("pointerout", (e) => {
    const para = e.relatedTarget;
    if (!para || !quadro.contains(para)) {
      dentro = false;
      atualizar();
    }
  });

  // no celular, quando o toque vira rolagem
  quadro.addEventListener("pointercancel", () => {
    dentro = false;
    atualizar();
  });

  desenhar();
}

// liga o efeito nos quadros .tlt de um pedaço da página (ou da página toda)
export function iniciarTilt(raiz = document) {
  raiz.querySelectorAll(".tlt").forEach(montarTilt);
}
