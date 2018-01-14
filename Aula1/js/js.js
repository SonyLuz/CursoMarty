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

var data = [
    {
        "id": 0,
        "nome": "",
        "email": "",
        "telefone": ""
    }
];

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

//Imprime na tela
$(function(){
    $("#btn2").click(function(){
        alert( $("#txtNome").val() +" - "+ $("#txtEmail").val()+" - "+ $("#txtTelefone").val() );
    });
})

//Carrega tabela
$("#carregarLista").ready(function(){
    var itemLocalStorage = GetItem("pessoa");
    if(itemLocalStorage != null)
    {
        var name = "pessoa";
        itemLocalStorage.forEach(element => {
            $("#tabelaLista").append("<tr> "+
            "<td>"+element.id+"</td> "+
            "<td>"+element.nome+"</td> "+
            "<td>"+element.email+"</td> "+
            "<td>"+element.telefone+"</td> "+
            "<td><button onclick=\"Remover("+element.id+");\" type=\"submit\" class=\"btn btn-danger btn-sm\">Remover</button></td>"+
            "</tr>");
        }); 
    }     
});

//Remove TR
function Remover(res)
{    //console.log($(res).parent().parent());
    localStorage.splice(index, res);
    // localStorage.setItem('pessoa',JSON.stringify(questions));

}

//Cadastrar Json
$(function(){
    $("#btn3").click(function(){
        if($("#txtNome").val() != "" && $("#txtEmail").val() != "" &&  $("#txtTelefone").val())
        {
            data.push(
                {id: data.lastIndexOf.id ++, nome: $("#txtNome").val(), email: $("#txtEmail").val(), telefone: $("#txtTelefone").val()}
            );

            SetItem("pessoa", data);
            ClearCadastro();
            alert("Cadastrado com sucesso.");
            
        }
    });
})

//set items localstorage
function SetItem(name, objeto)
{
    localStorage.setItem(name, JSON.stringify(objeto));   
}

//Get items localstorage
function GetItem(name)
{
    return JSON.parse(localStorage.getItem(name));
}

//clear cadastro
function ClearCadastro()
{
    $("#txtNome").val("");
    $("#txtEmail").val("");
    $("#txtTelefone").val("");
}