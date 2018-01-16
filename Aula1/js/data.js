var servicePessoa = {
    pessoas: new Array(),
    gerarGuid: _gerarGuid,
    inserirPessoas: _inserirPessoas,
    getItem: _getItem,
    setItem: _setItem,
    alterarPessoas: _alterarPessoas,
    removerPessoas: _removerPessoas,
    retornaPorID: _retornaPorId
};

Inicializar();

function Inicializar()
{
    var data = _getItem("data");
    //console.log(data);
    if(data != undefined)
        servicePessoa.pessoas = data;
    else
        servicePessoa.pessoas = new Array();
}

//set items localstorage
function _setItem(name, objeto)
{
    localStorage.setItem(name, JSON.stringify(objeto));   
}

//Get items localstorage
function _getItem(name)
{
    return JSON.parse(localStorage.getItem(name));
}

//inserir 
function _inserirPessoas(pessoa)
{
    console.log(servicePessoa.pessoas);
    var objeto = _getItem("data");
    for (i=0;i<objeto.length;i++)
    {
        if (objeto[i].email == pessoa.email) 
        {
            alert("Email já cadastrado!");
            return;            
        }
    }
    servicePessoa.pessoas.push(pessoa);
    _setItem("data", servicePessoa.pessoas); 
    alert("Cadastrado com sucesso.");    
}

//remover
function _removerPessoas(idPessoa)
{
    var objeto = _getItem("data");
    for (i=0;i<objeto.length;i++)
    {
        if (objeto[i].id == idPessoa) 
            objeto.splice(i,1);
    }
    _setItem("data", objeto); 
}

//alterar
function _alterarPessoas(pessoa)
{
    var objeto = _getItem("data");
    for (i=0;i<objeto.length;i++)
    {
        if (objeto[i].id == pessoa.id) 
        {
            objeto[i].nome = pessoa.nome;
            objeto[i].email = pessoa.email;
            objeto[i].telefone = pessoa.telefone;
        }
    }
    _setItem("data", objeto); 
    console.log(pessoa);
}

//busca por id
function _retornaPorId(id)
{
    var objeto = _getItem("data");
    for (i=0;i<objeto.length;i++)
    {
        if (objeto[i].id == id) 
            return objeto[i];
    }
}
//gerar guid
function _gerarGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }