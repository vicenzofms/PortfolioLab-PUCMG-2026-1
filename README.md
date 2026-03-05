<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=99999999&assignment_repo_type=AssignmentRepo) -->

---

# 🏷️ PortfolioLab — Portfólio Pessoal 👨‍💻

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        O <b>PortfolioLab</b> é um portfólio pessoal desenvolvido como projeto acadêmico da disciplina de <b>Laboratório de Desenvolvimento de Software</b> na <a href="https://www.pucminas.br/">PUC Minas</a>. A aplicação web apresenta informações pessoais, tecnologias dominadas, projetos realizados e experiências profissionais, com suporte a <i>internacionalização (PT-BR/EN)</i>, <i>tema claro/escuro</i>, <i>animações de partículas</i> no fundo, <i>design responsivo</i> e uma interface moderna construída com <b>Angular</b> e <b>Tailwind CSS</b>.
      </div>
    </td>
    <td>
      <div>
        <img src="https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif" alt="Logo Angular" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v0.0.0-blue?style=for-the-badge)](https://github.com/vicenzofonseca/PortfolioLab-PUCMG-2026-1/releases) ![Angular](https://img.shields.io/badge/Angular-20.2.0-007ec6?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-007ec6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Licença](https://img.shields.io/badge/Licença-MIT-007ec6?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

---

## 📚 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 📝 Sobre o Projeto

O **PortfolioLab** foi criado como projeto acadêmico da disciplina de **Laboratório de Desenvolvimento de Software** do curso de **Engenharia de Software** da **PUC Minas** (1º semestre de 2026). O objetivo é construir um portfólio pessoal web que demonstre habilidades técnicas e projetos desenvolvidos.

- **Por que ele existe** — Servir como vitrine profissional e exercício prático de desenvolvimento front-end moderno.
- **Qual problema ele resolve** — Centraliza informações profissionais, tecnologias e projetos de forma visualmente atrativa e acessível.
- **Contexto** — Projeto acadêmico com aplicação prática para o mercado de trabalho.
- **Onde pode ser utilizado** — Como portfólio pessoal para apresentação profissional, processos seletivos e networking.

---

## ✨ Funcionalidades Principais

- 🌙 **Tema Claro/Escuro:** Alternância dinâmica entre temas com persistência visual.
- ✨ **Animação de Partículas:** Fundo interativo com Particles.js que se adapta ao tema selecionado.
- 🌐 **Internacionalização (i18n):** Suporte a Português (BR) e Inglês (EN) com troca dinâmica de idioma.
- 👤 **Seção Sobre Mim:** Apresentação pessoal com foto e descrição.
- 🛠️ **Tecnologias:** Carrossel/grid de chips exibindo as tecnologias mais utilizadas.
- 📂 **Projetos:** Grid responsivo de cards com projetos desenvolvidos e links para o GitHub.
- 💼 **Experiência:** Carrossel horizontal com cards de experiências profissionais.
- 📬 **Seção de Contato:** Formulário de contato integrado à página principal.
- 📱 **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops.
- 🧭 **Navegação SPA:** Roteamento client-side com Angular Router e navegação por âncoras.

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção deste projeto.

### 💻 Front-end

| Tecnologia          | Versão | Descrição                                        |
| :------------------ | :----: | :----------------------------------------------- |
| **Angular**         | 20.2.0 | Framework principal da aplicação                 |
| **TypeScript**      | 5.9.2  | Superset JavaScript com tipagem estática         |
| **Tailwind CSS**    | 4.2.0  | Framework utilitário de estilização              |
| **SCSS**            |   —    | Pré-processador CSS para estilos de componentes  |
| **Particles.js**    | 2.0.0  | Animação de partículas interativas no fundo      |
| **ng-icons**        | 32.5.0 | Ícones (Heroicons, Devicon, Ionicons, Bootstrap) |
| **RxJS**            | 7.8.x  | Programação reativa                              |
| **Angular CLI**     | 20.2.2 | Ferramenta de build e scaffolding                |
| **Karma + Jasmine** |   —    | Testes unitários                                 |
| **PostCSS**         | 8.5.x  | Processamento CSS (integração Tailwind)          |

---

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js:** Versão LTS **18.x** ou superior
- **npm:** Versão **9.x** ou superior (incluído com o Node.js)
- **Angular CLI:** Versão **20.x** (instalado como dependência do projeto)

---

### 📦 Instalação de Dependências

1. **Clone o Repositório:**

```bash
git clone https://github.com/vicenzofonseca/PortfolioLab-PUCMG-2026-1.git
cd PortfolioLab-PUCMG-2026-1
```

2. **Instale as Dependências:**

```bash
npm install
```

---

### ⚡ Como Executar a Aplicação

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

🚀 _A aplicação estará disponível em **http://localhost:4200**. O servidor recarrega automaticamente ao detectar alterações nos arquivos._

---

## 📂 Estrutura de Pastas

```
.
├── angular.json                 # ⚙️ Configuração do Angular CLI
├── package.json                 # 📦 Dependências e scripts npm
├── tsconfig.json                # 🔧 Configuração base do TypeScript
├── tsconfig.app.json            # 🔧 Configuração TS da aplicação
├── tsconfig.spec.json           # 🧪 Configuração TS dos testes
├── LICENSE                      # ⚖️ Licença MIT
├── README.md                    # 📘 Documentação principal
│
├── /public                      # 📂 Arquivos estáticos públicos
│   └── /i18n                    # 🌐 Arquivos de tradução
│       ├── br.json              # 🇧🇷 Traduções em Português (BR)
│       └── en.json              # 🇺🇸 Traduções em Inglês (EN)
│
└── /src                         # 📂 Código-fonte da aplicação
    ├── index.html               # 🌐 HTML principal (entry point)
    ├── main.ts                  # 🚀 Bootstrap da aplicação Angular
    ├── styles.css               # 🎨 Estilos globais (Tailwind)
    │
    └── /app                     # 📂 Módulo principal da aplicação
        ├── app.ts               # 🧩 Componente raiz (tema + partículas)
        ├── app.html             # 📄 Template raiz (header + router-outlet)
        ├── app.scss             # 🎨 Estilos do componente raiz
        ├── app.routes.ts        # 🧭 Definição de rotas
        ├── app.config.ts        # ⚙️ Configuração do app (providers)
        ├── particles-config.ts  # ✨ Configuração do Particles.js (claro/escuro)
        │
        ├── /services            # 🔧 Serviços da aplicação
        │   └── translation.service.ts  # 🌐 Serviço de internacionalização (i18n)
        │
        ├── /components          # 🧱 Componentes reutilizáveis
        │   ├── /header          # 🧭 Barra de navegação (tema, idioma, links)
        │   ├── /sobre           # 👤 Seção "Sobre Mim" + tecnologias
        │   ├── /projetos        # 📂 Grid de projetos
        │   ├── /projeto-card    # 🃏 Card individual de projeto
        │   ├── /chip            # 🏷️ Chip de tecnologia com ícone
        │   ├── /experiencia     # 💼 Carrossel de experiências profissionais
        │   ├── /contato         # 📬 Formulário de contato
        │   └── /footer          # 📋 Rodapé da aplicação
        │
        └── /pages               # 📄 Páginas da aplicação
            └── /home            # 🏠 Página inicial (Sobre + Projetos + Experiência + Contato)
```

---

## 🔗 Documentações Utilizadas

- 📖 **Framework:** [Documentação Oficial do **Angular**](https://angular.dev/)
- 📖 **Angular CLI:** [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- 📖 **Estilização:** [Documentação do **Tailwind CSS**](https://tailwindcss.com/docs)
- 📖 **Ícones:** [Documentação do **ng-icons**](https://ng-icons.github.io/ng-icons/)
- 📖 **Partículas:** [Documentação do **Particles.js**](https://vincentgarreau.com/particles.js/)
- 📖 **Testes:** [Documentação do **Karma**](https://karma-runner.github.io)

---

## 👥 Autores

| 👤 Nome                        | GitHub                                                                                                                                                            | 📤 Email |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Vicenzo Fonseca de Mello Souza | <div align="center"><a href="https://github.com/vicenzofms"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | —        |

---

## 🤝 Contribuição

1. Faça um `fork` do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4. Faça o `push` para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request (PR)**.

---

## 🙏 Agradecimentos

- [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) — Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
- [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) — Pelos ensinamentos na disciplina de Laboratório de Desenvolvimento de Software.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](./LICENSE)**.

---
