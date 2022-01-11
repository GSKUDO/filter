var clientes = [];
var pesquisa = [];

//cadastra os clientes
function incluircliente(){
    clientes.push({
        NomeCliente: document.getElementById("nome").value,
        DataVencimento: document.getElementById("datavencimento").value,
        ValorCompra: parseFloat(document.getElementById("valor").value),
    });
    
    //mostra os clientes em uma tabela
    var tabela = clientes.map(function(item, indice){
        return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`;
    });
    document.querySelector("#tblista tbody").innerHTML = tabela.join("");
}

//////////////////////////////////////////////////////////////
// pesquisa por mes 
function funcaopesquisarmes() {
     //mostra o titulo da tabela 
     document.getElementById("tituloboleto").innerHTML = "Resultado da pesquisa por mês:"

    let select = document.getElementById('meses');
    let mespesquisado = (select.options[select.selectedIndex].value) -1;
    
    //pesquisa
    const pesquisa = clientes.filter(function (value){
        let valuevencimento = new Date(value.DataVencimento);
        const month = valuevencimento.getMonth()
        console.log("resultado do month" + month);
        return (month == mespesquisado);
    })

    //manda para o html a pesquisa por mes 
    var tabela = pesquisa.map(function(item, indice){
        return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`;
    });

    document.querySelector("#tbpesquisa tbody").innerHTML = tabela.join("");

}

// pesquisa por range de data
function funcaopesquisardata() {
    //mostra o titulo da tabela 
    document.getElementById("tituloboleto").innerHTML = "Resultado da pesquisa por intervalo de data:"

    //receber valores do html 
    let inicio = document.getElementById("datainicio").value;
    let fim = document.getElementById("datafim").value;
  
    //pesquisa
    const pesquisa = clientes.filter(function (value){
        return ((inicio <= value.DataVencimento) && (value.DataVencimento <= fim))
    })

    //manda para o html a pesquisa por range de data 
    var tabela = pesquisa.map(function(item, indice){
           return `<tr>
               <td>${indice + 1}</td>
               <td>${item.NomeCliente}</td>
               <td>${item.DataVencimento}</td>
               <td>${item.ValorCompra}</td>
               </tr>`;
    });

   document.querySelector("#tbpesquisa tbody").innerHTML = tabela.join("");

}

// pesquisa por range de valor
function funcaopesquisarvalor() {
    //mostra o titulo da tabela 
    document.getElementById("tituloboleto").innerHTML = "Resultado da pesquisa por intervalo de valor:"

    //receber valores do html 
    let minimo = parseFloat(document.getElementById("valorminimo").value);
    let maximo = parseFloat(document.getElementById("valormaximo").value);

    //pesquisa
    const pesquisa = clientes.filter(function (value){
        return ((minimo <= value.ValorCompra) && (value.ValorCompra <= maximo))
    })

    //manda para o html a pesquisa por range de valor
    var tabela = pesquisa.map(function(item, indice){
       return `<tr>
               <td>${indice + 1}</td>
               <td>${item.NomeCliente}</td>
               <td>${item.DataVencimento}</td>
               <td>${item.ValorCompra}</td>
               </tr>`;
    });

   document.querySelector("#tbpesquisa tbody").innerHTML = tabela.join("");

}