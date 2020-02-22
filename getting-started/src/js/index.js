var lista = [
    {
       id: 1,
       nome: 'HENRY',
       idade: 30,
       cargo: 'programador'
    },
    {
        id: 2,
        nome: 'NATA',
        idade: 29,        
       cargo: 'consultor'
    },
    {
        id: 3,
        nome: 'GABRIEL',
        idade: 22,        
       cargo: 'programador'
    }
];

function criarItem (texto) {

    let li = document.createElement("li");
    document.getElementById('lista').appendChild(li);
    li.textContent = texto;

}


// var nome = 'henry';

// if (nome == '')

// alterarTexto('paragrafo', 'HELLO WORLD');
// alterarTexto('paragrafo2', 'OLA MUNDO');
