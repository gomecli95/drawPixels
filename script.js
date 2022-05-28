const addRowBtn = document.getElementById("add-row");
const table = document.getElementById("table");
const colorSelect = document.getElementById("select-color");
const fillColor = document.getElementById("fill-color");
const fillEmptyCells = document.getElementById("fill-empty");
const clear = document.getElementById("clear");

function makeRow() {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let i = 0; i < 20; i++) {
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