//Estructuras Condicionales
//Ejercicio: Evaluación de múltiples condiciones
//▼ Pedimos un dato, lo pasamos a número, lo guardamos en una variable
const edad = Number(prompt("Ingrese su edad"));
//▼ si edad es mayor a 18 
if (edad > 18) {
  alert("Es mayor de edad"); //mostrar alerta
}
//▼ de otro modo si edad es mayor a 0 
else if (edad > 0) {
  alert("Es menos de edad");//mostrar alerta
}
//▼ de otro modo   
 else {
  alert("¡¡Edad incorrecta!!");//mostrar alerta
}
