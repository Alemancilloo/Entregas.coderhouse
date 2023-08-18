const dataLocal = JSON.parse(localStorage.getItem("Data"));
const dataCart = JSON.parse(localStorage.getItem("shoppingCart"));
console.log(dataCart)       
console.log(dataLocal);
const aggregateQuotes = document.getElementById("aggregateQuotes");
const newDiv = document.createElement("div");
newDiv.id = "newDiv";
newDiv.className = "newDiv";
const newText2 = document.createElement("h2");
newText2.innerHTML = `<center>No hay Cotizaciones Agregadas </center>`;
aggregateQuotes.appendChild(newDiv);

if(dataLocal !== null) {
    dataCart.forEach(function(cotizacion, index) {
    const newText = document.createElement("p");
    newText.className = "coti";
        newText.innerHTML = `<h3>Cotización ${index + 1}:</h3>
        Dirección Inicial: ${cotizacion.direccionInicial}</Br>
        Dirección Final: ${cotizacion.direccionFinal}</Br>
        Costo: $ ${cotizacion.costo}`;
        newDiv.appendChild(newText);
    });
    } else {
    newDiv.appendChild(newText2);
}
