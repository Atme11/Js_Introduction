//Variables y Operaciones
//Determinando la longitud de una palabra/frase

//▼ Pedimos un dato string(texto) y guardamos en una variable
const frase = prompt("Ingrese una palabra o frase");
const fraseMinusculas = frase.toLowerCase();//combierte el texto en Minúscula
const fraseMayusculas = frase.toUpperCase();//combierte el texto en Mayúscula
const cantidad = frase.length; //retorna el número de elementos de la cadena de texto
const mensajeCantidad = "tiene " + cantidad + " palabras"; //creamos un mensaje
const minMay = fraseMayusculas + " " + fraseMinusculas;//creamos un mensaje
console.log(mensajeCantidad);//Mostramos en la consola el mensaje
console.log(minMay);//Mostramos en la consola el mensaje
