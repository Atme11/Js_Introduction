//Actividad: Cantidad de caracteres
//▼ Recibir como parametro una cadena de texto
function palindrome(cadena) {
  let caracteres = cadena.split('');//separa por espacios poniendo comas por defecto
  console.log(caracteres); // imprime h,e,l,l,o

  let caracteresInvertidos = caracteres.reverse();//invierte la cadena
  console.log(caracteresInvertidos);//imprime o,l,l,e,h
  
  let cadenaInvertida = caracteresInvertidos.join('');//junta la cadena
  console.log(cadenaInvertida); // imprime olleh
  return cadena === cadenaInvertida; // devuelve true o false
}
console.log(palindrome("hello"));//imprime false
console.log(palindrome("hannah"));//imprime true