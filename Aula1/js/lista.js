$(document).ready(function(){
  CarregarLista();
})

//Carrega tabela
function CarregarLista()
{
    var itemLocalStorage = servicePessoa.getItem("data");
    if(itemLocalStorage != null)
    {
        $("#tabelaLista").html("");
        itemLocalStorage.forEach(element => {
            $("#tabelaLista").append("<tr> "+
            "<td>"+element.id+"</td> "+
            "<td>"+element.nome+"</td> "+
            "<td>"+element.email+"</td> "+
            "<td>"+element.telefone+"</td> "+
            "<td><button onclick=\"Remover('"+element.id+"');\" type=\"submit\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\">Remover</button><button onclick=\"Editar('"+element.id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
            "</tr>");
        }); 
    } 
}

//Remove TR
function Remover(idItem)
{    
    servicePessoa.removerPessoas(idItem);
    CarregarLista();
}

function Editar(idItem)
{
    var objPessoa = servicePessoa.retornaPorID(idItem);
    var queryString = "id="+objPessoa.id+"&nome="+objPessoa.nome+"&email="+objPessoa.email+"&telefone="+objPessoa.telefone+"";   
    $(location).attr('href', 'file:///D:/CursoMarty/CursoMarty/Aula1/Cadastro.html?'+queryString);
}

//Cadastrar Json
$(function(){
    $("#btn5").click(function(){
        $(location).attr('href', 'file:///D:/CursoMarty/CursoMarty/Aula1/Cadastro.html');        
    });
});