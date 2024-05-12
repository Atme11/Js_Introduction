//▼ Definir funcion, donde reciba como parámetro dos cadenas de texto
function stringIncludes(cadena1, cadena2) {
    //▼ Verificamos q la primera cadena esta incluida en la segunda
    // si esta incluido devuelve true, si no false
    return cadena2.includes(cadena1) ? true : false;
}
console.log(stringIncludes("he","Hello")); // Imprime false
console.log(stringIncludes("he","hello world"));// Imprime true