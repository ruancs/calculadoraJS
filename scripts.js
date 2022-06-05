'use strict'

const display = document.getElementById('display-calc');

const numeros = document.querySelectorAll('[id*=key]');

const atualizarDisplay = (texto) =>{
    display.textContent += texto;
}


const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click', inserirNumero));
