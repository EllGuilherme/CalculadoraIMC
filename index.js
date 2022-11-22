let altura = null;
let massa = null;
let calcula = null;
let ExibeImc = null;
let situacao = null;
let resultado = null;


let dadosUsuario = {
    altura: null,
    massa: null
}

document.addEventListener("DOMContentLoaded", setup);

function setup() {
   
    altura = document.getElementById("alturaUsuario");
    massa = document.getElementById("massaUsuario");
    calcula = document.getElementById("botaoCalcular");
    ExibeImc = document.getElementById("exibeIMC");
    situacao = document.getElementById("exibeSituacao");
    resultado = document.getElementById("exibeCalculos");
  
    altura.addEventListener("change", () => dadosUsuario.altura = Number(altura.value));
    
    massa.addEventListener("change", () => dadosUsuario.massa = Number(massa.value));
   
    calcula.addEventListener("click", () => {
        if (dadosUsuario.altura != 0 && dadosUsuario.massa != 0) {
        const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
        const situacaoUsuario = testaSituacao(valorIMC);

        ExibeImc.innerText = `${valorIMC} kg/m².`;
        situacao.innerText = `${situacaoUsuario}`;
        resultado.hidden = 0;
        }
    });
}

function testaSituacao(valorIMC) {

    let IMC = Number(valorIMC)

    switch (true) {
        case (IMC < 17):
            return "Muito abaixo do peso.";

        case (IMC < 18.5):
            return "Abaixo do peso."
        
        case (IMC < 25):
            return "Peso normal.";

        case (IMC < 30):
            return "Acima do peso.";

        case (IMC < 35):
            return "Obesidade I.";

        case (IMC < 40):
            return "OObesidade II (severa).";

        case (IMC >= 40):
            return "Obesidade III (mórbida).";

        default:
            return "Um erro ocorreu.";
    }
}
