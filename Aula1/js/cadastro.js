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
            
            if(result.sexo == "1")
                $("#mano").prop("checked", true);
            else
                $("#mina").prop("checked", true);
                
            $("#combEscolaridade").val(result.escolaridade);
        
            var cpf = result.cpf;
            if(cpf != null && cpf != "")
            {
                if(cpf.length < 11)
                {
                     cpf = "0" + cpf;
                }
            }
            
            $("#txtCpf").val(cpf);

            $("#txtCep").val(result.cep);
            $("#txtEndereco").val(result.endereco);
            $("#txtRg").val(result.rg);
            if(result.nascimento != null && result.nascimento != "")
            {
                var data1 = result.nascimento.split('-');      
                $("#txtDataNascimento").val(data1[2].replace("T00:00:00", "")+data1[1]+data1[0]);       
            }
            $("#txtComplementoEndereco").val(result.complemento);
        }        
})

//Cadastrar Json
function Cadastrar(){
        //console.log("sexo "+ $('input[name=rdSexo]:checked').val());
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val() && $('input[name=rdSexo]:checked').val() != "" &&  $("#combEscolaridade").val() != ""
            && $("#txtComplementoEndereco").val() != "" && $("#txtCpf").val() != "" && $("#txtDataNascimento").val() != "" 
            && $("#txtRG").val() != "" && $("#txtCep").val() != ""  && $("#txtEndereco").val() != "")
        {
            var data1 = $("#txtDataNascimento").val().split('/');
            var cep = $("#txtCep").val().replace('-','');
            var cpf = $("#txtCpf").val().replace('-','').replace('.','').replace('.','');
            var telefone = $("#txtTelefone").val().replace('(','').replace(')','').replace('-','');
            var newPessoa = {
                Nome: $("#txtNome").val(),
                Email: $("#txtEmail").val(), 
                Telefone: telefone,
                Id_Sexo: $('input[name=rdSexo]:checked').val(),
                Id_Escolaridade: $("#combEscolaridade").val(),
                Cep: parseFloat(cep, 10),
                Endereco: $("#txtEndereco").val(),
                Rg: parseInt($("#txtRg").val()),
                Data_Nascimento: new Date(data1[2] +"-"+ data1[1] +"-"+ data1[0]),
                Cpf:parseFloat(cpf,10),
                Complemento_Endereco: $("#txtComplementoEndereco").val()
        };
            //console.log(newPessoa);
            servicePessoa.inserirPessoas(newPessoa);      
        }
        else
        {
            toastr.error("Dados sem preencher brow!");//alert("Dados sem preencher brow!")
        }
}

//Atualizar
$(function(){
    $("#btn4").click(function(){
        //console.log("sexo "+ $('input[name=rdSexo]:checked').val());
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val() && $('input[name=rdSexo]:checked').val() != "" &&  $("#combEscolaridade").val() != ""
            && $("#txtComplementoEndereco").val() != "" && $("#txtCpf").val() != "" && $("#txtDataNascimento").val() != "" 
            && $("#txtRg").val() != "" && $("#txtCep").val() != "" && $("#txtEndereco").val() != "")
        {
            var data1 = $("#txtDataNascimento").val().split('/');
            var cep = $("#txtCep").val().replace('-','');
            var cpf = $("#txtCpf").val().replace('-','').replace('.','').replace('.','');
            var telefone = $("#txtTelefone").val().replace('(','').replace(')','').replace('-','');
            var newPessoa = {
                Id: result.id, 
                Nome: $("#txtNome").val(), 
                Email: $("#txtEmail").val(), 
                Telefone: telefone,
                Id_Sexo: $('input[name=rdSexo]:checked').val(),
                Id_Escolaridade: $("#combEscolaridade").val(),
                Cep: parseFloat(cep, 10).toFixed(0),
                Endereco: $("#txtEndereco").val(),
                Rg: parseInt($("#txtRg").val()),
                Data_Nascimento: new Date(data1[2] +"-"+ data1[1] +"-"+ data1[0]),
                Cpf:parseFloat(cpf,10).toFixed(0),
                Complemento_Endereco: $("#txtComplementoEndereco").val()
            };

            servicePessoa.alterarPessoas(newPessoa);                  
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

//perde o foco
function BuscaCep() {
    //Nova variável "cep" somente com dígitos.
    var cep = $("#txtCep").val().replace('-','');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
        servicePessoa.RetornaEndereco(cep);
    }
}