//---------Estructuras de Control Repetitivas-----------
/*
//Actividad: Calculando el total a pagar por una compra
let totalApagar = 0; // Inicialización de la variable que acumula el total a pagar
for (let index = 1; index <= 2; index++) { //repertir 2 veces
    const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
    let cantidad = Number(prompt("¿Cuántas unidades?")); // Solicitar la cantidad y convertir a número
    let precio = Number(prompt("¿Cuánto sale cada unidad?")); // Solicitar el precio y convertir a número
    const subtotal = cantidad * precio; // Calcular el subtotal
    totalApagar += subtotal; // totalApagar = totalApagar + subtotal
  }
// ▼ Mostrar el total a pagar
  alert(`El total a pagar por la compra es: $${totalApagar}`);
*/

//------Práctica Avanzada de Funciones-------
//Actividad: Cálculo del total de compras diarias
//▼Definir la función en flecha comprar
const comprar = () => {
  let totalApagar = 0;
  for (let i = 1; i <= 3; i++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt(`¿Cuántas unidades del producto #${i}?`));
    const precio = Number(prompt(`¿Cuánto sale cada unidad del producto #${i}?`));
    //▼calculo del total de la compra
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};
const total = comprar() + comprar();
console.log(total);
