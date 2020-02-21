# O que é JavaScript, realmente?

JavaScript (abreviado "JS") é uma linguagem de programação dinâmica completa que, quando é aplicada a um documento HTML, produz interatividade dinânimca no website.

O JavaScript pode também ser utilizado fora do navegador, com o Node.js que é basicamente uma ferramenta que executa o JavaScript fora do navegador. Quando instalado, chamamos o Node.js pelo terminal. Como não estamos executando o JavaScript em um navegador, os cuidados com segurança são diferentes.

Há várias funcionalidades disponibilizadas para o Node.js, fazendo com que possamos fazer coisas com JavaScript que não conseguimos fazer quando o nosso ambiente é o navegador.

Um exemplo é o acesso a arquivos. Um código JavaScript no navegador não consegue acessar os arquivos do usuário, pois seria uma falta de segurança você entrar em um site e ele vasculhar seu computador. Como o Node.js está instalado em sua máquina, o JavaScript tem liberdade de acessar os arquivos contidos no HD.

O Node.js possibilitou a criação de várias outras ferramentas para podermos usar JavaScript fora do navegador, e hoje em dia é um conhecimento obrigatório para quem quer trabalhar com JavaScript.

JavaScript é incrivelmente versátil. Pode começar em ponto pequeno, com carrosséis, galerias de imagens, layouts flutuantes, e mensagens quando se prime um botão. Depois de ganhar experiência, será capaz de criar jogos, gráficos 2D e 3D animados, aplicações completas conduzidas por bases-de-dados e muito mais!

JavaScript é relativamente compacta e muito flexível. Os programadores já escreveram uma grande variedade de ferramentas sobre o núcleo desta linguagem, o que abriu portas a uma vasta quantidade de funcionalidade extra com esforço mínimo. 

De seguida vamos introduzi-lo a alguns aspetos do núcleo da linguagem (JS puro, sem ferramentas), e também vai jogar com algumas funcionalidades da API do navegador. Divirta-se!

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

Importante: Neste artigo, tente introduzir os exemplos de código na consola JavaScript para ver o que acontece. Para mais detalhes sobre a consola JavaScript, veja o artigo Descobrir as ferramentas de desenvolvimentos do navegador.

### Variáveis
Variáveis são "recipientes" em que pode guardar valores. Comece por declarar a variável com a palavra-chave var, seguida de qualquer nome que lhe queira dar:

```
var minhaVariavel;
```

> Nota: O ponto e vírgula indica onde termina a instrução; apenas é estritamente necessário quando pretente separar instruções numa só linha. Contudo, algumas pessoas acham que é boa prática colocar este sinal no fim de cada instrução. 

> Nota: O nome da varíavel pode ser quase tudo, mas há restrições (veja este artigo sobre regras para dar nome às variáveis (inglês)). Se não tem a certeza, pode verificar o nome da sua varíavel para assegurar que é válido.

> Nota: JavaScript é sensível a maiúsculas — minhaVariavel é uma variável diferente de minhavariavel. Se tiver encontrar problemas depois de escrever p código, verifique as maiúsculas e minúsculas!

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
