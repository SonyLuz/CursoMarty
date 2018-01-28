var result = {};

$(document).ready(function(){
        keyValuePairs = location.search.slice(1).split("&");
        if(keyValuePairs != null || keyValuePairs != undefined || keyValuePairs != "")
        {
            keyValuePairs.forEach(function(keyValuePair) {
                keyValuePair = keyValuePair.split('=');
                result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
            });
            $("#txtNome").val(result.nome);
            $("#txtEmail").val(result.email);
            $("#txtTelefone").val(result.telefone);
        }        
})

//Cadastrar Json
$(function(){
    $("#btn3").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            var newPessoa = {Nome: $("#txtNome").val(), Email: $("#txtEmail").val(), Telefone: $("#txtTelefone").val()};
            servicePessoa.inserirPessoas(newPessoa);
            ClearCadastro();
        }
    });
});

//Atualizar
$(function(){
    $("#btn4").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            var newPessoa = {Id: result.id, Nome: $("#txtNome").val(), Email: $("#txtEmail").val(), Telefone: $("#txtTelefone").val()};
            servicePessoa.alterarPessoas(newPessoa);   
            ClearCadastro();                   
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