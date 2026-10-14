---

# 🏷️ Portfólio Profissional - João Pedro Silva Dantas 👨‍💻

> [!NOTE]
> Website de portfólio profissional para apresentar minha trajetória, habilidades, projetos, experiências e formas de contato, de maneira moderna, responsiva e acessível.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este projeto é o <b>Laboratório 01</b> da disciplina de <b>Desenvolvimento e Integração de Aplicações Web (DIAW)</b>, do curso de Engenharia de Software da PUC Minas. O site reúne quatro páginas (<i>Sobre mim</i>, <i>Projetos</i>, <i>Experiências</i> e <i>Contato</i>) e foi construído com <b>Vite</b>, HTML, CSS e JavaScript. O desenvolvimento acontece em três sprints: planejamento e protótipo, funcionalidades principais, e hospedagem com finalização.
      </div>
    </td>
    <td>
      <div>
        <img src="public/img/logo.svg" alt="Logo do Projeto" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

![Sprint](https://img.shields.io/badge/Sprint-1%20de%203-f97316?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.x-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-007ec6?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-007ec6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-007ec6?style=for-the-badge&logo=javascript&logoColor=white)

| Sprint | Entrega | Status |
| :--- | :--- | :---: |
| **Lab01S01** | Planejamento, wireframes, protótipo inicial, navegação e layout base | ✅ Entregue |
| **Lab01S02** | Funcionalidades principais (idioma PT/EN, timeline dinâmica, formulário, validações) | ⏳ A fazer |
| **Lab01S03** | Hospedagem na nuvem, ajustes finais e README final | ⏳ A fazer |

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Protótipos (Wireframes)](#-protótipos-wireframes)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Agradecimentos](#-agradecimentos)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** _link será adicionado após o deploy (Sprint 3)_
  > 💻 **Descrição:** Site publicado gratuitamente na nuvem (Vercel).
* 🎨 **Protótipos:** [Wireframes em PDF](docs/wireframe.pdf)
  > 🖌️ **Descrição:** Wireframes de média fidelidade das quatro páginas, feitos no Figma.
* 💻 **Código:** [Repositório no GitHub](<https://github.com/joaodantas-eng/portfolio.git>)

---

## 📝 Sobre o Projeto

**Por que ele existe:** um portfólio é o cartão de visita de quem está começando na área de tecnologia. Este site reúne em um só lugar quem eu sou, o que já construí e como me encontrar.

**Qual problema resolve:** recrutadores e colegas precisam entender rápido a trajetória, as habilidades e os projetos de uma pessoa. Em vez de links soltos, o site organiza tudo em quatro páginas simples, com uma linha do tempo que mostra a evolução dos projetos.

**Contexto:** acadêmico (Laboratório 01 de DIAW, PUC Minas) e profissional (porta de entrada para oportunidades na área de tecnologia).

**Onde pode ser usado:** em candidaturas a vagas, no LinkedIn, no GitHub e em apresentações.

> [!NOTE]
> Este projeto foi desenvolvido com auxílio de inteligência artificial (Claude), conforme autorização do professor da disciplina.

---

## ✨ Funcionalidades Principais

- 🧭 **Navegação entre páginas:** barra fixa com as quatro páginas, que destaca em laranja a página atual.
- 👤 **Sobre mim:** apresentação e as tecnologias que uso, com logo e nome de cada uma.
- 🕒 **Linha do tempo de projetos:** do mais antigo ao mais recente, com imagem, descrição, tecnologias e links (código, site ou demo).
- 💼 **Experiências:** experiências profissionais, trabalhos como designer e sites que desenvolvi.
- 📨 **Contato:** ícones clicáveis (GitHub, e-mail, WhatsApp, LinkedIn e Instagram) e formulário.
- 📱 **Design responsivo:** layout adaptado para desktop, tablet e celular.

**Previstas para a Sprint 2:** 🌐 versão em português e inglês, 🌙 botão de tema, 🕒 timeline gerada dinamicamente por JavaScript e ✉️ envio do formulário por e-mail com validações.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

* **Build Tool:** [Vite](https://vite.dev/) 8.x (servidor de desenvolvimento e build)
* **Linguagens:** HTML5, CSS3 e JavaScript (módulos ES)
* **Estilização:** CSS puro, com Grid, Flexbox, variáveis CSS e media queries
* **Fontes:** [Fontsource](https://fontsource.org/) (Manrope e Bricolage Grotesque), instaladas via npm
* **Ícones das tecnologias:** [Devicon](https://devicon.dev/) e [Simple Icons](https://simpleicons.org/), salvos no próprio projeto

### 🖥️ Back-end

* Não há back-end. O envio do formulário será feito pelo **EmailJS** direto do front-end (Sprint 2).

### 🎨 Design

* **Protótipos:** Figma

### ⚙️ Infraestrutura & DevOps

* **Versionamento:** Git e GitHub
* **Hospedagem:** Vercel (Sprint 3)

---

## 🏗 Arquitetura

O site é uma **aplicação multipáginas (MPA) estática**, construída com Vite:

- **Quatro páginas HTML** na raiz (`index.html`, `projetos.html`, `experiencias.html` e `contato.html`). Cada uma tem o mesmo cabeçalho, a mesma barra de navegação e o mesmo rodapé, e muda apenas a área de conteúdo.
- **Um único ponto de entrada** (`src/main.js`) carregado por todas as páginas. Ele importa as fontes e o CSS do site.
- **Um único arquivo de estilos** (`src/styles/style.css`), com as cores e fontes definidas em variáveis CSS (`:root`), o que facilita manter a identidade visual.
- **Arquivos estáticos** (fotos, prints dos projetos e ícones) na pasta `public/`.

**Decisões:**
- **Vite** foi escolhido por ser exigência do laboratório e por oferecer servidor local rápido e build otimizado.
- **Páginas separadas** seguem o wireframe e deixam cada seção com seu próprio endereço.
- **Cabeçalho repetido** em cada página, por simplicidade. Na Sprint 2 posso avaliar reaproveitá-lo.

**Paleta:** fundo branco, azul (`#0f2d6b` e `#2563eb`) como cor secundária e laranja (`#f97316`) apenas nos detalhes: página ativa no menu, borda da foto e projeto em andamento.

---

## 🎨 Protótipos (Wireframes)

Wireframes de média fidelidade feitos no Figma. O arquivo completo está em [`docs/wireframe.pdf`](docs/wireframe.pdf).

| Sobre mim | Projetos |
| :---: | :---: |
| <img src="docs/wireframe-sobre-mim.png" alt="Wireframe da página Sobre mim" width="400px"> | <img src="docs/wireframe-projetos.png" alt="Wireframe da página Projetos" width="400px"> |
| **Experiências** | **Contato** |
| <img src="docs/wireframe-experiencias.png" alt="Wireframe da página Experiências" width="400px"> | <img src="docs/wireframe-contato.png" alt="Wireframe da página Contato" width="400px"> |

Todas as páginas compartilham o mesmo cabeçalho (nome, foto, resumo e botões no canto superior direito) e a barra de navegação com as quatro seções.

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** versão **20.19** ou superior (ou **22.12** ou superior), exigência do Vite 8
* **Gerenciador de pacotes:** npm (já vem com o Node.js)
* **Git**

---

### 🔑 Variáveis de Ambiente

Esta sprint **não usa variáveis de ambiente**. Na Sprint 2, o envio do formulário pelo EmailJS usará chaves públicas, que serão documentadas aqui.

---

### 📦 Instalação de Dependências

1.  **Clone o repositório:**

```bash
git clone <https://github.com/joaodantas-eng/portfolio.git>
cd <pasta-do-projeto>
```

2.  **Instale as dependências:**

```bash
npm install
```

---

### ⚡ Como Executar a Aplicação

**Modo de desenvolvimento** (atualiza a página sozinho a cada mudança no código):

```bash
npm run dev
```
🎨 *O site estará disponível em **http://localhost:5173**.*

**Gerar a versão de produção** (cria a pasta `dist/`):

```bash
npm run build
```

**Testar a versão de produção localmente:**

```bash
npm run preview
```
🚀 *O site estará disponível em **http://localhost:4173**.*

---

## 🚀 Deploy

O deploy será feito na **Vercel** na Sprint 3:

1.  Entre em [vercel.com](https://vercel.com/) com a conta do GitHub.
2.  Clique em **Add New → Project** e escolha este repositório.
3.  A Vercel reconhece o Vite sozinha. Confira estas configurações:
    * **Framework Preset:** Vite
    * **Build Command:** `npm run build`
    * **Output Directory:** `dist`
4.  Clique em **Deploy**. A cada `git push` na branch `main`, uma nova versão é publicada.

---

## 📂 Estrutura de Pastas

```
.
├── .gitignore                   # 🧹 Ignora node_modules e dist.
├── README.md                    # 📘 Documentação principal do projeto.
├── package.json                 # 📦 Dependências e scripts (dev, build, preview).
├── package-lock.json            # 🔒 Versões exatas das dependências.
├── vite.config.js               # ⚙️ Configuração do Vite (as 4 páginas do site).
│
├── index.html                   # 🏠 Página Sobre mim.
├── projetos.html                # 🕒 Página Projetos (linha do tempo).
├── experiencias.html            # 💼 Página Experiências.
├── contato.html                 # 📨 Página Contato.
│
├── /src                         # 📂 Código-fonte
│   ├── main.js                  # 🚪 Ponto de entrada (importa fontes e estilos).
│   └── /styles
│       └── style.css            # 🎨 Cores, layout e responsividade.
│
├── /public                      # 🖼️ Arquivos estáticos, copiados sem alteração.
│   └── /img
│       ├── logo.svg             # 🏷️ Logo do projeto e favicon.
│       ├── foto.webp            # 👤 Foto de perfil.
│       ├── /projetos            # 🕒 Prints dos projetos.
│       ├── /tech                # 🧰 Logos das tecnologias.
│       └── /contato             # 📨 Ícones de contato.
│
└── /docs                        # 📚 Documentação
    ├── wireframe.pdf            # 🎨 Wireframes completos (Figma).
    ├── wireframe-*.png          # 🎨 Wireframes de cada página.
    └── /prints                  # 📸 Capturas do site funcionando.
```

---

## 🎥 Demonstração

Capturas do protótipo funcionando.

### 🌐 Aplicação Web (desktop)

| Tela | Captura de Tela |
| :---: | :---: |
| **Sobre mim** | **Projetos** |
| <img src="docs/prints/desktop-sobre-mim.png" alt="Página Sobre mim no desktop" width="400px"> | <img src="docs/prints/desktop-projetos.png" alt="Página Projetos no desktop" width="400px"> |
| **Experiências** | **Contato** |
| <img src="docs/prints/desktop-experiencias.png" alt="Página Experiências no desktop" width="400px"> | <img src="docs/prints/desktop-contato.png" alt="Página Contato no desktop" width="400px"> |

### 📱 Aplicação Web (celular)

| Sobre mim | Projetos | Experiências | Contato |
| :---: | :---: | :---: | :---: |
| <img src="docs/prints/celular-sobre-mim.png" alt="Sobre mim no celular" width="160px"> | <img src="docs/prints/celular-projetos.png" alt="Projetos no celular" width="160px"> | <img src="docs/prints/celular-experiencias.png" alt="Experiências no celular" width="160px"> | <img src="docs/prints/celular-contato.png" alt="Contato no celular" width="160px"> |

---

## 🔗 Documentações utilizadas

* 📖 **Build Tool:** [Documentação oficial do **Vite**](https://vite.dev/guide/)
* 📖 **Várias páginas com Vite:** [Guia de Build (Multi-Page App)](https://vite.dev/guide/build.html#multi-page-app)
* 📖 **Fontes:** [Fontsource](https://fontsource.org/docs/getting-started/install)
* 📖 **Ícones:** [Devicon](https://devicon.dev/) e [Simple Icons](https://simpleicons.org/)
* 📖 **CSS:** [MDN - CSS Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout) e [MDN - Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout)
* 📖 **Hospedagem:** [Documentação da **Vercel** para Vite](https://vercel.com/docs/frameworks/vite)

---

## 👥 Autores

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| João Pedro Silva Dantas | <div align="center"><img src="public/img/foto.webp" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/joaodantas-eng"><img src="public/img/contato/github.svg" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-dantas-0144103b9/"><img src="public/img/contato/linkedin.svg" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:joaopedrosilvadantas3@gmail.com"><img src="public/img/contato/gmail.svg" width="50px" height="50px"></a></div> |

---

## 🙏 Agradecimentos

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional e pela estrutura acadêmica.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pela proposta do laboratório e pelo template de README.

---
