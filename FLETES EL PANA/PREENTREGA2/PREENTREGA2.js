// VARIABLES INICIALES Y CONSTANTES //
const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata"
const cotizaciones = [];
let usuario = "";
let edad = 0;
let totalCotizaciones = 0;

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


// IDENTIFICACION DE USUARIO  //
function verificarUsuario(usuario) {
    if (usuario == nombreProgramador || usuario == nombreTutor) {
        return true;
    }
    return false;
}
if (form && usernameInput && rutInput && ageInput && emailInput && cotizacionesRealizadasDiv && buttonClear) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        usuario = usernameInput.value.trim();
        //rut = rutInput.value.trim();
        edad = parseInt(ageInput.value);
        //email = emailInput.value.trim();

        //Guardado Storage
        saveLocalStorage();
        function saveLocalStorage(){
            user = {
            nombre: usuario,
            edad: edad
        }
    }
    localStorage.setItem("Usuario", user.nombre);
    localStorage.setItem("Edad", user.edad);
        

        if (verificarUsuario(usuario)) {
            mostrarMensaje("Bienvenido Programador Master");
            // Accion para mostrar cuadro de cotizacion realizada//
            cotizacionesRealizadasDiv.style.display = "block";
        } else {
            if (edad >= 18) {
                mostrarMensaje("Gracias por cotizar con Fletes El Pana");
                cotizacionesRealizadasDiv.style.display = "block";
            } else {
                alert("Eres Menor de Edad, no puedes cotizar");
                window.location.href = "index.html";
            }
        }
        //CREACION DE CONSTANTES Y VARIABLES PARA SOLICITUD DE COTIZACION//
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

        costoTotal = costoCarga + costoDescarga;

        const cotizacion = {
            direccionInicial: document.getElementById("loading").selectedOptions[0].text,
            direccionFinal: document.getElementById("download").selectedOptions[0].text,
            costo: costoTotal.toFixed(2)
        };

        cotizaciones.push(cotizacion);

        // CAlCULO DE SUMATORIA TOTAL DE COTIZACIONES//
        totalCotizaciones += parseFloat(cotizacion.costo);

        if (cotizaciones.length > 0) {
            let cotizacionesHTML = `<div class="contenedor2">`;
            cotizacionesHTML += `<h3><center> COTIZACIÓN </center></h3>`;
            cotizacionesHTML += `<h3>A nombre de: ${usuario}</h3>`;

            cotizaciones.forEach((cotizacion, index) => {
                cotizacionesHTML += `<div class="cotizacion-item">`;
                cotizacionesHTML += `<p><b>Cotización ${index + 1}:</b><br>
                                    Lugar de Carga: ${cotizacion.direccionInicial}<br> 
                                    Lugar de Descarga: ${cotizacion.direccionFinal}<br>
                                    Costo: ${cotizacion.costo} <button onclick="borrarCotizacion(${index})">Borrar</button></p>`;
                cotizacionesHTML += `</div>`;
            });
            cotizacionesRealizadasDiv.innerHTML = cotizacionesHTML;
            form.parentElement.appendChild(cotizacionesRealizadasDiv);
        }

    });
    buttonClear.addEventListener("click", () => {
        // Limpiar cotizaciones realizadas
        cotizaciones.length = 0;
        totalCotizaciones = 0;
        cotizacionesRealizadasDiv.innerHTML = "";
        cotizacionesRealizadasDiv.style.display = "none";
    });
}

function borrarCotizacion(index) {
    if (index >= 0 && index < cotizaciones.length) {
        const cotizacionBorrada = cotizaciones.splice(index, 1)[0];
        totalCotizaciones -= parseFloat(cotizacionBorrada.costo);
        // Mostrar cotizaciones actualizadas en el DOM
        if (cotizaciones.length > 0) {
            let cotizacionesHTML = `<div class="contenedor2">`;
                cotizacionesHTML += `<h3>Cotizaciones Realizadas de ${usuario}:</h3>`;
                cotizaciones.forEach((cotizacion, index) => {
                    cotizacionesHTML += `<div class="cotizacion-item">`;
                    cotizacionesHTML += `<p><b>Cotización ${index + 1}:</b><br>
                                        Lugar de Carga: ${cotizacion.direccionInicial}<br> 
                                        Lugar de Descarga: ${cotizacion.direccionFinal}<br>
                                        Costo: ${cotizacion.costo} <button onclick="borrarCotizacion(${index})">Borrar</button></p>`;
                    cotizacionesHTML += `</div>`;
                });
            cotizacionesRealizadasDiv.innerHTML = cotizacionesHTML;
            form.parentElement.appendChild(cotizacionesRealizadasDiv);
        } else {
            cotizacionesRealizadasDiv.innerHTML = "";
            cotizacionesRealizadasDiv.style.display = "none";
        }
    }
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerText = mensaje;
    document.body.appendChild(mensajeDiv);
    mensajeDiv.style.display = "block"; // Mostrar el mensaje

    setTimeout(() => {
      mensajeDiv.style.display = "none"; // Ocultar el mensaje después de 5 segundos
    }, 5000);
}












