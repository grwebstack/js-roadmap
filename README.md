# JS Blueprint

Guia completo de referência, configuração e blueprints para desenvolvimento JavaScript moderno.

Não é uma lista de tutoriais. É uma trilha de aprendizado baseada em construção — cada etapa conecta fundamentos técnicos a projetos funcionais, publicados e documentados.

---

## Estrutura do repositório

```
js-blueprint/
├── 00_intro/       ← Fundação teórica, roadmap e lógica interna do JS
├── 01_config/      ← Configuração de ambiente: Git, VS Code e deploy
├── 02_blueprint/   ← Blueprints de projetos prontos para seguir
└── 03_resources/   ← PDFs, bookmarks, checklists e ferramentas de IA
```

---

## O que tem em cada pasta

### `00_intro/`

Fundação teórica e orientação geral. Comece aqui.

- Introdução ao JavaScript moderno
- Lógica interna do JS: event loop, hoisting, closures
- Estruturas de dados: arrays, objetos, Maps, Sets
- Roadmap visual de aprendizado e carreira

### `01_config/`

Tudo para configurar seu ambiente de desenvolvimento do zero.

- Configuração do Git e GitHub
- VS Code com extensões e settings recomendados
- Deploy: Vercel, Netlify, GitHub Pages e Cloudflare Workers

### `02_blueprint/`

Blueprints estruturados de projetos JavaScript — referência para construir do zero com clareza.

- `landing_page.md` — landing page responsiva com HTML, CSS e JS
- `spa_router.md` — SPA com roteamento client-side vanilla
- `api_project.md` — API REST com Node.js
- `auth_system.md` — autenticação com JWT
- `dashboard_project.md` — dashboard frontend com componentes reutilizáveis
- `workers_kv.md` — edge functions e KV storage com Cloudflare Workers

### `03_resources/`

Referências, materiais de apoio e ferramentas para o dia a dia.

- PDFs de referência: algoritmos, estruturas de dados e engenharia web
- Roadmap visual de carreira freelancer
- Bookmarks curados de documentações e ferramentas
- Checklist de projeto e boas práticas
- Ferramentas e workflows de IA para acelerar o desenvolvimento

---

## Como usar

1. Comece por `00_intro/` para entender a fundação do JS
2. Configure seu ambiente com `01_config/`
3. Use `02_blueprint/` como referência ao estruturar seus projetos
4. Consulte `03_resources/` para materiais de apoio e referência rápida

---

## Trilha de aprendizado

A diferença entre um desenvolvedor com portfólio e um sem portfólio não é o que foi estudado. É o que foi construído, documentado e publicado.

### Fase 1 — Ambiente e Ferramentas

Antes de escrever código, o ambiente precisa estar configurado e o fluxo de trabalho precisa funcionar.

Terminal, VS Code, Git e GitHub. Primeiro commit, primeiro deploy.

Projeto: site pessoal publicado com GitHub Pages.

Referência: `01_config/`

---

### Fase 2 — Fundamentos da Web

HTML, CSS e JavaScript sem framework. A base que sustenta tudo.

**HTML** — estrutura semântica, formulários, acessibilidade básica

**CSS** — box model, Flexbox, Grid, design responsivo, variáveis CSS

**JavaScript** — variáveis, funções, DOM, eventos, Fetch API, async/await, Local Storage

Projetos: landing page, calculadora, app de clima, busca de filmes.

Referência: `00_intro/` e `02_blueprint/landing_page.md`

---

### Fase 3 — JavaScript Avançado

Módulos ES, roteamento client-side e TypeScript.

**Módulos ES** — import/export, arquitetura modular

**SPA Router** — navegação sem reload, rotas dinâmicas, carregamento de componentes

**TypeScript** — tipos, interfaces, generics, integração com projetos existentes

Projetos: SPA com roteamento próprio, formulário tipado com TypeScript, dashboard com múltiplas rotas.

Referência: `02_blueprint/spa_router.md`

---

### Fase 4 — Backend e Banco de Dados

APIs, servidores e persistência de dados.

**Node.js** — runtime no servidor, módulos, variáveis de ambiente, scripts de automação

**APIs REST** — rotas, controllers, middlewares, validação, tratamento de erros

**Banco de dados** — SQL: SELECT, INSERT, UPDATE, DELETE, JOIN, relacionamentos, SQLite e PostgreSQL

**Autenticação** — JWT, sessions, rotas protegidas, cadastro e login

Projetos: CRUD completo com Node.js e SQLite, API com TypeScript e ES Modules, sistema de autenticação com JWT.

Referência: `02_blueprint/api_project.md` e `02_blueprint/auth_system.md`

---

### Fase 5 — Algoritmos e Estruturas de Dados

Fundamentos de ciência da computação aplicados à resolução de problemas.

**Estruturas de dados** — arrays, objetos, Maps, Sets, pilhas, filas, árvores básicas

**Algoritmos** — busca linear e binária, ordenação, recursão, complexidade O(n), O(log n), O(n²)

Recursos: CS50, MIT OpenCourseWare, JavaScript.info.

Referência: `03_resources/`

---

## Projetos de referência

Projetos construídos ao longo desta trilha.

| Projeto | Tecnologias | Status |
|---|---|---|
| Lab — SPA pessoal | HTML, CSS, JS, Marked.js | Publicado |
| SQLite Backend | Node.js, Express, SQLite | Publicado |
| Movies API | TypeScript, ES Modules | Publicado |
| Image Converter | JavaScript, Canvas API | Publicado |
| Weather CLI | Python, Open-Meteo API | Publicado |
| Excel Report Bot | Python, automação de dados | Publicado |
| React Demo | React, TypeScript | Publicado |
| Tesseract | JavaScript, Three.js | Publicado |

---

## Checklist

### Ambiente
- [ ] Terminal configurado
- [ ] VS Code com extensões
- [ ] Git configurado localmente
- [ ] Conta no GitHub ativa
- [ ] Primeiro repositório criado e publicado

### Frontend
- [ ] HTML semântico
- [ ] CSS responsivo com Flexbox e Grid
- [ ] JavaScript: DOM, eventos, fetch, async
- [ ] Projeto publicado com GitHub Pages

### JavaScript Avançado
- [ ] Módulos ES
- [ ] SPA com roteamento próprio
- [ ] TypeScript básico

### Backend
- [ ] Node.js e Express
- [ ] API REST com rotas e controllers
- [ ] SQL e banco de dados relacional
- [ ] CRUD completo com validação
- [ ] Autenticação com JWT

### Portfólio
- [ ] Pelo menos 3 projetos com README completo
- [ ] Pelo menos 1 projeto com demo online
- [ ] GitHub Profile configurado

---

## Recursos

**Documentação oficial**
- MDN Web Docs
- JavaScript.info
- Documentação TypeScript
- Documentação Node.js

**Ciência da Computação**
- CS50 — Harvard
- MIT OpenCourseWare

**Referências**
- Roadmap.sh
- GitHub Pages
- Cloudflare Workers Docs

---

## Licença

Uso pessoal e comercial permitido. Redistribuição ou revenda não autorizada.

---

Aprenda construindo. Publique desde o início. Documente tudo.