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
                "<td><button type=\"submit\" onclick=\"CarregaBotaoModal('"+element.Id+"');\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\" data-toggle=\"modal\" data-target=\"#myModal\">Remover</button><button onclick=\"Editar('"+element.Id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
                "</tr>");
            }); 
        } 
        
        $("#loader").hide();
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
            toastr.success(foi);
            // da uma segurada pra aparecer o toast
            setTimeout(function(){
                $(location).attr('href', 'Lista.html'); 
            }, 2400);
        },
        error: function(erro){
           toastr.error(erro);       
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
            toastr.success(result);
            LimpaBotaoModal();
            CarregarLista();                            
        },
        error: function(erro){
            toastr.error(erro);        
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
            toastr.success(foi);
            // da uma segurada pra aparecer o toast            
            setTimeout(function(){
                $(location).attr('href', 'Lista.html');                                      
            }, 2400);
        },
        error: function(erro){
            toastr.error(erro);        
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
            var queryString = "id="+data.Id+"&nome="+data.Nome+"&email="+data.Email+"&telefone="+data.Telefone+"&sexo="+data.Id_Sexo+"&escolaridade="+data.Id_Escolaridade+"";   
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
