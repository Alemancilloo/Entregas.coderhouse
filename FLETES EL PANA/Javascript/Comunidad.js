const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});


// Obtener comentarios del LocalStorage al cargar la página
const ComentariosGenerales = JSON.parse(localStorage.getItem("Comentarios")) || [];

// Función para mostrar los comentarios en el DOM
function mostrarComentariosEnDOM(comentarios) {
  const generalComments = document.getElementById("generalComments");
  generalComments.innerHTML = ""; // Limpiamos el contenido actual


const comentDownload = document.createElement("p");
comentDownload.classList.add("comment");
comentDownload.innerHTML = `<h2> Juan Soler</h2>`
comentDownload.innerHTML += "Me encantaron sus servicios, rapidos y totalmente seguros al momento de subir y bajar las cosas al camion";
generalComments.appendChild(comentDownload);


const comentDownload2 = document.createElement("p");
comentDownload2.classList.add("comment");
comentDownload2.innerHTML = `<h2> Mariano Diaz</h2>`
comentDownload2.innerHTML += "Super atentos, vinieron con ayudantes, hicieron toda la pega, 100% recomendables";
generalComments.appendChild(comentDownload2);

  comentarios.forEach((comentarioObj) => {
    const nuevoComentario = document.createElement("p");
    nuevoComentario.classList.add("comment");
    nuevoComentario.style.marginBottom = "10px";
    nuevoComentario.innerHTML = `<h2>${comentarioObj.nombre}</h2> ${comentarioObj.comentario}`;

    generalComments.appendChild(nuevoComentario);
  });
}

// Mostrar los comentarios en el DOM al cargar la página
mostrarComentariosEnDOM(ComentariosGenerales);




const enviarButton = document.querySelector(".texTareaButton");
const texTarea = document.getElementById("texTarea");
const nombreInput = document.querySelector("input[type='text']");

enviarButton.addEventListener("click", function () {
  const comentario = texTarea.value;
  const nombre = nombreInput.value;

  const validarNombre = new Promise((resolve, reject) => {
    if (nombre.trim() === "") {
      reject("Campo incompleto");
    } else {
      resolve();
    }
  });

  validarNombre
    .then(() => {
      if (comentario.trim() !== "") {
        const comentarioObj = {
          nombre: nombre,
          comentario: comentario
        };

        ComentariosGenerales.push(comentarioObj);


        localStorage.setItem("Comentarios", JSON.stringify(ComentariosGenerales));
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        const nuevoComentario = document.createElement("p");
        nuevoComentario.classList.add("comment");

        nuevoComentario.style.marginBottom = "10px";
        nuevoComentario.innerHTML = `<h2>${nombre}</h2> ${comentario}`;

        generalComments.appendChild(nuevoComentario);

        texTarea.value = "";
        nombreInput.value = "";
      }
    })
    .catch(() => {
      swal("Campo Vacio", "Por favor coloque su nombre", "error");
    });
});
