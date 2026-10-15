// arquivo principal, carregado pelo index.html

// fontes (instaladas pelo npm)
import "@fontsource/unbounded/600.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";

import "./styles/style.css";

import "./js/idioma.js"; // português / inglês (vem primeiro: os outros usam os textos dele)
import "./js/abas.js"; // troca de abas sem recarregar
import "./js/tema.js"; // tema claro/escuro
import "./js/projetos.js"; // monta a linha do tempo a partir do projetos.json
import "./js/experiencias.js"; // monta as experiências a partir do experiencias.json
import "./js/formulario.js"; // validação e envio do formulário (EmailJS)
import "./js/ampliar.js"; // clicar no print do projeto amplia a imagem
