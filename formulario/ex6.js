const novoTitulo = document.createElement('h2');

novoTitulo.id = 'task-title';

novoTitulo.appendChild(document.createTextNode('Nova Lista'));

const tituloAtual = document.querySelector('#task-title')

let divMaeDoTitulo = document.querySelector('.card-action');

divMaeDoTitulo.replaceChild(novoTitulo, tituloAtual);


console.log(divMaeDoTitulo);
console.log(novoTitulo);
console.log(tituloAtual);