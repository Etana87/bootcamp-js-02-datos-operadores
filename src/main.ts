import "./style.css";

//Módulo 3: Tipos de datos y operadores

// Variables
const totalCena = 120; // Total
const bebidas = 18; // Bebidas
const amigos = 6; // Número de amigos

// Calcular el total sin bebidas
const comida = totalCena - bebidas;

// Calcular cuánto paga cada uno por la comida 
const costeAmigo = comida / amigos;

// Resultado: Se utiliza toFixed(2) para mostrar los decimales en caso de que fuese necesario
console.log(`Cada uno tiene que pagar: ${costeAmigo.toFixed(2)} €.`);