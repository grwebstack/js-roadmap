# VS Code — Instalação e Configuração

> Guia para instalar, configurar e deixar o VS Code pronto para desenvolvimento JavaScript.

---

## O que é o VS Code?

Visual Studio Code é um editor de código gratuito desenvolvido pela Microsoft. É leve, altamente extensível e se tornou o editor mais popular entre desenvolvedores web e JavaScript.

---

## 1. Instalação

1. Acesse [code.visualstudio.com](https://code.visualstudio.com)
2. Baixe o instalador para o seu sistema operacional
3. Execute e conclua a instalação com as opções padrão

> **Dica Windows:** durante a instalação, marque a opção **"Adicionar ao PATH"** — isso permite abrir o VS Code pelo terminal com o comando `code .`

Verificando a instalação no terminal:

```bash
code --version
```

---

## 2. Abrindo um projeto

```bash
# Abre a pasta atual no VS Code
code .

# Abre uma pasta específica
code /caminho/do/projeto
```

---

## 3. Configurações recomendadas

As configurações do VS Code ficam em um arquivo `settings.json`. Para acessá-lo:

**File → Preferences → Settings → ícone de arquivo no canto superior direito**

Cole as configurações abaixo:

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.suggestSelection": "first",
  "editor.linkedEditing": true,
  "files.autoSave": "onFocusChange",
  "files.eol": "\n",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.startupEditor": "none",
  "workbench.iconTheme": "material-icon-theme",
  "explorer.confirmDelete": false,
  "explorer.compactFolders": false
}
```

### O que cada configuração faz

| Chave | Descrição |
|---|---|
| `editor.formatOnSave` | Formata o código automaticamente ao salvar |
| `editor.defaultFormatter` | Define o Prettier como formatador padrão |
| `editor.wordWrap` | Quebra linhas longas visualmente |
| `editor.minimap.enabled` | Remove o minimapa lateral (mais espaço para o código) |
| `files.autoSave` | Salva automaticamente ao mudar de janela |
| `files.eol` | Usa `LF` como padrão de quebra de linha (compatível com Linux/macOS) |
| `terminal.integrated.defaultProfile.windows` | Define o Git Bash como terminal padrão no Windows |
| `explorer.compactFolders` | Exibe pastas aninhadas de forma expandida na sidebar |

---

## 4. Extensões essenciais

Para instalar uma extensão: `Ctrl+Shift+X` (ou `Cmd+Shift+X` no macOS) e pesquise pelo nome.

### Qualidade de código

| Extensão | ID | Para que serve |
|---|---|---|
| **Prettier** | `esbenp.prettier-vscode` | Formatação automática de código |
| **ESLint** | `dbaeumer.vscode-eslint` | Identifica erros e más práticas no JS |
| **Error Lens** | `usernamehw.errorlens` | Exibe erros e avisos inline no código |

### Produtividade

| Extensão | ID | Para que serve |
|---|---|---|
| **Auto Rename Tag** | `formulahendry.auto-rename-tag` | Renomeia a tag de fechamento automaticamente ao editar a de abertura |
| **Path Intellisense** | `christian-kohler.path-intellisense` | Autocomplete para caminhos de arquivos |
| **Import Cost** | `wix.vscode-import-cost` | Mostra o tamanho de cada import no código |
| **Todo Highlight** | `wayou.vscode-todo-highlight` | Destaca comentários `TODO` e `FIXME` |

### Aparência

| Extensão | ID | Para que serve |
|---|---|---|
| **Material Icon Theme** | `pkief.material-icon-theme` | Ícones bonitos para arquivos e pastas |
| **One Dark Pro** | `zhuangtongfa.material-theme` | Tema escuro popular e confortável para os olhos |

### JavaScript e Node.js

| Extensão | ID | Para que serve |
|---|---|---|
| **JavaScript (ES6) Snippets** | `xabikos.javascriptsnippets` | Snippets prontos para ES6+ |
| **NPM Intellisense** | `christian-kohler.npm-intellisense` | Autocomplete para pacotes do npm nos imports |
| **DotENV** | `mikestead.dotenv` | Destaque de sintaxe para arquivos `.env` |

---

## 5. Configurando o Prettier

Crie um arquivo `.prettierrc` na raiz do seu projeto:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### O que cada opção faz

| Opção | Descrição |
|---|---|
| `semi` | Adiciona ponto e vírgula ao final das linhas |
| `singleQuote` | Usa aspas simples em vez de duplas |
| `tabWidth` | Define 2 espaços por indentação |
| `trailingComma` | Adiciona vírgula no último item de objetos e arrays |
| `printWidth` | Quebra linhas com mais de 80 caracteres |

---

## 6. Atalhos essenciais

| Atalho (Windows/Linux) | Atalho (macOS) | Ação |
|---|---|---|
| `Ctrl+P` | `Cmd+P` | Abre um arquivo pelo nome |
| `Ctrl+Shift+P` | `Cmd+Shift+P` | Abre a paleta de comandos |
| `Ctrl+` ` | `Cmd+` ` | Abre o terminal integrado |
| `Ctrl+B` | `Cmd+B` | Mostra/oculta a sidebar |
| `Ctrl+D` | `Cmd+D` | Seleciona a próxima ocorrência da palavra |
| `Alt+↑/↓` | `Option+↑/↓` | Move a linha para cima ou para baixo |
| `Ctrl+/` | `Cmd+/` | Comenta/descomenta a linha atual |
| `Ctrl+Shift+K` | `Cmd+Shift+K` | Deleta a linha atual |
| `F2` | `F2` | Renomeia uma variável em todo o arquivo |
| `F12` | `F12` | Vai para a definição da função ou variável |

---

## 7. Terminal integrado

O VS Code tem um terminal integrado — você não precisa sair do editor para rodar comandos.

Abrindo o terminal:
- `Ctrl+` `` ` `` (Windows/Linux)  
- `Cmd+` `` ` `` (macOS)

Para abrir múltiplos terminais, clique no ícone **+** no painel do terminal.

---

> Ambiente configurado. Próximo passo: veja `git_config.md` para configurar o Git e conectar ao GitHub.