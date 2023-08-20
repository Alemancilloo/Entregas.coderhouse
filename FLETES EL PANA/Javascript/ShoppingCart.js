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
    amountInter.innerText = dataShoppingAmount.length;
    }



