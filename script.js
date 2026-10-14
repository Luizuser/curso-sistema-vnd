// Valores de frete por região
const fretes = {
    "Sudeste": 18.90,
    "Sul": 24.90,
    "Centro-Oeste": 29.90,
    "Nordeste": 39.90,
    "Norte": 54.90
};

// Elementos da tela
const telaEntrada = document.getElementById("tela-entrada");
const telaLoja = document.getElementById("tela-loja");
const formulario = document.getElementById("form-entrada");

const campoNome = document.getElementById("nome");
const campoSenha = document.getElementById("senha");
const campoIdade = document.getElementById("idade");
const campoRegiao = document.getElementById("regiao");

const dicaFrete = document.getElementById("dica-frete");
const mensagemErro = document.getElementById("erro");

// Gerar uma senha aleatória
document.getElementById("btn-gerar").addEventListener("click", function () {
    const senha = Math.random().toString(36).slice(2, 10);
    campoSenha.value = senha;
});

// Mostrar o frete conforme a região selecionada
campoRegiao.addEventListener("change", function () {
    const regiao = campoRegiao.value;

    if (regiao === "") {
        dicaFrete.textContent = "Selecione uma região para ver o frete.";
        return;
    }

    dicaFrete.textContent =
        "Frete: R$ " + fretes[regiao].toFixed(2).replace(".", ",");
});

// Entrar na loja
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const senha = campoSenha.value.trim();
    const idade = Number(campoIdade.value);
    const regiao = campoRegiao.value;

    if (!nome || !senha || !regiao || idade <= 0) {
        mensagemErro.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    mensagemErro.textContent = "";

    // Esconder a entrada e mostrar a loja
    telaEntrada.hidden = true;
    telaLoja.hidden = false;

    document.getElementById("boas-vindas").textContent =
        "Bem-vindo(a), " + nome + "! Região: " + regiao + ".";
});