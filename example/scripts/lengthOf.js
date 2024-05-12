//Actividad 1: Conteo de caracteres
function lengthof(text){
    if (text.length > 0){
        text = text.length;
    } else{ 
        text = "Invalid imput";
    }
    return text;
}
console.log(lengthof("hello"));
console.log(lengthof(""));

/* 
//otra forma de hacerlo
function lengthOf(frase) {
    return (frase == null || frase === "") ? "Invalid input" : frase.length;
}
console.log(lengthOf("hello"));
console.log(lengthOf(""));
*/
