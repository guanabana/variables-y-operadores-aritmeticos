misEventos();
function misEventos() {
  document
    .querySelector("#btnAgrupar")
    .addEventListener("click", leerApellidoYNombre);

  document
    .querySelector("#btnSumarej2")
    .addEventListener("click", sumarDosValores);

  document
    .querySelector("#btnSumarej3")
    .addEventListener("click", sumarTresValores);
}

//ejercicio 1
function leerApellidoYNombre() {
  let nombre1 = document.querySelector("#txtNombre").value;
  let apellido1 = document.querySelector("#txtApellido").value;
  document.querySelector("#txtMostrarConcatenado").innerHTML =
    apellido1 + "," + nombre1;
}

//ejercicio 2
function sumarDosValores() {
  let valor1txt = document.querySelector("#txtValor1ej2").value;
  let valor2txt = document.querySelector("#txtValor2ej2").value;
  let valor1Num = Number(valor1txt);
  let valor2Num = Number(valor2txt);
  let sumarValores = valor1Num + valor2Num;
  document.querySelector("#txtMostrarSumaEj2").innerHTML = sumarValores;
}

//ejercicio 3
function sumarTresValores() {
  let valor1txt = document.querySelector("#txtValor1ej3").value;
  let valor2txt = document.querySelector("#txtValor2ej3").value;
  let valor3txt = document.querySelector("#txtValor3ej3").value;
  let valor1Num = Number(valor1txt);
  let valor2Num = Number(valor2txt);
  let valor3Num = Number(valor3txt);
  let sumarValores = valor1Num + valor2Num + valor3Num;
  document.querySelector("#txtMostrarSumaEj3").innerHTML = sumarValores;
}

// ejercicio 4
