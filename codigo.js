misEventos();
function misEventos() {
  document
    .querySelector("#btnAgrupar")
    .addEventListener("click", leerApellidoYNombre);
}

//ejercicio 1
function leerApellidoYNombre() {
  let nombre1 = document.querySelector("#txtNombre").value;
  let apellido1 = document.querySelector("#txtApellido").value;
  document.querySelector("#txtMostrarConcatenado").innerHTML =
    apellido1 + "," + nombre1;
}
