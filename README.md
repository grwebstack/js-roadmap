# JS Roadmap

Trilha de aprendizado JavaScript baseada em construção.

Cada etapa conecta fundamentos técnicos a projetos reais — funcionando, publicados e documentados.

---

## Estrutura

```
js-roadmap/
├── index.html       ← interface do roadmap interativo
├── app.js           ← lógica: renderização, progresso, localStorage
├── data.json        ← conteúdo: módulos e tópicos do roadmap
├── README.md        ← você está aqui
└── projects/        ← documentação, guias e recursos
    ├── 00_intro/
    ├── 01_config/
    ├── 02_projects/
    └── 03_resources/
```

---

## Como usar o roadmap

O roadmap roda no navegador. Não precisa instalar nada.

**1. Clone o repositório**

```bash
git clone https://github.com/seuuser/js-roadmap.git
cd js-roadmap
```

**2. Suba um servidor local**

O navegador bloqueia `fetch()` em arquivos locais. Use um servidor simples:

```bash
# Node.js
npx serve .

# Python
python -m http.server 8000
```

**3. Abra no navegador**

```
http://localhost:8000
```

**4. Marque os tópicos conforme avança**

O progresso é salvo automaticamente no `localStorage` do navegador.

---

## Como funciona

O roadmap tem três arquivos principais.

**`data.json`**

Toda a estrutura do roadmap fica aqui. Módulos, tópicos e níveis de dificuldade. Para adicionar ou remover conteúdo, edite apenas este arquivo.

**`app.js`**

Lê o `data.json`, renderiza os módulos na tela e gerencia o progresso. Cada tópico marcado é salvo no `localStorage`.

**`index.html`**

A interface visual. Usa Tailwind CSS via CDN. Sem build, sem dependências.

---

## Pasta projects/

Documentação, guias e recursos organizados por etapa.

### `00_intro/`

Fundação teórica. Comece aqui antes de qualquer projeto.

- Introdução ao JavaScript moderno
- Lógica interna: event loop, hoisting, closures
- Estruturas de dados: arrays, objetos, Maps, Sets
- Roadmap de aprendizado e carreira

### `01_config/`

Configuração de ambiente do zero.

- Git e GitHub
- VS Code: extensões e settings recomendados
- Deploy: GitHub Pages, Vercel, Netlify, Cloudflare Workers

### `02_projects/`

Blueprints de projetos prontos para seguir.

- `landing_page.md` — landing page com HTML, CSS e JS
- `spa_router.md` — SPA com roteamento client-side vanilla
- `api_project.md` — API REST com Node.js
- `auth_system.md` — autenticação com JWT
- `dashboard_project.md` — dashboard com componentes reutilizáveis
- `workers_kv.md` — edge functions com Cloudflare Workers

### `03_resources/`

Referências e materiais de apoio.

- PDFs: algoritmos, estruturas de dados, engenharia web
- Bookmarks de documentações e ferramentas
- Checklist de projeto e boas práticas
- Ferramentas de IA para acelerar o desenvolvimento

---

## Trilha de aprendizado

### Fase 1 — Ambiente e Ferramentas

Configure o ambiente antes de escrever código. Terminal, VS Code, Git e GitHub. Primeiro commit, primeiro deploy.

**Projeto:** site pessoal publicado com GitHub Pages.

Referência: `projects/01_config/`

---

### Fase 2 — Fundamentos da Web

HTML, CSS e JavaScript sem framework. A base que sustenta tudo.

- **HTML** — estrutura semântica, formulários, acessibilidade
- **CSS** — box model, Flexbox, Grid, responsividade, variáveis CSS
- **JavaScript** — variáveis, funções, DOM, eventos, Fetch API, async/await, localStorage

**Projetos:** landing page, calculadora, app de clima, busca de filmes.

Referência: `projects/00_intro/` e `projects/02_projects/landing_page.md`

---

### Fase 3 — JavaScript Avançado

Módulos ES, roteamento client-side e TypeScript.

- **Módulos ES** — import/export, arquitetura modular
- **SPA Router** — navegação sem reload, rotas dinâmicas
- **TypeScript** — tipos, interfaces, generics

**Projetos:** SPA com roteamento próprio, formulário tipado, dashboard com múltiplas rotas.

Referência: `projects/02_projects/spa_router.md`

---

### Fase 4 — Backend e Banco de Dados

APIs, servidores e persistência de dados.

- **Node.js** — runtime, módulos, variáveis de ambiente
- **APIs REST** — rotas, controllers, middlewares, validação
- **SQL** — SELECT, INSERT, UPDATE, DELETE, JOIN, SQLite e PostgreSQL
- **Autenticação** — JWT, sessions, rotas protegidas

**Projetos:** CRUD com Node.js e SQLite, API com TypeScript, autenticação com JWT.

Referência: `projects/02_projects/api_project.md` e `projects/02_projects/auth_system.md`

---

### Fase 5 — Algoritmos e Estruturas de Dados

Fundamentos de ciência da computação aplicados a problemas reais.

- **Estruturas** — arrays, objetos, Maps, Sets, pilhas, filas, árvores
- **Algoritmos** — busca, ordenação, recursão, complexidade O(n)

Referência: `projects/03_resources/`

---

## Projetos publicados

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
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Node.js Docs](https://nodejs.org/docs)

**Ciência da Computação**
- [CS50 — Harvard](https://cs50.harvard.edu)
- [MIT OpenCourseWare](https://ocw.mit.edu)

**Referências**
- [Roadmap.sh](https://roadmap.sh)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Workers](https://developers.cloudflare.com/workers)

---

Aprenda construindo. Publique desde o início. Documente tudo.