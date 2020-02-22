# Tipos de dados

Como descobrimos anteriormente, as variáveis servem para gravar valores e esses valores podem ter diferentes *tipos de dados*.

O JavaScript utiliza tipo de dados dinâmicos, ou seja, o tipo de dado de uma variável pode ser alterado após a declaração.

```
var foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

Os tipos de dados primitivos são:

- Boolean
  - Os valores booleanos representam um entidade lógica e tem dois valores: verdadeiro (*true*), e falso (*false*).
- Null
  - O tipo *null* representa exatamente um valor: *null*.
- Undefined
  - Uma variável que ainda não teve o seu valor atribuído tem o tipo de dados *indefinido*.
- Number
  - Representa um valor numérico (números entre -9007199254740991 e 9007199254740991). Não há um tipo específico para inteiros.
- String
  - Tipo usado para representar dados de texto.


E tipo de dado Objeto.

- Objetos padrão:
  - O JavaScript vem com uma série de objetos nativos, incluindo propriedades de funções, propriedades de valor, objetos fundamentais (que os outros objetos são baseados), números, datas e coleções indexadas.
  - [Referência completa](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects)
  - Os mais importantes* e que vamos nos ater mais nesse capítulo são:
    - Object
    - Array