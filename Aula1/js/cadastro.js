//Cadastrar Json
$(function(){
    $("#btn3").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            var newPessoa = {id: data.gerarGuid(), nome: $("#txtNome").val(), email: $("#txtEmail").val(), telefone: $("#txtTelefone").val()};
            data.inserirPessoas(newPessoa);
            ClearCadastro();
            alert("Cadastrado com sucesso.");
            
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