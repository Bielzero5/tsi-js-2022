let tabela = [
                ['$$$','$$','$'],
                ['$$$$','$$$','$$'],
                ['Não faz','Não faz','$$$']
             ];

let servico = prompt("Entre com o serviço: \n0 - Troca de óleo \n1 - Balanceamento\n 2 - Cambagem ");
let prazo = prompt("Entre com o prazo: \n0 - Um dia \n1 - Dois dias\n 2 - Três dias ");

if( validaEntrada(servico) && validaEntrada(prazo) ){

    alert("O serviço ficara em: " + tabela[servico][prazo]);

}else{

    alert("ERRO: Verifique os valores inseridos e tente novamente!");
}

function validaEntrada(dadoUsuario){

    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}