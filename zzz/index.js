/*//Actividad 1: Property Shorthand
const nombre = "Franco";
const edad = 18;
const correo = "atmefranco1@gmail.com";
const altura = 173;
const peso = 70;

const persona = { nombre: nombre, edad: edad };
const personaEstructurada = { nombre, edad, correo, altura, peso };
if (edad >= 18){
    document.getElementById("nombre").innerHTML = `Nombre: ${personaEstructurada.nombre}`;
    document.getElementById("edad").innerHTML = `Edad: ${personaEstructurada.edad} años - mayor de edad`;
    document.getElementById("correo").innerHTML = `correo: ${personaEstructurada.correo}`;
    document.getElementById("altura").innerHTML = `altura: ${personaEstructurada.altura} cm`;
    document.getElementById("peso").innerHTML = `peso: ${personaEstructurada.peso} kg`;
}else{
    document.getElementById("nombre").innerHTML = `Nombre: ${personaEstructurada.nombre}`;
    document.getElementById("edad").innerHTML = `Edad: ${personaEstructurada.edad} años - menor de edad`;

}
*/
//Actividad 2: Desestructuración de objetos
//▼ Define un objeto con propiedades individuales y grupales de hobbies
const hobbies = {
  enPareja: ["ver películas", "cocinar juntos", "viajar", "hacer ejercicio", "ir a conciertos"],
  conAmigos: ["jugar videojuegos", "practicar deportes", "salir a comer", "ir de fiesta", "hacer senderismo"],
  conFamilia: ["hacer barbacoas", "jugar juegos de mesa", "visitar parques de atracciones", "celebrar eventos familiares", "ver series en familia"],
};

//▼ Desestructura el tercer hobby individual y el cuarto grupal
const {conFamilia: [primeroFamilia], conAmigos: [, , , cuartoAmigos]} = hobbies;
let contendor = `Mi tercer hobby individual es <strong>${primeroFamilia}</strong>, mientras que mi cuarto hobby grupal es <strong>${cuartoAmigos}</strong>.`;
document.getElementById("hobbies-seleccionados").innerHTML = contendor;
