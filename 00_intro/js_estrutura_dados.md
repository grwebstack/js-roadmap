# Algoritmos e Estruturas de Dados em JavaScript

## Uma introdução através da história da programação web

---

## De onde veio tudo isso

A história da programação web começa nos anos 1990, quando Tim Berners-Lee criou o HTML para compartilhar documentos acadêmicos na internet. O HTML (HyperText Markup Language) era puro texto estático: você escrevia uma página, ela aparecia no navegador, e nada mudava.

Em 1995, a Netscape contratou Brendan Eich para criar uma linguagem que rodasse direto no navegador. Em dez dias ele criou o JavaScript. A ideia era simples: dar comportamento às páginas HTML. Validar um formulário sem recarregar a página já era revolucionário naquela época.

Com o tempo, o CSS entrou para cuidar da aparência. A divisão clássica ficou assim:

```
HTML  -> estrutura e conteúdo
CSS   -> aparência e layout
JS    -> comportamento e lógica
```

Hoje o JavaScript não serve só para navegadores. Com o Node.js (2009), ele passou a rodar no servidor também. E com essa expansão veio a necessidade de entender dois conceitos fundamentais que estão por baixo de qualquer programa funcional: **algoritmos** e **estruturas de dados**.

---

## O que é um algoritmo

Um algoritmo é uma sequência finita de instruções para resolver um problema. Não é um conceito exclusivo da computação: uma receita de bolo é um algoritmo. Um mapa de instruções para montar um móvel também é.

Na programação, algoritmos descrevem como o computador deve agir passo a passo. Eles envolvem três estruturas básicas de controle:

**Sequência**: instruções executadas uma após a outra.

```js
const preco = 100;
const desconto = 10;
const total = preco - desconto;
console.log(total); // 90
```

**Condição**: o programa toma uma decisão com base em algum critério.

```js
const idade = 20;

if (idade >= 18) {
  console.log("acesso permitido");
} else {
  console.log("acesso negado");
}
```

**Repetição (loop)**: o programa repete uma ação enquanto uma condição for verdadeira.

```js
for (let i = 1; i <= 5; i++) {
  console.log("linha " + i);
}
```

Toda lógica de programação, por mais complexa que seja, é construída com combinações dessas três estruturas.

---

## O que é uma estrutura de dados

Se um algoritmo diz *como fazer*, uma estrutura de dados diz *como guardar e organizar a informação*. Escolher a estrutura certa afeta diretamente a eficiência e a clareza do código.

Imagine que você precisa guardar os nomes de cem usuários. Você poderia criar cem variáveis separadas. Seria impraticável. Uma estrutura de dados resolve isso de forma organizada.

As estruturas de dados definem:
- Como os dados são armazenados na memória
- Como acessar, adicionar ou remover elementos
- Qual operação é rápida e qual é lenta dependendo da estrutura

---

## Algoritmos mais usados em JavaScript para web

### 1. Iteração com forEach

Percorrer todos os elementos de uma lista é a operação mais comum no desenvolvimento web. Usada para renderizar listas no DOM, processar respostas de APIs e muito mais.

```js
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});
```

---

### 2. Transformação com map

Cria um novo array aplicando uma função a cada elemento. Muito usado para transformar dados antes de exibir na interface.

```js
const precos = [100, 200, 300];

const comDesconto = precos.map(function(preco) {
  return preco * 0.9;
});

console.log(comDesconto); // [90, 180, 270]
```

---

### 3. Filtragem com filter

Retorna apenas os elementos que passam por uma condição. Fundamental em buscas, filtros de produtos e listas dinâmicas.

```js
const produtos = [
  { nome: "camiseta", preco: 49 },
  { nome: "tênis", preco: 299 },
  { nome: "boné", preco: 89 }
];

const baratos = produtos.filter(function(p) {
  return p.preco < 100;
});

console.log(baratos);
// [{ nome: "camiseta", preco: 49 }, { nome: "boné", preco: 89 }]
```

---

### 4. Redução com reduce

Percorre um array e acumula um único valor. Usado para somar carrinhos de compra, calcular totais, agregar dados.

```js
const itens = [30, 50, 20, 10];

const total = itens.reduce(function(acumulador, valor) {
  return acumulador + valor;
}, 0);

console.log(total); // 110
```

---

### 5. Busca com find e findIndex

Localiza o primeiro elemento que satisfaz uma condição. Comum ao buscar um usuário pelo ID ou um item numa lista.

```js
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carol" }
];

const usuario = usuarios.find(function(u) {
  return u.id === 2;
});

console.log(usuario); // { id: 2, nome: "Bruno" }
```

---

### 6. Ordenação com sort

Reorganiza os elementos de um array. Usado em tabelas, rankings e listas ordenadas.

```js
const numeros = [40, 10, 30, 20];

numeros.sort(function(a, b) {
  return a - b; // ordem crescente
});

console.log(numeros); // [10, 20, 30, 40]
```

---

### 7. Busca binária (binary search)

Algoritmo clássico para encontrar um elemento em um array ordenado com eficiência. Em vez de percorrer elemento por elemento, divide o array ao meio em cada passo.

```js
function buscaBinaria(array, alvo) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === alvo) return meio;
    if (array[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }

  return -1;
}

const lista = [2, 5, 8, 12, 16, 23, 38];
console.log(buscaBinaria(lista, 12)); // 3
```

---

### 8. Debounce

Algoritmo de controle de execução. Atrasa a chamada de uma função até que o usuário pare de disparar eventos por um tempo determinado. Essencial em campos de busca com autocompletar.

```js
function debounce(funcao, espera) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      funcao(...args);
    }, espera);
  };
}

const buscar = debounce(function(termo) {
  console.log("buscando:", termo);
}, 300);

// Chamada múltiplas vezes, mas executa só uma vez após 300ms de pausa
buscar("ja");
buscar("jav");
buscar("java");
buscar("javascript");
```

---

## Estruturas de dados mais usadas em JavaScript para web

### 1. Array

A estrutura mais básica e mais usada. Uma coleção ordenada de elementos acessados por índice numérico.

```js
const nomes = ["Ana", "Bruno", "Carol"];

console.log(nomes[0]); // "Ana"
nomes.push("Diego");   // adiciona no fim
nomes.splice(1, 1);    // remove 1 elemento a partir do índice 1
console.log(nomes);    // ["Ana", "Carol", "Diego"]
```

Quando usar: listas de produtos, itens de um carrinho, resultados de uma API, qualquer coleção com ordem importando.

---

### 2. Objeto (Object)

Coleção de pares chave-valor. É a estrutura principal para representar entidades no JavaScript. Quase tudo no desenvolvimento web passa por objetos.

```js
const usuario = {
  id: 42,
  nome: "Mariana",
  ativo: true
};

console.log(usuario.nome);         // "Mariana"
usuario.email = "m@m.com";         // adiciona campo
delete usuario.ativo;              // remove campo
console.log(Object.keys(usuario)); // ["id", "nome", "email"]
```

Quando usar: representar um usuário, produto, configuração, resposta de API.

---

### 3. Map

Similar ao objeto, mas as chaves podem ser de qualquer tipo. Mantém a ordem de inserção e oferece métodos próprios. Mais eficiente que objetos para dicionários com muitas entradas dinâmicas.

```js
const cache = new Map();

cache.set("pagina_1", "<html>...</html>");
cache.set("pagina_2", "<html>...</html>");

console.log(cache.get("pagina_1")); // "<html>...</html>"
console.log(cache.has("pagina_3")); // false
console.log(cache.size);            // 2
```

Quando usar: cache de requisições, contagem de frequências, associações chave-valor onde a ordem importa.

---

### 4. Set

Coleção de valores únicos. Automaticamente rejeita duplicatas. Muito útil para remover repetições de arrays.

```js
const tags = new Set(["js", "web", "js", "html", "web"]);
console.log(tags); // Set { "js", "web", "html" }

tags.add("css");
tags.delete("html");
console.log([...tags]); // ["js", "web", "css"]
```

Quando usar: listas de tags, IDs únicos visitados, remoção de duplicatas em dados de API.

---

### 5. Stack (Pilha)

Estrutura onde o último elemento inserido é o primeiro a sair: LIFO (Last In, First Out). Em JavaScript, é implementada com arrays usando push e pop.

```js
const historico = [];

historico.push("pagina-inicial");
historico.push("produtos");
historico.push("detalhe-produto");

const voltando = historico.pop();
console.log(voltando);    // "detalhe-produto"
console.log(historico);   // ["pagina-inicial", "produtos"]
```

Quando usar: histórico de navegação, desfazer/refazer ações (undo/redo), pilha de chamadas em debuggers.

---

### 6. Queue (Fila)

Estrutura onde o primeiro elemento inserido é o primeiro a sair: FIFO (First In, First Out). Implementada com arrays usando push e shift.

```js
const fila = [];

fila.push("requisicao-1");
fila.push("requisicao-2");
fila.push("requisicao-3");

const processando = fila.shift();
console.log(processando); // "requisicao-1"
console.log(fila);        // ["requisicao-2", "requisicao-3"]
```

Quando usar: fila de requisições HTTP, processamento de eventos em ordem, animações sequenciais.

---

### 7. Linked List (Lista Encadeada)

Cada elemento (nó) contém um valor e uma referência para o próximo nó. Não existe índice: o acesso é feito percorrendo a cadeia. Útil quando inserções e remoções no meio da lista precisam ser eficientes.

```js
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

const a = new No("primeiro");
const b = new No("segundo");
const c = new No("terceiro");

a.proximo = b;
b.proximo = c;

// percorrendo a lista
let atual = a;
while (atual !== null) {
  console.log(atual.valor);
  atual = atual.proximo;
}
// "primeiro"
// "segundo"
// "terceiro"
```

Quando usar: implementar filas e pilhas com melhor performance, editores de texto, sistemas de desfazer ações complexas.

---

### 8. Hash Table (via objeto ou Map)

Estrutura que associa chaves a valores com acesso em tempo constante. Em JavaScript, objetos e Maps já implementam esse comportamento internamente.

```js
const contagem = {};

const palavras = ["js", "html", "js", "css", "js", "html"];

palavras.forEach(function(palavra) {
  contagem[palavra] = (contagem[palavra] || 0) + 1;
});

console.log(contagem);
// { js: 3, html: 2, css: 1 }
```

Quando usar: contar frequências, agrupar dados, busca rápida por chave, cache de resultados.

---

### 9. Tree (Árvore) — via DOM

A árvore é uma estrutura hierárquica onde cada nó pode ter filhos. O próprio DOM (Document Object Model) do navegador é uma árvore. Quando você manipula elementos HTML com JavaScript, está trabalhando com uma árvore.

```js
// navegando na árvore do DOM
const pai = document.getElementById("container");

// filhos diretos
console.log(pai.children);

// adiciona um filho
const filho = document.createElement("p");
filho.textContent = "novo parágrafo";
pai.appendChild(filho);

// remove um filho
pai.removeChild(filho);
```

Quando usar: sempre que trabalhar com o DOM, criar menus hierárquicos, estruturas de comentários aninhados.

---

## Resumo comparativo

```
Estrutura     | Acesso      | Inserção    | Uso principal na web
------------- | ----------- | ----------- | --------------------------
Array         | O(1)        | O(1) fim    | listas, coleções ordenadas
Object/Map    | O(1)        | O(1)        | entidades, dicionários
Set           | O(1)        | O(1)        | valores únicos
Stack         | O(1) topo   | O(1)        | histórico, undo/redo
Queue         | O(1) frente | O(1)        | filas de requisição
Linked List   | O(n)        | O(1)        | estruturas dinâmicas
Tree (DOM)    | O(log n)    | O(log n)    | interface gráfica
```

---

## Conclusão

A programação web começou como documentos estáticos em HTML. Hoje é uma plataforma completa para construir aplicações complexas. Mas a base continua a mesma: instruções que o computador segue (algoritmos) e formas de organizar a informação que elas processam (estruturas de dados).

Dominar esses conceitos em JavaScript não é memorizar sintaxe. É entender qual ferramenta usar para cada problema e por quê. Com isso, qualquer lógica de aplicação web fica mais clara, mais eficiente e mais fácil de manter.