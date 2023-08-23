// AGREGADO DE BOTON EN EL DOM DEL INDEX  //
const buttonDiv = document.querySelector(".contenedor3");
const buttonClick = document.createElement("button");
buttonClick.textContent = "Click Aqui";
buttonClick.id = "buttonClick";
buttonClick.className = "buttonClick";
buttonDiv.appendChild(buttonClick);
buttonClick.addEventListener("click", () => {
    window.location.href = "./Cotizador.html";
})

// FUNCIONAMIENTO DE INTERACCION CON LAS IMAGENES //
const images = document.querySelectorAll('.galeriaFotos a');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

images.forEach(image => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
        const imageURL = this.getAttribute('href');
        modalImage.src = imageURL;
        modal.style.display = 'block';
    });
});

// FUNCION PARA BOTON SIDEBAR INDEX //
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});
const btnToggle = document.querySelector('.toggle-btn-index');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebarIndex').classList.toggle('active');
});