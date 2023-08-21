//  VARIABLES DEL FUNCIONAMIENTO PARA EL CARRITO  //
let dataShoppingAmount = "";
dataShoppingAmount = JSON.parse(localStorage.getItem("shoppingCart"));
//  EJECUCION  //
interfazCart()
// FUNCION PRINCIPAL DEL CARRITO  //
function shoppingCart(index) {
    const cotizacionadd = cotizaciones [index];
    cart.push(cotizacionadd)
    shoppingCartLocalStorage();
    interfazCart();
    borrarCotizacion(index);
    mostrarMensaje("COTIZACION AGREGADA CON EXITO");
}
// FUNCION GUARDADO LOCALSTORAGE  //
function shoppingCartLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
// FUNCION INTERZAS CONTADOR CARRITO
function interfazCart() {
    const amountInter = document.getElementById("amount");
    dataShoppingAmount = JSON.parse(localStorage.getItem("shoppingCart"));
    if(dataShoppingAmount !== null){
    amountInter.innerText = dataShoppingAmount.length;
    } else {
        amountInter.innerText = 0;
    }}

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