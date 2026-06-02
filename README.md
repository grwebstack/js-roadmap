# JavaScript Roadmap

Um guia prático de desenvolvimento web construído através de projetos reais, documentação técnica e aplicações publicadas.

Este repositório não é uma lista de tutoriais. É uma trilha de aprendizado baseada em construção — cada etapa leva a um projeto funcional, publicado e documentado.

---

## Por que este roadmap existe

A maioria dos roadmaps diz o que estudar. Este mostra como aplicar.

A diferença entre um desenvolvedor com portfólio e um desenvolvedor sem portfólio não é o que foi estudado. É o que foi construído, documentado e publicado.

Cada seção aqui conecta fundamentos técnicos a projetos concretos.

---

## Fase 1 — Ambiente e Ferramentas

Antes de escrever código, o ambiente precisa estar configurado e o fluxo de trabalho precisa funcionar.

**Terminal**
- Navegação no sistema de arquivos
- Criação e remoção de arquivos e diretórios
- Execução de scripts e processos

**VS Code**
- Extensões essenciais
- Atalhos de produtividade
- Integração com terminal e Git

**Git e GitHub**
- Inicializar repositório
- Commits, branches e merges
- Push e pull
- GitHub Pages para deploy estático

**Primeiro deploy**
- Publicar um projeto estático com GitHub Pages
- Configurar domínio personalizado

Projeto desta fase: site pessoal publicado com GitHub Pages.

---

## Fase 2 — Fundamentos da Web

HTML, CSS e JavaScript sem framework. A base que sustenta tudo.

**HTML**
- Estrutura semântica
- Formulários e validação nativa
- Acessibilidade básica

**CSS**
- Box model
- Flexbox e Grid
- Design responsivo
- Variáveis CSS e organização de estilos

**JavaScript**
- Variáveis, tipos e operadores
- Condicionais e laços
- Funções e escopo
- Arrays e objetos
- Manipulação do DOM
- Eventos
- Fetch API e chamadas assíncronas
- Local Storage

Projetos desta fase:

- Landing page responsiva
- Calculadora funcional
- Aplicação de clima consumindo API externa
- Busca de filmes com exibição de resultados

---

## Fase 3 — JavaScript Avançado

Módulos, roteamento e arquitetura de aplicações sem framework.

**Módulos ES**
- Import e export
- Organização de código em arquivos separados
- Arquitetura modular

**SPA Router**
- Navegação sem recarregamento de página
- Gerenciamento de rotas com JavaScript puro
- Carregamento dinâmico de componentes

**TypeScript**
- Tipos básicos e inferência
- Interfaces e tipos customizados
- Generics
- Integração com projetos existentes

Projetos desta fase:

- SPA com roteamento próprio em JavaScript
- Formulário de entrevista com TypeScript e tipagem completa
- Dashboard com múltiplas rotas e dados dinâmicos

---

## Fase 4 — Backend e Banco de Dados

APIs, servidores e persistência de dados.

**Node.js**
- Runtime JavaScript no servidor
- Sistema de módulos
- Variáveis de ambiente com dotenv
- Scripts de automação

**APIs REST**
- Rotas e controllers
- Middlewares
- Validação de dados
- Tratamento de erros

**Banco de Dados**
- SQL: SELECT, INSERT, UPDATE, DELETE
- Relacionamentos e chaves estrangeiras
- JOIN entre tabelas
- SQLite para projetos locais
- PostgreSQL para produção

**Autenticação**
- Sessions e cookies
- JWT: geração, validação e refresh
- Rotas protegidas
- Cadastro e login

Projetos desta fase:

- Backend CRUD completo com Node.js, Express e SQLite
- API de busca de filmes com TypeScript e ES Modules
- Sistema de autenticação com JWT e rotas protegidas

---

## Fase 5 — Algoritmos e Estruturas de Dados

Fundamentos de ciência da computação aplicados à resolução de problemas.

**Estruturas de Dados**
- Arrays e strings
- Objetos e mapas
- Pilhas e filas
- Listas encadeadas
- Árvores básicas

**Algoritmos**
- Busca linear e binária
- Ordenação: bubble, selection, merge
- Recursão
- Complexidade de tempo e espaço: O(n), O(log n), O(n²)

**Resolução de Problemas**
- Decomposição de problemas
- Identificação de padrões
- Prática com exercícios reais

Recursos: CS50, MIT OpenCourseWare, JavaScript.info, LeetCode.

---

## Projetos de Referência

Projetos construídos durante o processo de aprendizado deste roadmap.

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

## Documentação

Todo projeto deve incluir um README com:

- Descrição objetiva do que o projeto faz
- Tecnologias utilizadas
- Instruções de instalação e execução
- Exemplos de uso ou capturas de tela
- Link para demo publicada

Documentação é parte do projeto, não etapa opcional.

---

## Portfólio

O portfólio não é um site com uma lista de cursos concluídos. É uma coleção de projetos publicados que demonstram capacidade técnica real.

Cada projeto no portfólio deve responder três perguntas:

- O que este projeto resolve?
- Como foi construído?
- Posso ver funcionando?

---

## Recursos

**Documentação oficial**
- MDN Web Docs
- JavaScript.info
- Documentação TypeScript
- Documentação Node.js
- Documentação Git

**Ciência da Computação**
- CS50 — Harvard
- MIT OpenCourseWare

**Referências**
- GitHub
- GitHub Pages
- Roadmap.sh

---

## Checklist

### Ambiente
- [ ] Terminal configurado
- [ ] VS Code instalado com extensões
- [ ] Git configurado localmente
- [ ] Conta no GitHub ativa
- [ ] Primeiro repositório criado

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
- [ ] GitHub com projetos documentados
- [ ] Pelo menos 3 projetos com README completo
- [ ] Pelo menos 1 projeto com demo online
- [ ] GitHub Profile configurado

---

## Estrutura do repositório

```
js-roadmap/
  README.md
  projetos/
    landing-page/
    spa-router/
    movies-api/
    sqlite-backend/
    auth-system/
  recursos/
    links.md
    livros.md
```

---

Aprenda construindo. Publique desde o início. Documente tudo.
