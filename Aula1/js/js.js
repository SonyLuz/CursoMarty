// $(document).ready(function(){
//   console.log("teste");
// })
 

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