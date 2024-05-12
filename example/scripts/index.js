//Entradas y Salidas de datos
//▼ Selecciona la linea del h1 con id=mensaje del HTML
const selector = document.getElementById("mensaje");
//▼ Escribir dentro de esa etiqueta con JS
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";
//▼ Pedimos un dato y lo guardamos en la variable "nombre"
const nombre = prompt("¿Como te llamas?");
//▼ texto + varible y guardamos en una variable
const mensaje = "Bienvenido " + nombre;
console.log(mensaje); //Imprimir en consola
alert(mensaje); // Mostrar en alerta
