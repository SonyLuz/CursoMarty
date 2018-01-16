var data = {
    pessoas: {},
    gerarGuid: _gerarGuid,
    inserirPessoas: _inserirPessoas,
    // alterarPessoas: _alterarPessoas,
    removerPessoas: _removerPessoas,
    // retornaPorID: _retornaPorId
};

Inicializar();

function Inicializar()
{
    var data = GetItem("data");
    if(data != null)
        this.data.pessoas = data;
    else
        this.data.pessoas = new Array();
}

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

function _inserirPessoas(pessoa)
{
    data.pessoas.push(pessoa);
    SetItem("data", pessoa); 
    
}

function _removerPessoas(idPessoa)
{
    var objeto = GetItem("data");
    for (i=0;i<objeto.pessoas.length;i++)
    {
        if (objeto.pessoas[i].id == idPessoa) 
            objeto.pessoas.splice(i,1);
    }
}

function _gerarGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }