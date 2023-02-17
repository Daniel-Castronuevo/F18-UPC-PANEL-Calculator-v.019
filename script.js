"use strict"

// CARGAR CALCULADORA //

const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    calculator.style.opacity = 1
});

// PANTALLA //

const botonesNumeros = document.querySelectorAll(".button-num");
const mainScreen = document.querySelector(".tipping")

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{
        mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
    })
});
