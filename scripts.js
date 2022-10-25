'use strict'

const display = document.getElementById('display-calc');

const numeros = document.querySelectorAll('[id*=key]');

const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;

let operador;

const atualizarDisplay = (texto) =>{
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
    
}


const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = () =>{
    novoNumero = true;
}

operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));