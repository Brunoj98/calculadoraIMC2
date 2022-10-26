



function calcularIMC() {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    let resposta = document.querySelector(".resposta").value;
    const nome = document.getElementById("nome").value;

    let imc = peso / (altura * altura)

    imc = parseInt(imc)


    if (imc <= 18.5) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está abaixo do peso`;
    } else if (imc >= 18.6 && imc <= 24.9) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está no peso ideal`;
    } else if (imc >= 25.0 && imc <= 29.9) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está levemente acima do peso`;
    } else if (imc >= 30 && imc <= 34.9) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está com obesidade grau 1`;
    } else if (imc >= 35 && imc <= 39.9) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está com obesidade grau 2`;
    } else if (imc >= 40 && imc <= 100) {
        resposta = document.querySelector(".resposta").innerHTML = `${nome} seu IMC é ${imc} e você está com obesidade grau 3 (mórbida)`;
    }
}

calcularIMC()

