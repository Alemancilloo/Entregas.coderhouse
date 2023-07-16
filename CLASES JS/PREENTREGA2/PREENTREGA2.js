            // VARIABLES INICIALES Y CONSTANTES //
const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata"
const cotizaciones = [];
console.log(nombreProgramador);
let usuario = prompt("Ingresa nombre y apellido");
let edad;
console.log(usuario);

            // IDENTIFICACION DE USUARIO  //
if(usuario == nombreProgramador || usuario == nombreTutor)
    alert ("Bienvenido Programador Master");
else{
    edad = parseInt(prompt("¿Cual es tu edad?"));
    console.log(edad);
    let nacimiento = ( 2023 - edad);
    console.log(nacimiento);
    if(edad >= 18){
        alert("Naciste en " + nacimiento + ", eres mayor de edad" + ". PUEDES INGRESAR =)")
    }       
    else{
        alert("Naciste en " + nacimiento + ", eres menor de edad" + ". NO PUEDES INGRESAR >=(")
        window.location.href = "PREENTREGA2.html";
    }
}
let edad2 = edad;
for(edad; edad >= 1; edad--){
    console.log("Te saludo " + edad2 + " veces, por tus " + edad2 + " años");
}

            // GENERACION DE SOLICITUD DE COTIZACION (DIRECCIONES) //
let direccionInicial;
let direccionFinal;
let salir = " ";
const direcciones = {
  1: "SANTIAGO-CENTRO",
  2: "PUENTE ALTO",
  3: "VITACURA"
}
const valorDireccion = {
  1: 10890.60,
  2: 25400.85,
  3: 15320.24
}

if (usuario == nombreProgramador || usuario == nombreTutor)
    alert("Que Todo Te Salga......");
else {
    alert("BIENVENIDO A FLETES EL PANA SPA")
    while (salir !== 0) {
      direccionInicial = parseInt(prompt("Elige el número de opción para tu dirección de CARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA"));
      direccionFinal = parseInt(prompt("Elige el número de opción para tu dirección de DESCARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA"));
        switch (direccionInicial) {
          case 1:
            switch (direccionFinal) {
              case 1:
                alert("Tu cotización es dentro de la misma comuna de SANTIAGO-CENTRO");
                break;
              case 2:
                alert("Tu cotización es desde SANTIAGO-CENTRO hasta PUENTE ALTO");
                break;
              case 3:
                alert("Tu cotización es desde SANTIAGO-CENTRO hasta VITACURA");
                break;
              default:
                alert("Número de opción de dirección de descarga inválido");
                break;
            }
            break;
          case 2:
            switch (direccionFinal) {
              case 1:
                alert("Tu cotización es desde PUENTE ALTO hasta SANTIAGO-CENTRO");
                break;
              case 2:
                alert("Tu cotización es dentro de la misma comuna de PUENTE ALTO");
                break;
              case 3:
                alert("Tu cotización es desde PUENTE ALTO hasta VITACURA");
                break;
              default:
                alert("Número de opción de dirección de descarga inválido");
                break;
            }
            break;
          case 3:
            switch (direccionFinal) {
              case 1:
                alert("Tu cotización es desde VITACURA hasta SANTIAGO-CENTRO");
                break;
              case 2:
                alert("Tu cotización es desde VITACURA hasta PUENTE ALTO");
                break;
              case 3:
                alert("Tu cotización es dentro de la misma comuna de VITACURA");
                break;
              default:
                alert("Número de opción de dirección de descarga inválido");
                break;
            }
            break;
          default:
            alert("Número de opción de dirección de carga inválido");
            break;
        }
        if (salir !== 0) {
          salir = parseInt(prompt("Elige: \n0. SALIR \n1. VOLVER A COTIZAR"));
        }
          // ALMACENAMIENTO DE COTIZACIONES REALIZADAS //
          cotizaciones.push({
            nombre: usuario,
            edad: edad2,
            direccionInicial: direcciones[direccionInicial],
            direccionFinal: direcciones[direccionFinal],
            costo: Math.ceil(valorDireccion[direccionInicial]) + Math.ceil(valorDireccion[direccionFinal])
        });
      }
    } 

            //  EVALUACION DE SATISFACCION USUARIO (NPS) //
if (usuario == nombreProgramador || usuario == nombreTutor)
    alert("Muy Bien......");
else {
  experiencia()
  function experiencia() {
    let exp = parseInt(prompt("califica del 1 al 10 tu experiencia, donde 10 es la mayor calificacion"));
    console.log("La calificacion del usuario fue:", exp);
    nivelNps(exp);
      function nivelNps(exp){
      if(exp > 8)
      console.log("Interaccion Excelente");
      else if(exp >= 5)
      console.log("Interaccion Regular");
      else
      console.log("Interaccion Pesima");
    }
  }
}
            // TRANSCRIPCION DE COTIZACION CLIENTE //
class cotizante{
  constructor(nombre, edad, direccionInicial, direccionFinal){
    this.nombre = nombre;
    this.edad = edad;
    this.direccionInicial = direcciones[direccionInicial];
    this.direccionFinal = direcciones[direccionFinal];
    this.costo = Math.ceil(valorDireccion[direccionInicial]) + Math.ceil(valorDireccion[direccionFinal]);
  }
    ejecucion() {
        console.log(this.nombre + " tu ultima cotizacion fue: desde " + this.direccionInicial + " hasta " + this.direccionFinal + " con un costo de: " + this.costo);
    }
}
            // ULTIMA COTIZACION REALIZADA //
const cotizacion1 = new cotizante(usuario, edad2, direccionInicial, direccionFinal);
cotizacion1.ejecucion();
            // TOTAL DE COTIZACIONES REALIZADAS //
console.log(cotizaciones);
