# Git & GitHub — Configuração e Primeiros Passos

> Guia introdutório para instalar, configurar e fazer seu primeiro commit com Git e GitHub.

---

## O que é Git?

Git é um sistema de controle de versão — ele registra o histórico de alterações do seu código, permitindo voltar a versões anteriores, trabalhar em paralelo e colaborar com outras pessoas.

**GitHub** é uma plataforma online que hospeda repositórios Git, facilitando o compartilhamento e a colaboração em projetos.

---

## 1. Instalação

### Windows

1. Acesse [git-scm.com](https://git-scm.com) e baixe o instalador
2. Execute o instalador e mantenha as opções padrão
3. Na etapa **"Choosing the default editor"**, selecione VS Code se preferir
4. Conclua a instalação

Após instalar, o **Git Bash** estará disponível — um terminal Unix-like para usar os comandos do Git no Windows.

### macOS

```bash
# Via Homebrew (recomendado)
brew install git
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
```

---

## 2. Verificando a instalação

Abra o terminal (ou Git Bash no Windows) e rode:

```bash
git --version
# git version 2.x.x
```

---

## 3. Configuração inicial

Antes de usar o Git, você precisa informar seu nome e e-mail. Essas informações aparecem em cada commit que você fizer.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Definindo o VS Code como editor padrão:

```bash
git config --global core.editor "code --wait"
```

Definindo `main` como nome padrão para a branch principal:

```bash
git config --global init.defaultBranch main
```

Verificando todas as configurações salvas:

```bash
git config --list
```

---

## 4. Criando uma conta no GitHub

1. Acesse [github.com](https://github.com) e crie sua conta
2. Confirme o e-mail cadastrado
3. Use o **mesmo e-mail** que configurou no Git acima

---

## 5. Autenticação com o GitHub

O GitHub não aceita mais senha para operações via terminal. A forma recomendada é usar um **token de acesso pessoal (PAT)**.

### Gerando o token

1. No GitHub, vá em **Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Clique em **Generate new token**
3. Dê um nome, defina a validade e marque a permissão **repo**
4. Copie o token gerado — ele aparece apenas uma vez

### Salvando o token localmente

```bash
git config --global credential.helper store
```

Na próxima vez que o Git pedir sua senha, cole o token. Ele será salvo automaticamente.

---

## 6. Seu primeiro repositório

### Criando localmente

```bash
# Crie uma pasta e entre nela
mkdir meu-projeto
cd meu-projeto

# Inicialize o repositório Git
git init
```

### Criando um arquivo inicial

```bash
echo "# Meu Projeto" > README.md
```

---

## 7. Primeiro commit

O fluxo básico do Git tem três etapas: **modificar → adicionar ao stage → commitar**.

```bash
# Verifica o status dos arquivos
git status

# Adiciona todos os arquivos ao stage
git add .

# Cria o commit com uma mensagem descritiva
git commit -m "primeiro commit"
```

> **Boa prática:** mensagens de commit devem descrever *o que* foi feito, não *como*. Prefira `"adiciona página de login"` a `"modifica arquivo"`.

---

## 8. Conectando ao GitHub

1. No GitHub, clique em **New repository**
2. Dê um nome ao repositório e clique em **Create repository**
3. Copie a URL do repositório (formato `https://github.com/usuario/repo.git`)

No terminal:

```bash
# Conecta o repositório local ao remoto
git remote add origin https://github.com/usuario/meu-projeto.git

# Envia o código para o GitHub
git push -u origin main
```

A flag `-u` define `origin main` como padrão — nos próximos pushes basta rodar `git push`.

---

## 9. Fluxo do dia a dia

```bash
# 1. Verifica o que mudou
git status

# 2. Adiciona as alterações
git add .

# 3. Commita com mensagem clara
git commit -m "descrição do que foi feito"

# 4. Envia para o GitHub
git push
```

---

## Resumo dos comandos essenciais

| Comando | O que faz |
|---|---|
| `git init` | Inicializa um repositório Git na pasta atual |
| `git status` | Mostra o estado atual dos arquivos |
| `git add .` | Adiciona todos os arquivos ao stage |
| `git commit -m "msg"` | Cria um commit com a mensagem informada |
| `git push` | Envia os commits para o repositório remoto |
| `git pull` | Baixa e integra as atualizações do remoto |
| `git log` | Exibe o histórico de commits |
| `git clone <url>` | Clona um repositório remoto para sua máquina |

---

> Próximo passo: configure seu VS Code — veja `vscode_config.md`.