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

function CarregaBotaoModal(idItem){
    $("#botaoModal").append("<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" onclick=\"LimpaBotaoModal()\">NÃO</button><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-success\" onclick=\"Remover('"+idItem+"');\">SIM</button>");
};

function LimpaBotaoModal()
{
    $("#botaoModal").html("");
    $('#myModal').modal('hide');
}