function escolherPrato(prato) {
    const botaoSelecionado = document.querySelector(".prato-principal").querySelector(".selecionado");
    
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado");
    }
    
    prato.classList.add("selecionado");
}

function escolherBebida(bebida) {
    const botaoSelecionado = document.querySelector(".bebida").querySelector(".selecionado");
    
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado");
    }
    
    bebida.classList.add("selecionado");
}

function escolherSobremesa(sobremesa) {
    const botaoSelecionado = document.querySelector(".sobremesa").querySelector(".selecionado");
    
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado");
    }
    
    sobremesa.classList.add("selecionado");
}