var servicePessoa = {
    inserirPessoas: _inserirPessoas,
    alterarPessoas: _alterarPessoas,
    removerPessoas: _removerPessoas,
    retornaPorID: _retornaPorId,
    CarregarLista: _carregarLista,
    ToastSucesso: _toastSucesso,
    ToastErro: _toastErro,
    RetornaEndereco: _retornaEndereco
};


var root = 'http://localhost:65286/api/';

//Carregar Lista de pessoas
function _carregarLista()
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
                var data1 = element.Data_Nascimento.split('-');      
                var dataNascimento = (data1[2].replace("T00:00:00", "")+"/"+data1[1]+"/"+data1[0]);       
                
                $("#tabelaLista").append("<tr> "+
                "<td>"+element.Id+"</td> "+
                "<td>"+element.Nome+"</td> "+
                "<td>"+element.Email+"</td> "+
                "<td>"+element.Telefone+"</td> "+
                "<td>"+element.Id_Sexo+"</td> "+
                "<td>"+element.Id_Escolaridade+"</td> "+
                "<td>"+element.Rg+"</td> "+
                "<td>"+element.Cpf+"</td> "+
                "<td>"+dataNascimento+"</td> "+
                "<td>"+element.Cep+"</td> "+
                "<td>"+element.Endereco+"</td> "+
                "<td>"+element.Complemento_Endereco+"</td> "+
                "<td><button type=\"submit\" onclick=\"CarregaBotaoModal('"+element.Id+"');\" class=\"btn btn-danger btn-sm\" style=\"margin-right:5px;\" data-toggle=\"modal\" data-target=\"#myModal\">Remover</button><button onclick=\"Editar('"+element.Id+"');\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button></td>"+
                "</tr>");
            }); 
        } 
        
        $("#loader").hide();
            return data;        
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
            _toastSucesso(foi);
         },
         error: function(erro){
            _toastErro(erro);  
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
        success: function(foi){
            _toastSucesso(foi);
         },
         error: function(erro){
            _toastErro(erro);  
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
           _toastSucesso(foi);
        },
        error: function(erro){
           _toastErro(erro);  
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
            var queryString = "id="+data.Id+"&nome="+data.Nome+"&email="+data.Email+"&telefone="+data.Telefone+"&sexo="+data.Id_Sexo+"&escolaridade="+data.Id_Escolaridade+"&cep="+data.Cep+"&endereco="+data.Endereco+"&cpf="+data.Cpf+"&nascimento="+data.Data_Nascimento+"&rg="+data.Rg+"&complemento="+data.Complemento_Endereco+"";   
            $(location).attr('href', 'Cadastro.html?'+queryString);
        });
}

function _toastSucesso(sucesso)
{
    toastr.success(sucesso);
    // da uma segurada pra aparecer o toast
    setTimeout(function(){
        $(location).attr('href', 'Lista.html'); 
    }, 2400);
    ClearCadastro();
}

function _toastErro(erro)
{
    toastr.error(erro.responseText); 
}

function _retornaEndereco(endCep)
{
    //console.log(endCep);
    var url = "https://viacep.com.br/ws/"+endCep+"/json/";
    $.ajax({
    url:url,
        method: 'GET',
        dataType: 'json',
        }).then(function(data){
            //console.log(JSON.stringify(data));
            $("#txtEndereco").val(data.logradouro);
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
