var result = {};

$(document).ready(function(){
        keyValuePairs = location.search.slice(1).split("&");
        if(result != null || result != undefined || result != "")
        {
            keyValuePairs.forEach(function(keyValuePair) {
                keyValuePair = keyValuePair.split('=');
                result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
            });
            $("#txtNome").val(result.nome);
            $("#txtEmail").val(result.email);
            $("#txtTelefone").val(result.telefone);
        }        
        //console.log(result);
})

//Cadastrar Json
$(function(){
    $("#btn3").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            var newPessoa = {id: servicePessoa.gerarGuid(), nome: $("#txtNome").val(), email: $("#txtEmail").val(), telefone: $("#txtTelefone").val()};
            servicePessoa.inserirPessoas(newPessoa);
            ClearCadastro();
            $(location).attr('href', 'file:///D:/CursoMarty/CursoMarty/Aula1/Lista.html');            
        }
    });
});

//Atualizar
$(function(){
    $("#btn4").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            var newPessoa = {id: result.id, nome: $("#txtNome").val(), email: $("#txtEmail").val(), telefone: $("#txtTelefone").val()};
            servicePessoa.alterarPessoas(newPessoa);
            ClearCadastro();
            alert("Atualizado com sucesso.");
            
        }
    });
});

//clear cadastr
function ClearCadastro()
{
    $("#txtNome").val("");
    $("#txtEmail").val("");
    $("#txtTelefone").val("");
}