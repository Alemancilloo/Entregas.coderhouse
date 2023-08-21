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