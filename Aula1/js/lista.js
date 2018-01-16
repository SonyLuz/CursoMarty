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
            "<td><button onclick=\"Remover('"+element.id+"');\" type=\"submit\" class=\"btn btn-danger btn-sm\">Remover</button></td>"+
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