for (let i = 0; i < 10; i++) {
    console.log(`Número da linha: ${i}`);
    
}

// WHILE
i = 0;

while (i < 10) {
    console.log(`Número da linha usando while: ${i}`);
    i++;
};

//DO WHILE
i = 0;

do {
    console.log(`Número da linha usando dowhile: ${i}`);
    i++;
} while (i < 10);

//IF
let a = 25;
let b = 13;

if (a > b) {
    console.log(`O numero ${a} é maior que ${b} `)
} else {
    console.log(`O numero ${b} é maior que ${a} `)
};

for (i=0; i <= 6; i++) { 
    switch (i) {
        case 0:
             console.log(" Hoje é Domingo");
            break;
    
        case 1:
             console.log(" Hoje é Segunda-Feira");
            break;
    
        case 2:
             console.log(" Hoje é Terça-Feira");
            break;
    
        case 3:
             console.log(" Hoje é Quarta-Feira");
            break;
    
        case 4:
             console.log(" Hoje é Quinta-Feira");
            break;
    
        case 5:
             console.log(" Hoje é Sexta-Feira");
            break;
    
        case 6:
             console.log(" Hoje é Sábado");
            break;
        default:
             console.log(" Número inválido");
            break;
    };
    }

let result = (a > 0 ? "Gosta de jogar video-game" : "Não gosta de jogar video game");
console.log(result);