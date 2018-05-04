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
    var result = servicePessoa.removerPessoas(idItem);    
    if(result)
    {
        toastr.success(result);
        LimpaBotaoModal();
        CarregarLista();
    } 
    else
    {
        toastr.error(erro);  
    }
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