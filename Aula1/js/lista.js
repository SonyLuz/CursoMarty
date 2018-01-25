var root = 'http://localhost:65286/api/';

$(document).ready(function(){
  CarregarLista();
})

//Carrega tabela
function CarregarLista()
{
    var itemReturn;
    $.ajax({
        url: root + 'Pessoa',
        method: 'GET',
        data: {},
        dataType: 'json'
        }).then(function(data) {
        console.log(JSON.stringify(data));
        itemReturn = data;
        if(itemReturn != null)
        {
            $("#tabelaLista").html("");
            itemReturn.forEach(element => {
                $("#tabelaLista").append("<tr> "+
                "<td>"+element.Id+"</td> "+
                "<td>"+element.Nome+"</td> "+
                "<td>"+element.Email+"</td> "+
                "<td>"+element.Telefone+"</td> "+
                "<td><button onclick=\"Remover('"+element.Id+"');\" type=\"submit\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\">Remover</button><button onclick=\"Editar('"+element.id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
                "</tr>");
            }); 
        } 
        $("#loader").hide();
    });
}

//Remove TR
function Remover(idItem)
{    
    //servicePessoa.removerPessoas(idItem);
    $.ajax({
        url: root + 'Pessoa/'+idItem,
        method: 'Delete',
        dataType: 'json',
        success: function(result){
            alert(result); 
            CarregarLista();                            
        },
        error: function(erro){
            alert(erro);            
        }
      }); 
      
}

function Editar(idItem)
{
    var objPessoa = servicePessoa.retornaPorID(idItem);
    var queryString = "id="+objPessoa.id+"&nome="+objPessoa.nome+"&email="+objPessoa.email+"&telefone="+objPessoa.telefone+"";   
    $(location).attr('href', 'Cadastro.html?'+queryString);
}

//Cadastrar Json
$(function(){
    $("#btn5").click(function(){
        $(location).attr('href', 'Cadastro.html');        
    });
});