const dataLocal = JSON.parse(localStorage.getItem("Data"));
const dataCart = JSON.parse(localStorage.getItem("shoppingCart"));
const aggregateQuotes = document.getElementById("aggregateQuotes");
const newDiv = document.createElement("div");
newDiv.id = "newDiv";
newDiv.className = "newDiv";
aggregateQuotes.appendChild(newDiv);

if (dataCart !== null) {
    const newText3 = document.createElement("div");
    newText3.className = "newText3";
    newText3.innerHTML = `<b> NOMBRE Y APELLIDO: </b> ${dataLocal.nombre} <img class="logoCotizacion" src="./assets/icono.png" height="100px" alt="Imagen" title="Fletes El Pana" ></br>
        <b>RUT:</b> ${dataLocal.rut} </br>
        <b>EMAIL:</b> ${dataLocal.email}</br>
        <center><h2> COTIZACIONES </h2></center>`;
    newDiv.appendChild(newText3);

    const table = document.createElement("table");
    table.className = "cotizaciones-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Compra", "Descripción", "Costo"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    let totalCost = 0;

    dataCart.forEach((cotizacion, index) => {
        const row = document.createElement("tr");
        const costoNumerico = parseFloat(cotizacion.costo.replace(".", "").replace(",", "."));
        const costoFormateado = costoNumerico.toLocaleString("es-CL", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        const columns = [`Cotización ${index + 1}`, ` DESDE: ${cotizacion.direccionInicial}  HASTA: ${cotizacion.direccionFinal}`, `$ ${costoFormateado}`];

        columns.forEach(columnText => {
            const td = document.createElement("td");
            td.textContent = columnText;
            row.appendChild(td);
        });

        tbody.appendChild(row);

        totalCost += costoNumerico;
    });

    const totalRow = document.createElement("tr");
    const totalCostFormateado = totalCost.toLocaleString("es-CL", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    totalRow.innerHTML = `<td colspan="3" class="total-row"><strong>TOTAL COTIZACIONES A PAGAR:</strong> $ ${totalCostFormateado}</td>`;
    tbody.appendChild(totalRow);

    table.appendChild(tbody);
    newDiv.appendChild(table);
} else {
    const newText2 = document.createElement("h2");
    newText2.innerHTML = `<center>No hay Cotizaciones Agregadas </center>`;
    newDiv.appendChild(newText2);
}
