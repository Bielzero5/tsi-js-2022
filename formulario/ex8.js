const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostraEvento);

function mostraEvento(evento) {
    titulo.textContent = 
    `Eixo X: ${evento.offsetX}
    Eixo Y: ${evento.offsetY}`;
    
    document.body.style.backgroundColor =
        `RGB(${evento.offsetX},
        ${evento.offsetY}, 40)` 
}

