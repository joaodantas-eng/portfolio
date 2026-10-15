// Link animado (Skiper 40, link 5) - https://skiper-ui.com/v1/skiper40
// O fundo azul entra da esquerda e o texto fica branco. A animação está no CSS.

const SETA = `<svg class="link-seta" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function criarLink(href, texto) {
  return `<a class="link-animado" href="${href}" target="_blank" rel="noopener"><span>${texto}</span>${SETA}</a>`;
}
