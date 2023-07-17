            // VARIABLES INICIALES Y CONSTANTES //
const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata"
const cotizaciones = [];
console.log(nombreProgramador);
let usuario = prompt("Ingresa nombre y apellido");
let edad;
let edad2;
console.log(usuario);

            // IDENTIFICACION DE USUARIO  //
function verificarUsuario(usuario){
  if(usuario == nombreProgramador || usuario == nombreTutor){
  return true;
  }
  return false;
}
if (verificarUsuario(usuario)){
    alert ("Bienvenido Programador Master");
}
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
  edad2 = edad;
}


            // GENERACION DE SOLICITUD DE COTIZACION (DIRECCIONES) //
let direccionInicial;
let direccionFinal;
let salir = " ";
function obtenerDireccion(direccion){
const direcciones = {
  1: "SANTIAGO-CENTRO",
  2: "PUENTE ALTO",
  3: "VITACURA"
};
return direcciones[direccion] || "Direccion Invalida";
}
const valorDireccion = {
  1: 10890.60,
  2: 25400.85,
  3: 15320.24
}

if (verificarUsuario(usuario)){
    alert("Que Todo Te Salga......");
}
else {
    alert("BIENVENIDO A FLETES EL PANA SPA")
    while (salir !== 0) {
      direccionInicial = parseInt(prompt("Elige el número de opción para tu dirección de CARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA"));
      direccionFinal = parseInt(prompt("Elige el número de opción para tu dirección de DESCARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA"));
      const direccionCarga = obtenerDireccion(direccionInicial);
      const direccionDescarga = obtenerDireccion(direccionFinal);
      if (direccionCarga === "Direccion Invalida" || direccionDescarga === "Direccion Invalida"){
      alert("Número de opción de dirección inválido");
    } 
    else {
      alert("Tu cotización es desde " + direccionCarga + " hasta " + direccionDescarga);
    }
        if (salir !== 0) {
          salir = parseInt(prompt("Elige: \n0. SALIR \n1. VOLVER A COTIZAR"));
        }
          // ALMACENAMIENTO DE COTIZACIONES REALIZADAS //
          cotizaciones.push({
            nombre: usuario,
            edad: edad2,
            direccionInicial: direccionCarga,
            direccionFinal: direccionDescarga,
            costo: Math.ceil(valorDireccion[direccionInicial]) + Math.ceil(valorDireccion[direccionFinal])
        });
      }
}

            //  EVALUACION DE SATISFACCION USUARIO (NPS) //
if (verificarUsuario(usuario)){
    alert("Muy Bien......");
}
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
    this.edad = edad2;
    this.direccionInicial = obtenerDireccion(direccionInicial);
    this.direccionFinal = obtenerDireccion(direccionFinal);
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
const sumaCotizaciones = cotizaciones.map((x) => x.costo);
const costoTotal = sumaCotizaciones.reduce((numero, valor) => numero + valor, 0);
console.log(cotizaciones);
console.log("Total Costo de cotizaciones: " + costoTotal);

