const canvasGrid = document.createElement("div");
canvasGrid.classList.add("canvasGrid")
const canvasContainer = document.querySelector("#canvasContainer")

let repeatTimes= 16*16;


let createGrid = function(){

    for (let i = 0; i < repeatTimes; i++){
        const canvasGrid = document.createElement("div");
        canvasGrid.classList.add("canvasGrid");
        canvasContainer.appendChild(canvasGrid);
    }
}

createGrid();