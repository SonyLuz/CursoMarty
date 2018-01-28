$(document).ready(function(){
  CarregarLista();
})

//Carrega tabela
function CarregarLista()
{
    servicePessoa.CarregarLista(); 
}

//Remove
function Remover(idItem)
{    
    servicePessoa.removerPessoas(idItem);     
}

//Editar
function Editar(idItem)
{
    servicePessoa.retornaPorID(idItem);  
}

//Cadastrar Json
$(function(){
    $("#btn5").click(function(){
        $(location).attr('href', 'Cadastro.html');        
    });
});