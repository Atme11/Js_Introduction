/*
//Variables y Operaciones
// ▼ Ejercicio 1: Sumando números
//▼ Pedimos un dato,lo pasamos a número y guardamos en una variable
const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma = numero1 + numero2; // SUMA 
const promedio = suma/2; //DIVISION  
const triple = promedio * 3; //MULTIPLICACIÓN 
const menosDiez = triple - 10; // RESTA
//▼ Fabricamos los mensajes
const mensajeSuma = "La suma es " + suma;
const mensajePromedio = "El promedio es " + promedio;
const mensajeTriple = "El triple es " + triple;
const mensajeMenosDiez = "Menos Diez es " + menosDiez;
//▼ Juntamos todos los mensajes
const mensajeFinal = mensajeSuma + " " + mensajePromedio + " " + mensajeTriple + " " + mensajeMenosDiez;
alert(mensajeFinal); // Mostramos en una alerta el mensajefinal
*/

//Estructuras de Control Repetitivas
// ▼ Ejercicio: Sumando varios números
//▼ Pedimos un dato, lo pasamos a número, lo guardamos en una variable
const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
let sumatoria = 0;//Varible para acumular las sumas
//▼ Bucle for, se repetirá segun el valor de la variable "cantidad"
for (let index = 1; index <= cantidad; index++) {
  const numeroAsumar = Number(prompt("Ingrese un número a sumar"));//Pedimos los números
  sumatoria = sumatoria + numeroAsumar;//Sumamos y guardamos el resultado en una variable
}
console.log(sumatoria); //Imprimimos en la consola