# Fluxo de dados
### Funções
  - Funções permitem que você armazene um bloco de código, que faça uma determinada tarefa e que possa ser chamado sempre que necessário utilizando um curto comando.
  - Funções tornam o seu código reutilizável.
  ```
  function myFunction() {
  alert('hello');
}

myFunction();
// calls the function once
```
  - Anonymous functions
  - Parâmetros nas funções
  - Escopo da função
    - let
    - const
    - var
### Tomando decisões
  - if...else (else if)
  ```
  if (condition) {
    code to run if condition is true
  } else {
    run some other code instead
  }
```
  - Operadores lógicos: AND (&&), OR (double pipe) and NOT (!)

  - switch
  ```
  switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}
```
  - Operador ternário
```
( condition ) ? run this code : run this code instead
```
### Fazendo loopings
  
  ```
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
  text += cars[4] + "<br>";
  text += cars[5] + "<br>";
```

```
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```

  - for - percorre um bloco de código um certo número de vezes
  - for/in - percorre as propriedades de um objeto
  - for/of - percorre os valores de um objeto
  - while - percorre um bloco de código enquanto a condição é verdadeira
  - do/while - percorre um bloco de código enquanto a condição é verdadeira
  - 
  - Fibo

