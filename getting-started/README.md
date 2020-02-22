# O que é JavaScript, realmente?

JavaScript (abreviado "JS") é uma linguagem de programação dinâmica completa que, quando é aplicada a um documento HTML, produz interatividade dinânimca no website.

O JavaScript pode também ser utilizado fora do navegador, com o Node.js que é basicamente uma ferramenta que executa o JavaScript fora do navegador. 

Há várias funcionalidades disponibilizadas para o Node.js, fazendo com que possamos fazer coisas com JavaScript que não conseguimos fazer quando o nosso ambiente é o navegador.

JavaScript é relativamente compacta e muito flexível. Os programadores já escreveram uma grande variedade de ferramentas sobre o núcleo desta linguagem, o que abriu portas a uma vasta quantidade de funcionalidade extra com esforço mínimo. 

## Ambiente e instalação

### Navegador
Os navegadores modernos já possuem motor para rodar JavaScript nativamente.

### NodeJS
Para rodar JavaScript fora do navegador, temos que fazer a instalação do Node.js.
https://nodejs.org/dist/v12.16.1/node-v12.16.1-x86.msi


Nesta etapa, vamos utilizar apenas o navegador para rodar nosso código.

# Nosso primeiro código em JavaScript

### Um exemplo "olá mundo".

Para começar, vamos mostrar como adicionar JavaScript básico à sua página, criando um exemplo "hello world" / "olá mundo!" (o padrão de exemplos básicos de programação).

Para começar, vamos baixar a estrutura básica de uma página em HTML para executarmos no navegador.
- [Código fonte](src)


## Bases da linguagem
Vamos explicar algumas funcionalidades fundamentais da linguagem JavaScript, para permitir uma melhor compreensão de como a mesma funciona. Note que estas funcionalidades são comuns a todas as linguagens de programação, por isso, se dominar estes fundamentos, estará no bom caminho para programar praticamente qualquer coisa!


### Variáveis
Variáveis são "recipientes" em que pode guardar valores. Comece por declarar a variável com a palavra-chave var, seguida de qualquer nome que lhe queira dar:

```
var minhaVariavel;
```

> Nota: O ponto e vírgula indica onde termina a instrução; 

> Nota: O nome da varíavel pode ser quase tudo, mas há restrições. Se não tem a certeza, pode verificar o nome da sua varíavel para assegurar que é válido.

> Nota: JavaScript é case-sensitive (sensível a maiúsculas) — minhaVariavel é uma variável diferente de minhavariavel.

Depois de declarar a variável, pode atribuir-lhe um valor:
```
minhaVariavel = 'Bob';
```
Pode efetuar ambas as operações com uma só instrução:
```
var myVariable = 'Bob';
```
O valor é obtido simplesmente escrevendo o nome da variável:
```
myVariable;
```
Depois de lhe dar um valor, pode optar por mudá-lo mais tarde:

```
var minhaVariavel = 'Bob';
minhaVariavel = 'Steve';
```
