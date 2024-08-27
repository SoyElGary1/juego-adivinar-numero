let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeros = [];
let numeroMax = 10;


condicionesIniciales();

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')

        } else {
            if (numeroDeUsuario < numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es mayor')
            }
        }
        numeroIntentos++;
        limpiarCaja();
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indicar un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function reiniciarJuego() {

    limpiarCaja();

    condicionesIniciales();

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

    if (listaNumeros.length === numeroMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

