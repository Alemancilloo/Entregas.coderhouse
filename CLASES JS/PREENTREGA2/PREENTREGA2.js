// const nombreProgramador = "Daniel Llobet";
// const nombreTutor = "Andres Pata"
// console.log(nombreProgramador);
// let usuario = prompt("Ingresa nombre y apellido");
// let edad;
// console.log(usuario);
// if(usuario == nombreProgramador || usuario == nombreTutor)
//     alert ("Bienvenido Programador Master");
// else{
//     edad = parseInt(prompt("¿Cual es tu edad?"));
//     console.log(edad);
//     let nacimiento = ( 2023 - edad);
//     console.log(nacimiento);
//     if(edad >= 18){
//         alert("Naciste en " + nacimiento + ", eres mayor de edad" + ". PUEDES INGRESAR =)")
//     }       
//     else{
//         alert("Naciste en " + nacimiento + ", eres menor de edad" + ". NO PUEDES INGRESAR >=(")
//         window.location.href = "PREENTREGA2.html";
//     }
// }
// let edad2 = edad;
// for(edad; edad >= 1; edad--){
//     console.log("Te saludo " + edad2 + " veces, por tus " + edad2 + " años");
// }
// if (usuario == nombreProgramador || usuario == nombreTutor)
//     alert("Que Todo Te Salga......");
// else {
//     alert("BIENVENIDO A FLETES EL PANA SPA")
//     let direccionInicial = parseInt(prompt("Elige el numero de opcion de tu direccion de CARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3 VITACURA "));
//     let direccionFinal = parseInt(prompt("Elige el numero de opcion de tu direccion de DESCARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3 VITACURA "));
//     console.log(direccionInicial);
//     console.log(direccionFinal);
//     while (direccionInicial !== 0 || direccionFinal !== 0) {
//         switch (direccionInicial) {
//           case 1:
//             switch (direccionFinal) {
//               case 1:
//                 alert("Tu cotización es dentro de la misma comuna de SANTIAGO-CENTRO");
//                 break;
//               case 2:
//                 alert("Tu cotización es desde SANTIAGO-CENTRO hasta PUENTE ALTO");
//                 break;
//               case 3:
//                 alert("Tu cotización es desde SANTIAGO-CENTRO hasta VITACURA");
//                 break;
//               default:
//                 alert("Número de opción de dirección de descarga inválido");
//                 break;
//             }
//             break;
//           case 2:
//             switch (direccionFinal) {
//               case 1:
//                 alert("Tu cotización es desde PUENTE ALTO hasta SANTIAGO-CENTRO");
//                 break;
//               case 2:
//                 alert("Tu cotización es dentro de la misma comuna de PUENTE ALTO");
//                 break;
//               case 3:
//                 alert("Tu cotización es desde PUENTE ALTO hasta VITACURA");
//                 break;
//               default:
//                 alert("Número de opción de dirección de descarga inválido");
//                 break;
//             }
//             break;
//           case 3:
//             switch (direccionFinal) {
//               case 1:
//                 alert("Tu cotización es desde VITACURA hasta SANTIAGO-CENTRO");
//                 break;
//               case 2:
//                 alert("Tu cotización es desde VITACURA hasta PUENTE ALTO");
//                 break;
//               case 3:
//                 alert("Tu cotización es dentro de la misma comuna de VITACURA");
//                 break;
//               default:
//                 alert("Número de opción de dirección de descarga inválido");
//                 break;
//             }
//             break;
//           default:
//             alert("Número de opción de dirección de carga inválido");
//             break;
//         }
    
//         direccionInicial = parseInt(prompt("Elige el número de opción para tu dirección de CARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA \n0. SALIR"));
//         direccionFinal = parseInt(prompt("Elige el número de opción para tu dirección de DESCARGA: \n1. SANTIAGO-CENTRO \n2. PUENTE ALTO \n3. VITACURA \n0. SALIR"));
//       }
//     }
// if (usuario == nombreProgramador || usuario == nombreTutor)
//     alert("Muy Bien......");
// else {
//     experiencia()
//     function experiencia() {
//         let exp = prompt("califica del 1 al 10 tu experiencia, donde 10 es la mayor calificacion");
//         console.log("La calificacion del usuario fue:", exp);
//     }
// }

// function cotizante(nombre, edad, direccionInicial, direccionFinal) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccionInicial = direccionInicial;
//     this.direccionFinal = direccionFinal;
//     this.ejecucion = function () {
//         console.log(this.nombre + " " + this.direccionInicial + " " + this.direccionFinal);
//     }
// }

// const cotizacion1 = new cotizante(usuario, edad2, direccionInicial, direccionFinal);
// cotizacion1.ejecucion();


const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata";
console.log(nombreProgramador);
let usuario = prompt("Ingresa tu nombre y apellido");
let edad;
console.log(usuario);

if (usuario === nombreProgramador || usuario === nombreTutor) {
  alert("¡Bienvenido, Programador Master!");
} else {
  edad = parseInt(prompt("¿Cuál es tu edad?"));
  console.log(edad);
  let nacimiento = 2023 - edad;
  console.log(nacimiento);

  if (edad >= 18) {
    alert("Naciste en " + nacimiento + ", eres mayor de edad. ¡Puedes ingresar =)");
  } else {
    alert("Naciste en " + nacimiento + ", eres menor de edad. NO PUEDES INGRESAR >=(");
    window.location.href = 'PREENTREGA2.html';
  }

  let edad2 = edad;
  for (let i = edad; i >= 1; i--) {
    console.log("Te saludo " + edad2 + " veces, por tus " + edad2 + " años");
  }

  if (usuario === nombreProgramador || usuario === nombreTutor) {
    alert("Que todo te salga bien......");
  } else {
    alert("BIENVENIDO A FLETES EL PANA SPA");

    let direccionInicial = parseInt(prompt("Elige el número de opción para tu dirección de CARGA:\n1. SANTIAGO-CENTRO\n2. PUENTE ALTO\n3. VITACURA"));
    let direccionFinal = parseInt(prompt("Elige el número de opción para tu dirección de DESCARGA:\n1. SANTIAGO-CENTRO\n2. PUENTE ALTO\n3. VITACURA"));

    console.log(direccionInicial);
    console.log(direccionFinal);

    while (true) {
      if (direccionInicial === 0 || direccionFinal === 0) {
        break;
      }

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

      direccionInicial = parseInt(prompt("Elige el número de opción para tu dirección de CARGA:\n1. SANTIAGO-CENTRO\n2. PUENTE ALTO\n3. VITACURA\n0. SALIR"));
      direccionFinal = parseInt(prompt("Elige el número de opción para tu dirección de DESCARGA:\n1. SANTIAGO-CENTRO\n2. PUENTE ALTO\n3. VITACURA\n0. SALIR"));
    }
  }

  if (usuario === nombreProgramador || usuario === nombreTutor) {
    alert("Muy bien......");
  } else {
    experiencia();
  }

  function experiencia() {
    let exp = prompt("Califica del 1 al 10 tu experiencia, donde 10 es la calificación más alta");
    console.log("La calificación del usuario fue:", exp);
  }

  function Cotizante(nombre, edad, direccionInicial, direccionFinal) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccionInicial = direccionInicial;
    this.direccionFinal = direccionFinal;
    this.ejecucion = function () {
      console.log(this.nombre + " " + this.direccionInicial + " " + this.direccionFinal);
    };
  }

  const cotizacion1 = new Cotizante(usuario, edad2, direccionInicial, direccionFinal);
  cotizacion1.ejecucion();
}

