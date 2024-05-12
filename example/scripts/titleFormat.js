//Actividad 1: Conteo de caracteres
/*const cadena = "hello WORLD";
console.log(cadena.charAt(0)); //muestra el primer caracter 
console.log(cadena.slice(1, cadena.length)); //muestra la subcadena de la posición 1 al último
console.log(cadena.charAt(0).toUpperCase());//primer caracter en Mayúscula
console.log(cadena.slice(1).toLowerCase());//subcadena del 1 al ultimo en Minúscula
console.log(cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase());//union 
console.log(cadena.length);//numero de caracteres 
*/

//Actividad 2:  Formato de título
//▼ Recibir como parametro una cadena de texto
function titleFormat(cadenaTexto){ 
    //Primera letra de la cadena de texto
    let primeraLetra = cadenaTexto.charAt(0).toUpperCase();
    //El resto de la cadena de texto
    let restoCadena = cadenaTexto.slice(1).toLowerCase();

    //Unir la primera letra con el resto de la cadena
    let resultado = primeraLetra + restoCadena;

    //mostrar por consola
    console.log(resultado);

    //retornar la longitud de la cadena
    return resultado.length;
}
//▼ Enviar texto mal escritos, debe imprimirse "Hello world" en todas 
console.log(titleFormat("hello world")); 
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLD"));
