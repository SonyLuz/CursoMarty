var servicePessoa = {
    inserirPessoas: _inserirPessoas,
    alterarPessoas: _alterarPessoas,
    removerPessoas: _removerPessoas,
    retornaPorID: _retornaPorId,
    CarregarLista: _carregarLista
};

var root = 'http://localhost:65286/api/';

//Carregar Lista de pessoas
function 
_carregarLista()
{
    var itemReturn;
    $.ajax({
        url: root + 'Pessoa',
        method: 'GET',
        data: {},
        dataType: 'json'
        }).then(function(data) {
<<<<<<< HEAD
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
                "<td>"+element.Id_Sexo+"</td> "+
                "<td>"+element.Id_Escolaridade+"</td> "+
                "<td>"+element.Rg+"</td> "+
                "<td>"+element.Cpf+"</td> "+
                "<td>"+element.Data_Nascimento+"</td> "+
                "<td>"+element.Cep+"</td> "+
                "<td>"+element.Endereco+"</td> "+
                "<td>"+element.Complemento_Endereco+"</td> "+
                "<td><button type=\"submit\" onclick=\"CarregaBotaoModal('"+element.Id+"');\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\" data-toggle=\"modal\" data-target=\"#myModal\">Remover</button><button onclick=\"Editar('"+element.Id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
                "</tr>");
            }); 
        } 
        
        $("#loader").hide();
=======
            return data;        
            $("#loader").hide();
>>>>>>> be9cfd4567f4b06959a8d14bda16516fb3ae5c13
    });
}

//inserir 
function _inserirPessoas(pessoa)
{
    $.ajax({
        type: 'POST',
        url: root + 'Pessoa',
        data: JSON.stringify(pessoa),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(foi){
            return foi;
        },
        error: function(erro){
           return erro;      
        }
    });   
}

//remover
function _removerPessoas(idPessoa)
{
    $.ajax({
        url: root + 'Pessoa/'+idPessoa,
        method: 'Delete',
        dataType: 'json',
        success: function(result){
           return result;                            
        },
        error: function(erro){
            return erro;      
        }
      }); 
}

//alterar
function _alterarPessoas(pessoa)
{
    $.ajax({
        type: 'PUT',
        url: root + 'Pessoa/'+pessoa.Id,
        data: JSON.stringify(pessoa),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(foi){
           return foi;
        },
        error: function(erro){
            return erro;       
        }
    });
}

//busca por id
function _retornaPorId(id)
{
    $.ajax({
        url: root + 'Pessoa/'+id,
        method: 'GET',
        dataType: 'json',
        }).then(function(data){
            console.log(JSON.stringify(data));
            var queryString = "id="+data.Id+"&nome="+data.Nome+"&email="+data.Email+"&telefone="+data.Telefone+"&sexo="+data.Id_Sexo+"&escolaridade="+data.Id_Escolaridade+"&cep="+data.Cep+"&endereco="+data.Endereco+"&cpf="+data.Cpf+"&nascimento="+data.Data_Nascimento+"&rg="+data.Rg+"&complemento="+Complemento_Endereco+"";   
            $(location).attr('href', 'Cadastro.html?'+queryString);
        });
}

// //Requisição ajax exemplo
// $(function(){
//     $("#efetuarRequisicao").click(function(){
//         $("#loader").show().delay(10000);        
//         var root = 'http://localhost:65286/api/';
//         $.ajax({
//             url: root + 'values',
//             method: 'GET',
//             data: {},
//             contentType: "application/json,charset=utf-8",
//             dataType: 'json'
//           }).then(function(data) {
//             console.log(JSON.stringify(data));
//             $("#dadosRequisicao").append(JSON.stringify(data));
//             $("#loader").hide();
//           });
//     });  
       
// });
