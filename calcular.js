let btnCalcular =  document.getElementById('calcular');

btnCalcular.addEventListener('click', function (e) {
    e.preventDefault();
    
    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');
    let preco = calculaPreco(serv.value, prazo.value);

    res.innerText = `O preço é ${preco}`;
    console.log(serv.value)
    console.log(prazo.value)

    console.log(e)

});

function calculaPreco(servico, prazo) {
    let tabela = [
        ['$$$','$$','$'],
        ['$$$$','$$$','$$'],
        ['Não faz','Não faz','$$$']
     ];

     return tabela[servico][prazo];
}



