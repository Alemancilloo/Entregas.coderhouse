function shoppingCart(index) {
    const cotizacionadd = cotizaciones [index];
    cart.push(cotizacionadd)
    shoppingCartLocalStorage();
    interfazCart();
    borrarCotizacion(index);
    mostrarMensaje("COTIZACION AGREGADA CON EXITO");
}
// FUNCION GUARDADO LOCALSTORAGE
function shoppingCartLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
// FUNCION INTERZAS CART
function interfazCart() {
    const contadorCarrito = document.getElementById("contadorCarrito");
    // ACTUALIZA CONTADOR CART
    contadorCarrito.innerText = cart.length;  
}