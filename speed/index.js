//----------Iniciando con funciones------------------
/*
//Actividad 1: Función de cálculo de velocidad
function calcularVelocidad() { // función
  const distancia = 10;//variable distancia
  const tiempo = 2;//variable tiempo
  const velocidad = distancia / tiempo;//formula para la velocidad
  console.log("La velocidad del móvil es " + velocidad);//Imprimir la velocidad
}
calcularVelocidad();//llamamos a la función
calcularVelocidad();
calcularVelocidad();
*/
/*
//Actividad 2: Función de velocidad dinámica
function calcularVelocidad(distancia, tiempo) {
  const velocidad = distancia / tiempo;
  console.log("La velocidad del móvil es " + velocidad);
}
calcularVelocidad(10, 2); //llamamos a la función
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);
*/

//Actividad 3: Retorno de velocidad
const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  return velocidad;
};
//▼Guardar los valores calculados en variables distintas
const velocidad1 = calcularVelocidad(10, 2);
const velocidad2 = calcularVelocidad(100, 2);
const velocidad3 = calcularVelocidad(75, 3);
//▼imprimir los valores guardados
console.log("La velocidad de Juana es " + velocidad1);
console.log("La velocidad de Pedro es " + velocidad2);
console.log("La velocidad de Carla es " + velocidad3);
