let botaoPrato;
let nomePrato;
let precoPrato = 0;
let botaoBebida;
let nomeBebida;
let precoBebida = 0;
let botaoSobremesa;
let nomeSobremesa;
let precoSobremesa = 0;
let precoFinal = 0;

function escolherPrato(prato) {
    botaoPrato = document.querySelector(".prato-principal").querySelector(".selecionado");
    
    if (botaoPrato !== null) {
        botaoPrato.classList.remove("selecionado");
    }
    
    prato.classList.add("selecionado");

    nomePrato = document.querySelector(".prato-principal").querySelector(".selecionado h3").innerHTML;
    
    let precoTexto = document.querySelector(".prato-principal").querySelector(".selecionado h4").innerHTML;
    precoTexto = precoTexto.replace("R$ ", "");
    precoTexto = precoTexto.replace(",", ".");
    precoPrato = Number(precoTexto);

    botaoPrato = 1;

    fecharPedido();
}

function escolherBebida(bebida) {
    botaoBebida = document.querySelector(".bebida").querySelector(".selecionado");
    
    if (botaoBebida !== null) {
        botaoBebida.classList.remove("selecionado");
    }
    
    bebida.classList.add("selecionado");

    nomeBebida = document.querySelector(".bebida").querySelector(".selecionado h3").innerHTML;

    let precoTexto = document.querySelector(".bebida").querySelector(".selecionado h4").innerHTML;
    precoTexto = precoTexto.replace("R$ ", "");
    precoTexto = precoTexto.replace(",", ".");
    precoBebida = Number(precoTexto);

    botaoBebida = 1;

    fecharPedido();
}

function escolherSobremesa(sobremesa) {
    botaoSobremesa = document.querySelector(".sobremesa").querySelector(".selecionado");
    
    if (botaoSobremesa !== null) {
        botaoSobremesa.classList.remove("selecionado");
    }
    
    sobremesa.classList.add("selecionado");

    nomeSobremesa = document.querySelector(".sobremesa").querySelector(".selecionado h3").innerHTML;

    let precoTexto = document.querySelector(".sobremesa").querySelector(".selecionado h4").innerHTML;
    precoTexto = precoTexto.replace("R$ ", "");
    precoTexto = precoTexto.replace(",", ".");
    precoSobremesa = Number(precoTexto);

    botaoSobremesa = 1;

    fecharPedido();
}


function fecharPedido() {
    if (botaoPrato && botaoBebida && botaoSobremesa) {
        const bloqueio = document.querySelector(".bloqueado");
        bloqueio.classList.add("esconder");
        const habilitar = document.querySelector(".habilitado");
        habilitar.classList.add("aparecer");
    }
}

function janelaConfirmacao() {

    precoFinal = precoPrato + precoBebida + precoSobremesa;
    precoFinal = precoFinal.toFixed(2);
    precoPrato = precoPrato.toFixed(2);
    precoBebida = precoBebida.toFixed(2);
    precoSobremesa = precoSobremesa.toFixed(2);
    
    document.querySelector(".janela-confirmacao").querySelector(".info-prato h4").innerHTML = nomePrato;
    document.querySelector(".janela-confirmacao").querySelector(".info-prato h5").innerHTML = precoPrato;
    document.querySelector(".janela-confirmacao").querySelector(".info-bebida h4").innerHTML = nomeBebida;
    document.querySelector(".janela-confirmacao").querySelector(".info-bebida h5").innerHTML = precoBebida;
    document.querySelector(".janela-confirmacao").querySelector(".info-sobremesa h4").innerHTML = nomeSobremesa;
    document.querySelector(".janela-confirmacao").querySelector(".info-sobremesa h5").innerHTML = precoSobremesa;
    document.querySelector(".janela-confirmacao").querySelector(".total h4").innerHTML = precoFinal;

    let abrir = document.querySelector(".background");
    abrir.classList.remove("esconder");
}

function pedidoZap() {

    const nome = prompt("Qual seu nome?");
    const endereco = prompt("Qual seu endereço?");

    let uri = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${precoFinal}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    let encoded = encodeURIComponent(uri);

    document.querySelector(".janela-confirmacao a").href = `https://wa.me/5548996629438?text=${encoded}`;
}

function cancelarPedido() {
    
    document.querySelector(".prato-principal").querySelector(".selecionado").classList.remove("selecionado");
    document.querySelector(".bebida").querySelector(".selecionado").classList.remove("selecionado");
    document.querySelector(".sobremesa").querySelector(".selecionado").classList.remove("selecionado");
    document.querySelector(".habilitado").classList.remove("aparecer");
    document.querySelector(".bloqueado").classList.remove("esconder");

    botaoPrato = null;
    botaoBebida = null;
    botaoSobremesa = null;

    let abrir = document.querySelector(".background");
    abrir.classList.add("esconder");
}