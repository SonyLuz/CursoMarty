// $(document).ready(function(){
//   console.log("teste");
// })

// objeto Json
// var data = [
//     {
//         "id": 4,
//         "nome": "Marty",
//         "email": "email@teste.com",
//         "telefone": "41 999999999"
//     },
//     {
//         "id": 5,
//         "nome": "Joao",
//         "email": "joao@teste.com",
//         "telefone": "41 888888888"
//     },
//     {
//         "id": 6,
//         "nome": "Maria",
//         "email": "maria@teste.com",
//         "telefone": "41 988889999"
//     }
// ];

var data = [];

// Imprime Console
var imprimir = function()
{
    var nome = $("#txtNome");
    var email = $("#txtEmail");
    var telefone = $("#txtTelefone");
    console.log(nome.val() + email.val() + telefone.val())
}

//Imprime na tela
$(function(){
    $("#btn1").click(function(){
        $("#divNome").append( $("#txtNome").val() +" - "+ $("#txtEmail").val()+" - "+ $("#txtTelefone").val() );
    });
})

//Imprime alert
$(function(){
    $("#btn2").click(function(){
        alert( $("#txtNome").val() +" - "+ $("#txtEmail").val()+" - "+ $("#txtTelefone").val() );
    });
})