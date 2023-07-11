//         // Asignacion de Variables
// var nombreApellido = "Daniel Llobet";
// console.log(nombreApellido);
// var stringNombre = "Alejandro";
// console.log(stringNombre);
//         // Suma, resta y multiplicacion de numeros
// var p1 = 1;
// var p2 = 2;
// console.log( p1 + p2);
// console.log(p2 - p1);
// console.log(p2 * p2);
//         // Suma de textos (Concatenar)
// var textoUno = "Primera";
// var textoDos = "Clase";
// console.log(textoUno + " " + textoDos);
//         // Promp (obtencion de datos)
// var nombreUsuario = prompt("Hola ¿Como te llamas?");
// console.log(nombreUsuario); 
// var msjBienvenida = ("Bienvenido" + " " + nombreUsuario);
// console.log(msjBienvenida);
//         // Conversion de string a numero
// var edad = prompt("¿Que Edad Tienes?");
// console.log(parseInt(edad));
// var nacimiento = ("2023" - edad)
// console.log("Nacio en el año" + " " + nacimiento)
//         //Mensaje de Alerta
// alert("Bienvenido");
//         //if else (condicionamiento de respuesta)
// if (edad <= 18){
//         console.log("No es mayor de Edad")
// } else {
//         console.log("Es Mayor de Edad")
// }
//         // && (condicionamiento)



//         // For (bucle)
// //  (  Desde  ; Hasta ; Actualizacion)
// for (var x = 0; x <= 10; x++){
//         console.log (x);
// }
//         // for and If
// for (var x = 0; x <= 50;x = x + 2){
//         if (x == 20){
//                 break;
//         }
//         console.log(x);
// }
//         // While


//         // do while


//         //swich





//         //Funciones
// function saludar(){
//         console.log("Hola estudiantes");
// }
// saludar();
// function sumar(){
//         var numero = 1;
//         var numero2 = 2;
//         console.log(numero + numero2);
// }
// sumar();
// function lugarNacimiento(){
//         var lugar = prompt("¿Donde Naciste?");
//         console.log("Naciste en " + lugar);
// }
// lugarNacimiento();

//         //funciones anonimas
// const variable = function(){
//         console.log("Funcion Anonima")
// }
// console.log(variable);
// variable();

//         //funcion de flecha
// const flecha = () => console.log( "HolaFlecha");
// flecha();
// const flecha2 = (parametro1, parametro2) => (parametro1 + parametro2)
// console.log(flecha2(2, 1));


// CTR + K + C = COMENTAR
// CTR + k + U = DESCOMENTAR

    // datos clase profesor

// const cantidad = prompt('Ingrese cuantos datos quiere ingresar');
// let arr = [];
// for (let i = 0; i < cantidad; i++) {
//   arr[i] = prompt('Ingrese numero');
// }
// console.log(arr);

// let ingreso;
// let arr = [];
// let i = 0;
// do {
//   arr[i] = parseInt(prompt('Ingrese numero'));
//   ingreso = prompt('Poner si para continuar ingresando datos');
//   i++;
// } while (ingreso === 'si');
// console.log(arr);

// const vehiculos = [
//     { id: 1, tipo: 'auto' },
//     { id: 2, tipo: 'camioneta' },
//     { id: 3, tipo: 'moto' },
//   ];
  
//   // let i = 0, i < vehiculos.lengh, i++
//   for (const vehiculo of vehiculos) {
//     console.log('Vehiculo ' + vehiculo.id + 'es un ' + vehiculo.tipo);
//   }

// class Vehiculos {
//     // Constructor, usa this
//     constructor(tipo) {
//       this.tipo = tipo;
//     }
//     // Metodo
//     encender() {
//       //           Template String
//       console.log(`Vehiculo ${this.tipo} encendido`);
//     }
//   }
//   // Creacion de objectos a base de una clase
//   const auto = new Vehiculos('Auto');
//   const camioneta = new Vehiculos('Camioneta');
//   const moto = new Vehiculos('moto');
  
//   // Cracion de un arreglo con obj adentro
//   const vehiculos = [auto, camioneta, moto];
  
//   // Ciclo repetitivo para leer cada elemento del arreglo 
//   // y despues darle uso
//   // let i = 0, i < vehiculos.lengh, i++
//   for (const vehiculo of vehiculos) {
//     vehiculo.encender();
//   }



