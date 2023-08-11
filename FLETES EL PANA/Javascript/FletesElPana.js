// VARIABLES INICIALES Y CONSTANTES //
const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata"
const cotizaciones = [];
let usuario = "";
let edad = 0;
let totalCotizaciones = 0;
const cart = [];

// CONSTANTES EXTRAIDAS DEL DOM //
const form = document.getElementById("cotizadorForm");
const usernameInput = document.getElementById("username");
const rutInput = document.getElementById("rut");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const buttonClear = document.getElementById("buttonClear");

//CREADOR DE DIV EN EL HTML//
const cotizacionesRealizadasDiv = document.createElement("div");

//UBICACION DEL DIV EN EL HTML//
cotizacionesRealizadasDiv.classList.add("cotizaciones-realizadas");

//AJUSTE DE IMPUT EDAD
ageInput.addEventListener ("input", () => ageInput.value = ageInput.value.replace(/[^0-9]/g, ''));

// DESARROLLO DEL INPUT RUT //
const rutInput2 = document.getElementById('rut');
function formatRut(input) {
    // ELIMINAR CARACTERES QUE NO SON NUMEROS EXCEPTO - Y "K"  //
    input.value = input.value.replace(/[^0-9kK-]/g, '');
    // DIVIDIR RUT EN PARTE ENTERA Y DIGITO VERIFICADOR (SI LO TIENE)  //
    const parts = input.value.split('-');
    let formattedRut = parts[0];
    // SEPARADOR DE MILES  //
    formattedRut = formattedRut.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // REUNIR LAS PARTES CON GUION
    if (parts.length > 1) {
        formattedRut += '-' + parts[1];
    }
    // ACTUALIZAR EL INPUT CON RUT FORMATEADO  //
    input.value = formattedRut;
}
// ESCUCHAR EL INPUT RUT MIENTRAS SE ESCRIBE  //
rutInput2.addEventListener('input', function() {
    formatRut(rutInput2);
});

// IDENTIFICACION DE USUARIO  //
function verificarUsuario(usuario) {
    if (usuario == nombreProgramador || usuario == nombreTutor) {
        return true;
    }
    return false;
}
// FUNCIONAMIENTO INTEGRADO DEL COTIZADOR  //
if (form && usernameInput && rutInput && ageInput && emailInput && cotizacionesRealizadasDiv && buttonClear) {
    // FUNCION DEL BOTON COTIZAR  //
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        usuario = usernameInput.value.trim();
        rut = rutInput.value.trim();
        edad = parseInt(ageInput.value);
        email = emailInput.value.trim();

        //  FUNCION GUARDADO LOCAL-STORAGE  //
        saveLocalStorage();
        function saveLocalStorage(){
            user = {
            nombre: usuario,
            edad: edad,
            rut: rut,
            email: email
        }
    }
    //  EJECUCION DEL GUARDADO LOCAL-STORAGE
    localStorage.setItem("Datos", JSON.stringify(user));
        
        // EJECUCION DE MENSAJE AL COTIZAR //
        if (verificarUsuario(usuario)) {
            mostrarMensaje("Bienvenido Programador Master");
            cotizacionesRealizadasDiv.style.display = "block";
        } else {
            if (edad >= 18) {
                mostrarMensaje("Gracias por cotizar con Fletes El Pana");
                cotizacionesRealizadasDiv.style.display = "block";
            } else {
                alert("Eres Menor de Edad, no puedes cotizar");
                window.location.href = "./index.html";
            }
        }
        //  CREACION DE CONSTANTES Y VARIABLES PARA SOLICITUD DE COTIZACION  //
        const direccionCarga = document.getElementById("loading").value;
        const direccionDescarga = document.getElementById("download").value;
        let costoCarga = 0;
        let costoDescarga = 0;
        let costoTotal = 0;

        switch (direccionCarga) {
            case "1":
                costoCarga = 10253.20;
                break;
            case "2":
                costoCarga = 12754.13;
                break;
            case "3":
                costoCarga = 13278.18;
                break;
            case "4":
                costoCarga = 11236.99;
                break;
            case "5":
                costoCarga = 15278.52;
                break;
            case "6":
                costoCarga = 8542.17;
                break;
            case "7":
                costoCarga = 10587.25;
                break;
            case "8":
                costoCarga = 14048.52;
                break;
            default:
                costoCarga = 0;
                break;
        }
        switch (direccionDescarga) {
            case "1":
                costoDescarga = 10253.20;
                break;
            case "2":
                costoDescarga = 12754.13;
                break;
            case "3":
                costoDescarga = 13278.18;
                break;
            case "4":
                costoDescarga = 11236.99;
                break;
            case "5":
                costoDescarga = 15278.52;
                break;
            case "6":
                costoDescarga = 8542.17;
                break;
            case "7":
                costoDescarga = 10587.25;
                break;
            case "8":
                costoDescarga = 14048.52;
                break;
            default:
                costoDescarga = 0;
                break;
        }

        costoTotal = Math.round(costoCarga + costoDescarga);

        const cotizacion = {
            direccionInicial: document.getElementById("loading").selectedOptions[0].text,
            direccionFinal: document.getElementById("download").selectedOptions[0].text,
            costo: costoTotal.toLocaleString()
        };

        cotizaciones.push(cotizacion);

        // CAlCULO DE SUMATORIA TOTAL DE COTIZACIONES  //
        totalCotizaciones += parseFloat(cotizacion.costo.replace('.', '').replace(',', '.'));
        // MOSTRAR DE COTIZACION EN EL DOM //
        if (cotizaciones.length > 0) {
            let cotizacionesHTML = `<div class="contenedor2">`;
            cotizacionesHTML += `<h3><center> COTIZACIÓN </center></h3>`;
            cotizacionesHTML += `<h3>Nombre y Apellido: ${usuario}</h3>`;
            cotizacionesHTML += `<h3>Rut: ${rut}</h3>`;
            cotizacionesHTML += `<h3>Email: ${email}</h3>`;

            cotizaciones.forEach((cotizacion, index) => {
                cotizacionesHTML += `<div class="cotizacion-item">`;
                cotizacionesHTML += `<p><b>Cotización ${index + 1}:</b><br>
                                    Lugar de Carga: ${cotizacion.direccionInicial}<br> 
                                    Lugar de Descarga: ${cotizacion.direccionFinal}<br>
                                    Costo: $ ${cotizacion.costo} pesos  <button onclick="shoppingCart(${index})">Agregar</button>  <button onclick="borrarCotizacion(${index})">Borrar</button></p>`;
                cotizacionesHTML += `</div>`;
            });
            
            // EJECUCION DE EL TOTAL DE COTIZACIONES //
            cotizacionesHTML += `<p><b>Total Cotizaciones: $ ${totalCotizaciones.toLocaleString()} pesos</b></p>`;

            cotizacionesRealizadasDiv.innerHTML = cotizacionesHTML;
            form.parentElement.appendChild(cotizacionesRealizadasDiv);
        } else {
            cotizacionesRealizadasDiv.innerHTML = "";
            cotizacionesRealizadasDiv.style.display = "none";
        }

    });
    //  FUNCION PARA BORRAR TODAS LAS COTIZACIONES  //
    buttonClear.addEventListener("click", () => {
        cotizaciones.length = 0;
        totalCotizaciones = 0;
        cotizacionesRealizadasDiv.innerHTML = "";
        cotizacionesRealizadasDiv.style.display = "none";
    });
}
//  FUNCION PARA BORRAR CADA UNA DE LAS COTIZACIONES REALIZADAS  //
function borrarCotizacion(index) {
    if (index >= 0 && index < cotizaciones.length) {
        const cotizacionBorrada = cotizaciones.splice(index, 1)[0];
        totalCotizaciones -= parseFloat(cotizacionBorrada.costo.replace('.', '').replace(',', '.'));
        // VOLVER A MOSTRAR TOTAL COTIZACIONES AL BORRAR  //
        if (cotizaciones.length > 0) {
            let cotizacionesHTML = `<div class="contenedor2">`;
            cotizacionesHTML += `<h3><center> COTIZACIÓN </center></h3>`;
            cotizacionesHTML += `<h3>Nombre y Apellido: ${usuario}</h3>`;
            cotizacionesHTML += `<h3>Rut: ${rut}</h3>`;
            cotizacionesHTML += `<h3>Email: ${email}</h3>`;

            cotizaciones.forEach((cotizacion, index) => {
                cotizacionesHTML += `<div class="cotizacion-item">`;
                cotizacionesHTML += `<p><b>Cotización ${index + 1}:</b><br>
                                    Lugar de Carga: ${cotizacion.direccionInicial}<br> 
                                    Lugar de Descarga: ${cotizacion.direccionFinal}<br>
                                    Costo: $ ${cotizacion.costo} pesos  <button onclick="shoppingCart(${index})">Agregar</button>  <button onclick="borrarCotizacion(${index})">Borrar</button></p>`;
                cotizacionesHTML += `</div>`;
            });
            
            // EJECUCION DE EL TOTAL DE COTIZACIONES //
            cotizacionesHTML += `<p><b>Total Cotizaciones: $ ${totalCotizaciones.toLocaleString()} pesos</b></p>`;

            cotizacionesRealizadasDiv.innerHTML = cotizacionesHTML;
            form.parentElement.appendChild(cotizacionesRealizadasDiv);
        } else {
            cotizacionesRealizadasDiv.innerHTML = "";
            cotizacionesRealizadasDiv.style.display = "none";
        }
    }
}

// FUNCION DE MENSAJE AL COTIZAR  //
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerText = mensaje;
    document.body.appendChild(mensajeDiv);
    // MOSTRAR EL MENSAJE //
    mensajeDiv.style.display = "block";
    // OCULTAR MENSAJE DESPUÉS DE 5 SEGUNDOS //
    setTimeout(() => {
        mensajeDiv.style.display = "none";
        }, 
        3000
    );
}
