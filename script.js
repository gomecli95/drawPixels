const addRowBtn = document.getElementById("add-row");
const table = document.getElementById("table");
const colorSelect = document.getElementById("select-color");
const fillColor = document.getElementById("fill-color");
const fillEmptyCells = document.getElementById("fill-empty");
const clear = document.getElementById("clear");
const customized = document.getElementById("customized");
const reset = document.getElementById("reset");
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");

customized.addEventListener("click", () => {
    for (let i = 0; i < columns.value; i++) {
        makeRow(rows.value);
    }
})

reset.addEventListener("click", () => {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    rows.value = 0;
    columns.value
})


function makeRow(numberOfColumns = 20) {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let i = 0; i < numberOfColumns; i++) {
        const tableData = document.createElement("td");
        tableRow.appendChild(tableData);
    }
}

addRowBtn.addEventListener("click", () => makeRow());

table.addEventListener("click", (event) => {
    if (event.target.tagName == "TD"){
        const className = event.target.className;
        if (className == "") {
            event.target.className = colorSelect.value;
        } else {
            event.target.className = "";
        }
    }
})

table.addEventListener("dragover", (event) => {
    if (event.target.tagName == "TD"){
        event.target.className = colorSelect.value;
    }
})

fillColor.addEventListener("click", () => {
    const tags = [...document.getElementsByTagName("td")];
    tags.forEach(tag => {
        tag.className = colorSelect.value;
    });
})

fillEmptyCells.addEventListener("click", () => {
    const tags = [...document.getElementsByTagName("td")];
    tags.forEach(tag => {
        if (tag.className == "") {
            tag.className = colorSelect.value;
        }
    });
})

clear.addEventListener("click", () => {
    const tags = [...document.getElementsByTagName("td")];
    tags.forEach(tag => {
        tag.className = "";
    });
})