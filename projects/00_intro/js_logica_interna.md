# JavaScript — Os pilares lógicos internos da linguagem

Este tutorial percorre os mecanismos que realmente governam o comportamento do JavaScript por dentro. Não é sobre sintaxe moderna nem sobre frameworks. É sobre entender o que acontece quando o motor executa o seu código.

---

## 1. Tudo começa no escopo

Escopo é a regra que define onde uma variável existe e onde ela pode ser acessada.

No JavaScript, existem três níveis de escopo:

- **Escopo global** — variável declarada fora de qualquer bloco ou função
- **Escopo de função** — variável declarada dentro de uma função, invisível fora dela
- **Escopo de bloco** — variável declarada com `let` ou `const` dentro de `{}`, invisível fora daquele bloco

```js
let x = "global";

function exemplo() {
  let x = "local da função";
  console.log(x); // "local da função"
}

exemplo();
console.log(x); // "global"
```

O motor sempre resolve variáveis de dentro para fora. Se não encontrar no escopo atual, sobe para o de cima. Se chegar ao global e não encontrar, lança `ReferenceError`.

### var, let e const — a diferença que importa

`var` tem escopo de função, não de bloco. Isso causa comportamentos inesperados:

```js
function teste() {
  if (true) {
    var nome = "dentro do if";
  }
  console.log(nome); // "dentro do if" — vazou do bloco
}
```

`let` e `const` respeitam o bloco:

```js
function teste() {
  if (true) {
    let nome = "dentro do if";
  }
  console.log(nome); // ReferenceError — não existe aqui
}
```

Use `const` por padrão. Use `let` quando precisar reatribuir. Evite `var`.

---

## 2. Hoisting — o que sobe antes de tudo

O motor JavaScript faz dois passos ao executar qualquer bloco de código: primeiro lê tudo e registra as declarações, depois executa linha por linha.

Esse processo de "registrar antes" é o hoisting.

### Hoisting com var

```js
console.log(nome); // undefined — não erro, mas não tem valor ainda
var nome = "Ana";
console.log(nome); // "Ana"
```

A declaração `var nome` foi içada para o topo, mas a atribuição `= "Ana"` ficou no lugar original.

### Hoisting com let e const

```js
console.log(nome); // ReferenceError
let nome = "Ana";
```

`let` e `const` também são içados, mas ficam numa zona morta temporal (Temporal Dead Zone) até a linha de declaração. Acessar antes disso é erro.

### Hoisting de funções

Funções declaradas com `function` sobem inteiras:

```js
saudacao(); // "Olá" — funciona antes da declaração

function saudacao() {
  console.log("Olá");
}
```

Arrow functions e expressões de função não sobem da mesma forma:

```js
saudacao(); // TypeError — saudacao não é função ainda

const saudacao = () => {
  console.log("Olá");
};
```

---

## 3. Closures — funções que lembram

Uma closure acontece quando uma função carrega consigo o escopo onde foi criada, mesmo depois que esse escopo terminou de executar.

```js
function criarContador() {
  let contagem = 0;

  return function () {
    contagem++;
    return contagem;
  };
}

const contador = criarContador();

console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

A função interna foi retornada. O escopo de `criarContador` tecnicamente terminou. Mesmo assim, `contagem` ainda existe porque a função interna mantém uma referência a ele. Isso é uma closure.

### Por que closures importam

Closures são o mecanismo por trás de:

- **Encapsulamento** — esconder estado sem usar classes
- **Callbacks** — funções passadas para serem chamadas depois, que ainda precisam de contexto
- **Hooks do React** — `useState` e `useEffect` dependem diretamente de closures
- **Funções parcialmente aplicadas** — criar funções especializadas a partir de funções gerais

```js
function multiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

const dobrar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15
```

Cada chamada a `multiplicador` cria um escopo novo. `dobrar` e `triplicar` são closures sobre escopos diferentes.

### O problema clássico com closures e loops

```js
// Comportamento inesperado com var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// Imprime: 3, 3, 3
```

O `var i` é compartilhado por todas as iterações. Quando o timeout executa, `i` já vale 3.

```js
// Correto com let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// Imprime: 0, 1, 2
```

`let` cria um novo escopo por iteração, então cada função captura o valor certo.

---

## 4. O Event Loop — como o JS nunca trava

JavaScript é single-threaded. Existe uma única thread de execução. Mas a web precisa de assincronismo: timers, requisições HTTP, eventos de usuário. Como isso funciona sem travar o programa?

A resposta é o Event Loop.

### As peças do sistema

**Call Stack** — pilha de execução. Cada vez que uma função é chamada, entra na pilha. Quando retorna, sai. O JS executa o que está no topo.

**Web APIs** — funcionalidades fornecidas pelo ambiente (não pela linguagem em si): `setTimeout`, `fetch`, `addEventListener`. Quando o JS chama essas APIs, elas rodam fora da call stack.

**Callback Queue (Task Queue)** — fila onde os callbacks das Web APIs esperam. `setTimeout` de 1 segundo coloca o callback aqui depois de 1 segundo.

**Microtask Queue** — fila com prioridade mais alta que a callback queue. Promessas resolvidas colocam seus `.then` aqui.

**Event Loop** — loop que fica verificando: a call stack está vazia? Se sim, pega o próximo item da microtask queue. Se ela estiver vazia, pega da callback queue.

### Visualizando o fluxo

```js
console.log("1 — início");

setTimeout(() => {
  console.log("3 — timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("2 — promise");
});

console.log("4 — fim do código síncrono");
```

Saída:

```
1 — início
4 — fim do código síncrono
2 — promise
3 — timeout
```

Por que a promise vem antes do timeout, se ambos têm delay zero? Porque microtasks (promessas) têm prioridade sobre macrotasks (setTimeout).

### A regra fundamental

O Event Loop nunca interrompe uma função no meio. Se uma função está na call stack, ela roda até terminar. Código síncrono pesado bloqueia tudo:

```js
function bloquear() {
  const inicio = Date.now();
  while (Date.now() - inicio < 2000) {} // trava por 2 segundos
}

bloquear();
// Nenhum evento, nenhum timer, nenhum callback roda durante esses 2 segundos
```

---

## 5. Protótipos — herança sem classes

Antes de existirem as `class` do ES6, o JavaScript usava um sistema de herança baseado em protótipos. Hoje as classes existem, mas são apenas sintaxe sobre esse mesmo mecanismo.

### O que é prototype chain

Todo objeto em JavaScript tem uma propriedade interna que aponta para outro objeto, chamado seu protótipo. Quando você tenta acessar uma propriedade que o objeto não tem, o motor sobe nessa cadeia.

```js
const animal = {
  respirar() {
    return "respirando";
  }
};

const cachorro = Object.create(animal);
cachorro.latir = function () {
  return "au";
};

console.log(cachorro.latir());    // "au" — próprio do cachorro
console.log(cachorro.respirar()); // "respirando" — veio do protótipo
```

`cachorro` não tem `respirar`. O motor encontra `respirar` no protótipo `animal`.

### Como as classes funcionam por baixo

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `${this.nome} faz um som`;
  }
}

class Cachorro extends Animal {
  falar() {
    return `${this.nome} late`;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.falar()); // "Rex late"
```

Isso é açúcar sintático. Por baixo, `falar` está em `Cachorro.prototype`. Quando `rex.falar()` é chamado, o motor procura `falar` em `rex`, não encontra, sobe para `Cachorro.prototype`, encontra, executa.

### Verificando a cadeia

```js
console.log(rex instanceof Cachorro); // true
console.log(rex instanceof Animal);   // true
console.log(Object.getPrototypeOf(rex) === Cachorro.prototype); // true
```

---

## 6. This — o contexto de execução

`this` é uma referência ao objeto de contexto no qual a função está sendo chamada. O valor de `this` não é determinado por onde a função foi definida, mas por como ela foi chamada.

### Quatro formas de determinar this

**1. Chamada simples** — `this` é o objeto global (ou `undefined` em strict mode)

```js
function mostrar() {
  console.log(this);
}

mostrar(); // window (no browser) ou global (no Node)
```

**2. Chamada como método** — `this` é o objeto antes do ponto

```js
const usuario = {
  nome: "Ana",
  cumprimentar() {
    console.log(`Olá, ${this.nome}`);
  }
};

usuario.cumprimentar(); // "Olá, Ana"
```

**3. Chamada com new** — `this` é o novo objeto criado

```js
function Pessoa(nome) {
  this.nome = nome;
}

const p = new Pessoa("Carlos");
console.log(p.nome); // "Carlos"
```

**4. Chamada com bind, call ou apply** — `this` é o que você definir explicitamente

```js
function cumprimentar() {
  console.log(`Olá, ${this.nome}`);
}

const objeto = { nome: "Beatriz" };

cumprimentar.call(objeto);    // "Olá, Beatriz"
cumprimentar.apply(objeto);   // "Olá, Beatriz"

const fn = cumprimentar.bind(objeto);
fn();                          // "Olá, Beatriz"
```

### Arrow functions não têm this próprio

Arrow functions herdam o `this` do escopo onde foram definidas. Isso as torna úteis dentro de callbacks:

```js
const timer = {
  segundos: 0,

  iniciar() {
    setInterval(() => {
      this.segundos++; // this correto — herdado de iniciar()
      console.log(this.segundos);
    }, 1000);
  }
};

timer.iniciar();
```

Se usasse uma função comum dentro do `setInterval`, `this` seria `undefined` (em strict mode) ou `window`, não `timer`.

---

## 7. Coerção de tipos

JavaScript é uma linguagem de tipagem dinâmica e realiza conversões de tipos automaticamente. Isso se chama coerção implícita, e é a fonte de muita confusão.

### Coerção com ==

O operador `==` compara valores após tentar converter tipos:

```js
console.log(0 == false);   // true — false vira 0
console.log("" == false);  // true — ambos viram 0
console.log(null == undefined); // true — regra especial
console.log(1 == "1");     // true — "1" vira 1
```

### Coerção com +

O operador `+` faz adição numérica ou concatenação de strings dependendo dos tipos:

```js
console.log(1 + "2");    // "12" — número virou string
console.log("3" - 1);    // 2 — string virou número
console.log(true + 1);   // 2 — true vira 1
console.log([] + []);    // "" — arrays viram strings vazias
console.log([] + {});    // "[object Object]"
console.log({} + []);    // "[object Object]" ou 0 dependendo do contexto
```

### Use === para comparações confiáveis

`===` não faz coerção. Compara tipo e valor:

```js
console.log(1 === "1");  // false
console.log(0 === false); // false
console.log(null === undefined); // false
```

Regra prática: use `===` sempre, a não ser que tenha um motivo específico para usar `==`.

### Valores falsy

Estes são todos os valores que se convertem para `false` em contexto booleano:

```js
if (!false)     console.log("false é falsy");
if (!0)         console.log("0 é falsy");
if (!-0)        console.log("-0 é falsy");
if (!0n)        console.log("0n é falsy");
if (!"")        console.log("string vazia é falsy");
if (!null)      console.log("null é falsy");
if (!undefined) console.log("undefined é falsy");
if (!NaN)       console.log("NaN é falsy");
```

Tudo o que não está nessa lista é truthy — incluindo `[]`, `{}` e `"0"`.

---

## 8. Execução assíncrona na prática

Os três modelos de assincronismo do JavaScript evoluíram historicamente. Entender os três ajuda a ler código legado e a escrever código moderno com clareza.

### Callbacks

O modelo original. Você passa uma função para ser chamada quando algo terminar:

```js
function buscarDados(callback) {
  setTimeout(() => {
    callback(null, { nome: "usuário" });
  }, 1000);
}

buscarDados(function (erro, dados) {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(dados.nome);
});
```

O problema com callbacks aparece quando operações assíncronas dependem umas das outras. O resultado é o "callback hell":

```js
buscar(id, function (err, usuario) {
  buscarPedidos(usuario.id, function (err, pedidos) {
    buscarItens(pedidos[0].id, function (err, itens) {
      // três níveis e já é difícil de ler
    });
  });
});
```

### Promises

Uma Promise representa um valor que pode estar disponível agora, no futuro, ou nunca. Ela tem três estados: pendente, resolvida, rejeitada.

```js
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: "Ana" });
      } else {
        reject(new Error("ID inválido"));
      }
    }, 500);
  });
}

buscarUsuario(1)
  .then(usuario => {
    console.log(usuario.nome); // "Ana"
    return usuario.id;
  })
  .then(id => {
    console.log(`ID: ${id}`);
  })
  .catch(erro => {
    console.error(erro.message);
  });
```

### Async/Await

Açúcar sintático sobre Promises. O código parece síncrono mas continua sendo assíncrono:

```js
async function carregarDados(id) {
  try {
    const usuario = await buscarUsuario(id);
    console.log(usuario.nome);

    const pedidos = await buscarPedidos(usuario.id);
    console.log(pedidos.length);
  } catch (erro) {
    console.error(erro.message);
  }
}

carregarDados(1);
```

`await` suspende a execução da função `async` até a Promise resolver — sem bloquear o Event Loop. Outras operações continuam rodando enquanto aguarda.

Uma função marcada com `async` sempre retorna uma Promise, mesmo que você retorne um valor simples:

```js
async function valor() {
  return 42;
}

valor().then(v => console.log(v)); // 42
```

---

## 9. Garbage Collection — memória automática

O JavaScript libera memória automaticamente. O desenvolvedor não precisa alocar ou desalocar manualmente como em C.

O mecanismo principal é o **mark-and-sweep**: o motor periodicamente percorre todos os objetos a partir das raízes (variáveis globais, call stack ativa), marca os que são alcançáveis, e descarta os que não são.

### O que é "alcançável"

```js
let usuario = { nome: "Ana" };
// O objeto { nome: "Ana" } é alcançável via `usuario`

usuario = null;
// Agora não há mais referência ao objeto
// O GC pode coletar a memória
```

### Memory leak — o que impede a coleta

O garbage collector não pode coletar o que ainda tem referência, mesmo que você não precise mais.

```js
// Closure mantendo referência desnecessária
function criarLeak() {
  const dadosGrandes = new Array(1000000).fill("*");

  return function () {
    // dadosGrandes está na closure mas nunca é usado
    return "pronto";
  };
}

const fn = criarLeak();
// dadosGrandes nunca será coletado enquanto fn existir
```

Padrões comuns que causam memory leaks:

- Event listeners registrados e nunca removidos
- Variáveis globais acumulando dados
- Closures capturando objetos grandes sem necessidade
- Referências em caches que nunca expiram

---

## Resumo dos pilares

| Mecanismo | O que faz | Por que importa |
|---|---|---|
| Escopo | Define onde variáveis existem | Controla visibilidade e duração dos dados |
| Hoisting | Içamento de declarações | Explica comportamentos surpreendentes com var |
| Closures | Função preserva seu escopo de criação | Base de encapsulamento e estado em JS |
| Event Loop | Coordena execução assíncrona | Permite IO sem travar a thread |
| Protótipos | Herança por delegação de objeto | Fundação de toda orientação a objetos em JS |
| This | Contexto de execução da função | Define qual objeto a função representa |
| Coerção | Conversão automática de tipos | Fonte de bugs e de poder quando entendida |
| Async/Await | Sintaxe para código assíncrono legível | Simplifica Promises e callbacks |
| GC | Gerenciamento automático de memória | Libera o dev, mas exige cuidado com referências |

Compreender esses nove mecanismos é suficiente para ler qualquer código JavaScript com confiança, depurar comportamentos inesperados e tomar decisões de design informadas — independentemente do framework que você estiver usando.