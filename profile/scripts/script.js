const misDatosFisicos = {
  nombre: prompt("Ingrese su nombre"),
  edad: 23,
  direccion: { calle: "Av. 15 de julio", numero: 123, ciudad: "Lima" },
  altura: 1.73, 
  peso: 70,
  hobby: "Jugar Fútbol",
};
let contenidoPerfil = `
    <h2>${misDatosFisicos.nombre = misDatosFisicos.nombre ?? "No hay nombre"}</h2>
    <p>Edad: ${misDatosFisicos.edad} años</p>
    <p>Dirección: ${misDatosFisicos.direccion.calle} ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}</p>
    <p>Altura: ${misDatosFisicos.altura} cm</p>
    <p>Peso: ${misDatosFisicos.peso} kg</p>
    <p>Hobby: ${misDatosFisicos.hobby}</p>
    `;

document.getElementById("perfil").innerHTML = contenidoPerfil;
