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
            $("#txtCep").val(result.cep);
            $("#txtRG").val(result.rg);
            $("#txtDataNascimento").val(result.dataNascimento);
            $("#txtCpf").val(result.cpf);
            $("#txtComplementoEndereco").val(result.complementoEndereco);
            
            if(result.sexo == "1")
                $("#mano").prop("checked", true);
            else
                $("#mina").prop("checked", true);
                
            $("#combEscolaridade").val(result.escolaridade);
        }        
})

//Cadastrar Json
$(function(){
    $("#btn3").click(function(){
        //console.log("sexo "+ $('input[name=rdSexo]:checked').val());
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val() && $('input[name=rdSexo]:checked').val() != "" &&  $("#combEscolaridade").val() != ""
            && $("#txtComplementoendereco").val() != "" && $("#txtCpf").val() != "" && $("#txtDataNascimento").val() != "" 
            && $("#txtRG").val() != "" && $("#txtCep").val() != ""  && $("#txtEndereco").val() != "")
        {
            var data1 = $("#txtDataNascimento").val().split('/');
            var newPessoa = {
                Nome: $("#txtNome").val(), 
                Email: $("#txtEmail").val(), 
                Telefone: $("#txtTelefone").val(),
                Id_Sexo: $('input[name=rdSexo]:checked').val(),
                Id_Escolaridade: $("#combEscolaridade").val(),
                Cep: $("#txtCep").val(),
                Endereco: $("#txtEndereco").val(),
                Rg: $("#txtRg").val(),
                Data_Nascimento: new Date(data1[2] +"-"+ data1[1] +"-"+ data1[0]),
                Cpf: $("#txtCpf").val(),
                Complemento_Endereco: $("#txtComplementoEndereco").val()
        };
            console.log(newPessoa);
            servicePessoa.inserirPessoas(newPessoa);
            ClearCadastro();
        }
        else{
            toastr.error("Dados sem preencher brow!");//alert("Dados sem preencher brow!")
        }
    });
});

//Atualizar
$(function(){
    $("#btn4").click(function(){
        //console.log("sexo "+ $('input[name=rdSexo]:checked').val());
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val() && $('input[name=rdSexo]:checked').val() != "" &&  $("#combEscolaridade").val() != ""
            && $("#txtComplementoendereco").val() != "" && $("#txtCpf").val() != "" && $("#txtDataNascimento").val() != "" 
            && $("#txtRG").val() != "" && $("#txtCep").val() != "" && $("#txtEndereco").val() != "")
        {
            var newPessoa = {
                Id: result.id, 
                Nome: $("#txtNome").val(), 
                Email: $("#txtEmail").val(), 
                Telefone: $("#txtTelefone").val(),
                Id_Sexo: $('input[name=rdSexo]:checked').val(),
                Id_Escolaridade: $("#combEscolaridade").val(),
                Cep: $("#txtCep").val(),
                Endereco: $("#txtEndereco").val(),
                Rg: $("#txtRg").val(),
                Data_Nascimento: $("#txtDataNascimento").val(),
                Cpf: $("#txtCpf").val(),
                Complemento_Endereco: $("#txtComplementoEndereco").val()
            };

            servicePessoa.alterarPessoas(newPessoa);   
            ClearCadastro();                   
        }
        else{
            toastr.error("Dados sem preencher brow!");//alert("Dados sem preencher brow!");
        }
    });
});

//clear cadastr
function ClearCadastro()
{
    $("#txtNome").val("");
    $("#txtEmail").val("");
    $("#txtTelefone").val("");
    $('input[name=rdSexo]:checked').val("");
    $("#combEscolaridade").val("");
    $("#txtCep").val("");
    $("#txtEndereco").val("");
    $("#txtRg").val("");
    $("#txtDataNascimento").val("");
    $("#txtCpf").val("");
    $("#txtComplementoEndereco").val("");
}