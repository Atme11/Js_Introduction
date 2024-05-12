/*//Actividad 1: Definiendo una plantilla
let nombre = "Franco";
let edad = "23";
let profesión = "Desarrollador full stack";
let ubicacion = "Perú - Lima";
let hobby = "Fútbol";
console.log(`¡Hola, ${nombre}!`); // Salida: ¡Hola, Franco!
console.log(`Edad: ${edad}`); 
console.log(`Profesión: ${profesión}`); 
console.log(`Ubicación: ${ubicacion}`); 
console.log(`Hobby: ${hobby}`); 
*/
/*//Actividad 2: Implementando la Asignación con AND lógico (&&)
let isOnline = false; //valor inicial
let entrada = prompt('Estas conectado? Escribe "SI" o "NO"'); //responder si o no
let respuesta = entrada ?? "No hay valor"; //si no hay respuesta(null), respuesta = "No hay valor"
//▼ en mayuscula todo, Si respuesta = SI o respuesta = NO
if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") { 
    //▼ Si, respuesta = SI y isOnline = false
    if (respuesta.toUpperCase() == "SI" && isOnline === false) {
        isOnline = true; // cambiamos a true
        if (isOnline) { //se activa
            //▼ definimos variables
            let hobby = "programar", nombre = "Franco", ubicacion = "Lima";
            alert("Usuario conectado");//mensaje de conectado
            //▼ mensaje 
            console.log(`Hola ${nombre} como esta el clima hoy en ${ubicacion}, espero estes disfrutando de ${hobby} el dia de hoy`);
        } else { // si, isOnline = false
            alert("El usuario no esta conectado");
        }
    } else { // Si, respuesta = NO
        alert("has decidido no conectarte");
    }
}else{ // si no hay respuesta
    alert(`${respuesta}`); // imprime "no hay valor"
}
*/
//Actividad 3: Definiendo una función con parámetros predeterminados.

const aqui = prompt("Ingresa un numero del 1 al 4");
let etiqueta = "0" + aqui;

let nombre = "Franco";
let edad = 23;
let altura = 173;
let contendor = `
<h2>${nombre}</h2>
<p>Edad: ${edad} años</p>
<p>Altura: ${altura} cm</p>
`;
document.getElementById(etiqueta).innerHTML = contendor;
