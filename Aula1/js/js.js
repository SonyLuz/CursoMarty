// $(document).ready(function(){
//   console.log("teste");
// })

var data = [
    {
        "id": 4,
        "nome": "Marty",
        "email": "email@teste.com",
        "telefone": "41 999999999"
    },
    {
        "id": 5,
        "nome": "Joao",
        "email": "joao@teste.com",
        "telefone": "41 888888888"
    },
    {
        "id": 6,
        "nome": "Maria",
        "email": "maria@teste.com",
        "telefone": "41 988889999"
    }
];

var imprimir = function()
{
    var nome = $("#txtNome");
    var email = $("#txtEmail");
    var telefone = $("#txtTelefone");
}

$(function(){
    $("#btn1").click(function(){
        $("#divNome").append( $("#txtNome").val() +" - "+ $("#txtEmail").val()+" - "+ $("#txtTelefone").val() );
    });
})

$(function(){
    $("#btn2").click(function(){
        alert( $("#txtNome").val() +" - "+ $("#txtEmail").val()+" - "+ $("#txtTelefone").val() );
    });
})

$(function(){
    $("#carregarLista").click(function(){
        $.each(data, function(i, item) {
        $("#tabelaLista").append("<tr> "+
        "<td>"+data[i].id+"</td> "+
        "<td>"+data[i].nome+"</td> "+
        "<td>"+data[i].email+"</td> "+
        "<td>"+data[i].telefone+"</td> "+
        "<td><button id=\"btnRemover\" type=\"submit\" class=\"btn btn-danger btn-sm\">Remover</button></td> "+
      "</tr>");
        })        
    });
})

