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

  document
    .querySelector("#btnSumarYMultiplicar")
    .addEventListener("click", sumarYMultiplicarDosValores);

  document
    .querySelector("#btnCalcularAreaej5")
    .addEventListener("click", calcularAreaDeCuadrado);

  document
    .querySelector("#btnCalcularEquivalenteEnDolar")
    .addEventListener("click", calcularCambioDePesosADolares);

  //7
  document
    .querySelector("#btnDividir")
    .addEventListener("click", calcularRestoDeDivision);
  //8
  document
    .querySelector("#btnCalcularOperacionEj8")
    .addEventListener("click", calcularSumaDosNumerosMenosTercerNumero);
  //9
  document
    .querySelector("#btnCalcularOperacionEj9")
    .addEventListener("click", calculoEntreTresValoresEj9);
  //10
  document
    .querySelector("#btnImportefinal10")
    .addEventListener("click", calcularImporteFinal);
  //11
  document
    .querySelector("#btnImportefinal11")
    .addEventListener("click", calcularImporteFinalConIva);
  //12
  document
    .querySelector("#btnIndicemasa12")
    .addEventListener("click", calcularIndiceMasaCorporal);
  //13
  document
    .querySelector("#btncantidad13")
    .addEventListener("click", contarCantidadDeVecesQuePresionanBoton);
  //14
  document
    .querySelector("#btncantidad14")
    .addEventListener("click", incrementarContadorDeVecesQuePresionanBoton);
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
function sumarYMultiplicarDosValores() {
  let valor1txt = document.querySelector("#txtValor1ej4").value;
  let valor2txt = document.querySelector("#txtValor2ej4").value;
  let valor1Num = Number(valor1txt);
  let valor2Num = Number(valor2txt);
  let sumarValores = valor1Num + valor2Num;
  let multiplicarValores = valor1Num * valor2Num;
  document.querySelector("#txtMostrarSumaEj4").innerHTML =
    "La Suma es: " + sumarValores;
  document.querySelector("#txtMostrarMultiplicacionEj4").innerHTML =
    "La Multiplicación es: " + multiplicarValores;
}

// ejercicio 5
function calcularAreaDeCuadrado() {
  let valor1txt = document.querySelector("#txtValorej5").value;
  let valor1Num = Number(valor1txt);
  let areaCuadrado = valor1Num * valor1Num;
  document.querySelector("#txtMostrarAreaEje5").innerHTML =
    "El área del Cuadrado es: " + areaCuadrado;
}

// ejercicio 6
function calcularCambioDePesosADolares() {
  let Pesos = document.querySelector("#txtPesosej6").value;
  let PesosNum = Number(Pesos);
  let dolar = document.querySelector("#txtTipoDeCambioej6").value;
  let dolarNum = Number(dolar);
  let Cambio = PesosNum / dolarNum;
  document.querySelector("#txtMostrarCambioDolaresj6").innerHTML =
    Cambio + " USD ";
}
//ejercicio 7
function calcularRestoDeDivision() {
  let Dividendo = document.querySelector("#txtDividendoej7").value;
  let DivNum = Number(Dividendo);
  let Divisor = document.querySelector("#txtDivisorej7").value;
  let DivsorNum = Number(Divisor);
  let Resto = DivNum % DivsorNum;
  document.querySelector("#txtRestoej7").innerHTML = "Resto es " + Resto;
}

//ejercicio 8
function calcularSumaDosNumerosMenosTercerNumero() {
  let valorsum1 = document.querySelector("#txtValor1ej8").value;
  let valorsum2 = document.querySelector("#txtValor2ej8").value;
  let valorrest3 = document.querySelector("#txtValor3ej8").value;
  let NumValorsum1 = Number(valorsum1);
  let NumValorsum2 = Number(valorsum2);
  let NumValorrest3 = Number(valorrest3);
  let Calculoeje8 = NumValorsum1 + NumValorsum2 - NumValorrest3;
  document.querySelector("#txtCalculodeje8").innerHTML =
    "la suma de Numero 1 + Numero 2 Menos el Numero 3 es " + Calculoeje8;
}
//ejercicio 9
function calculoEntreTresValoresEj9() {
  let Valor1eje9 = document.querySelector("#txtValor1eje9").value;
  let Valor2eje9 = document.querySelector("#txtValor2eje9").value;
  let Valor3eje9 = document.querySelector("#txtValor3eje9").value;
  let NumValor1eje9 = Number(Valor1eje9);
  let NumValor2eje9 = Number(Valor2eje9);
  let NumValor3eje9 = Number(Valor3eje9);
  let alcuadrado = NumValor1eje9 * NumValor1eje9;
  let suma2y3eje9 = NumValor2eje9 + NumValor3eje9;
  let Resultadoej9 = alcuadrado - suma2y3eje9;

  document.querySelector("#txtResultadoej9").innerHTML =
    "El numro 1 elevado al cuadrado menos la suma de numero 1 y 2  es =  " +
    Resultadoej9;
}
//ejercicio 10
function calcularImporteFinal() {
  let importe10 = document.querySelector("#txtImporte10").value;
  let recargo10 = document.querySelector("#txtRecargo10").value;
  let NumImporte10 = Number(importe10);
  let NumRecargo10 = Number(recargo10);
  let CalculoPorcentaje10 = (NumImporte10 * NumRecargo10) / 100;
  let importefinal10 = NumImporte10 + CalculoPorcentaje10;
  document.querySelector("#txtImporteFinal10").innerHTML = importefinal10;
}
//ejercicio 11
function calcularImporteFinalConIva() {
  let Subtotal11 = document.querySelector("#txtSubtotal11").value;
  let NumSubtotal11 = Number(Subtotal11);
  let CalculoPorcentaje11 = (NumSubtotal11 * 22) / 100;
  let importefinal11 = NumSubtotal11 + CalculoPorcentaje11;
  document.querySelector("#txtImporteFinal11").innerHTML = importefinal11;
}
//ejercicio 12

function calcularIndiceMasaCorporal() {
  let pesokg = document.querySelector("#txtPeso12").value;
  let alturaMts = document.querySelector("#txtAltura12").value;
  let Numpesokg = Number(pesokg);
  let NumalturaMts = Number(alturaMts);
  let estatura12 = NumalturaMts * NumalturaMts;
  let Imc = Numpesokg / estatura12;
  document.querySelector("#txtMostrarImc12").innerHTML = Imc;
}

//ejercicio 13
let contador13 = 0;
function contarCantidadDeVecesQuePresionanBoton() {
  contador13 = contador13 + 1;
  document.querySelector("#txtCuentaVeces13").innerHTML =
    contador13 + " clicks";
}
//ejercicio 14
let contador14 = 0;
function incrementarContadorDeVecesQuePresionanBoton() {
  contador14 = contador14 + 3;
  document.querySelector("#txtCuentaVeces14").innerHTML =
    contador14 + " clicks";
}
