// Configuração do Vite
// O site tem 4 páginas HTML, então avisamos o Vite de todas elas
// para que as quatro entrem no build (npm run build).
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const pagina = (arquivo) => fileURLToPath(new URL(arquivo, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        sobre: pagina("./index.html"),
        projetos: pagina("./projetos.html"),
        experiencias: pagina("./experiencias.html"),
        contato: pagina("./contato.html"),
      },
    },
  },
});
