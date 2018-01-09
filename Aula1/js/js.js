$(document).ready(function(){
  console.log("teste");
})



var imprimir = function()
{
    var nome = $("#txtNome");
    var email = $("#txtEmail");
    var telefone = $("#txtTelefone");
}

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#divNome").append(" <b>Appended text</b>.");
    });
    $("#btn2").click(function(){
        $("#divNome").append("<li>Appended item</li>");
    });
});
