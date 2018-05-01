$(document).ready(function(){
  CarregarLista();
})

//Carrega tabela
function CarregarLista()
{
    var itemReturn = servicePessoa.CarregarLista();;
    if(itemReturn != null)
    {
        $("#tabelaLista").html("");
        itemReturn.forEach(element => {
            $("#tabelaLista").append("<tr> "+
            "<td>"+element.Id+"</td> "+
            "<td>"+element.Nome+"</td> "+
            "<td>"+element.Email+"</td> "+
            "<td>"+element.Telefone+"</td> "+
            "<td>"+element.Id_Sexo+"</td> "+
            "<td>"+element.Id_Escolaridade+"</td> "+
            "<td><button type=\"submit\" onclick=\"CarregaBotaoModal('"+element.Id+"');\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\" data-toggle=\"modal\" data-target=\"#myModal\">Remover</button><button onclick=\"Editar('"+element.Id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
            "</tr>");
        }); 
    } 
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