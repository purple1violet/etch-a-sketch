// Part1: Slider
const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");

// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value each time you drag
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Part2: Container
const canvasContainer = document.querySelector("#canvasContainer");

// Create the div content
let createGrid = function(){
  let repeatTimes = (slider.value * slider.value);
    for (let i = 0; i < repeatTimes; i++){
        const canvasGrid = document.createElement("div");
        canvasGrid.classList.add("canvasGrid");
        canvasContainer.appendChild(canvasGrid);
    }
    canvasContainer.style.gridTemplateColumns = `repeat(${slider.value},1fr)`;
}

// Clear the div content
function clearContainer() {
  canvasContainer.replaceChildren();
  currentlyActive = false;}

// Part3: Grid color

const cleanAllButton = document.querySelector('#cleanAll');
const blackColorButton = document.querySelector('#blackColor');
const rainbowColorButton = document.querySelector('#rainbowColor');
const defaultColorButton = document.querySelector('#defaultColor');
const colorButton = document.querySelector('#colorButtonContainer')

let selectColor = function(){
const gridItems = document.querySelectorAll(".canvasGrid")
  let rainbowColor = function(){
    for (let i = 0; i < gridItems.length; i++){
      let color_x = Math.floor(Math.random() * 359);
      gridItems[i].addEventListener('mouseover', function(e) {
       e.target.style.background = `hsl(${color_x}, 85%, 70%)`})
    };
    ;
  };
  let blackColor = function(){
    for (let i = 0; i < gridItems.length; i++){
      gridItems[i].addEventListener('mouseover', function(e) {
        e.target.style.background = 'black'});}
        ;
  };

const cleanAllButton = document.querySelector('#cleanAll');
let blankColor = function(){

  for (let i = 0; i < gridItems.length; i++){
    gridItems[i].style.background = 'white';
  }};

cleanAllButton.addEventListener('click', blankColor);

blackColorButton.addEventListener('click', function(){blackColor()});
rainbowColorButton.addEventListener('click', function(){rainbowColor()});
defaultColorButton.addEventListener('click', function(){e.target.style.background = 'slategray'});

}


// Reset the container when slider value changed
let reSetContainer = function(){
  clearContainer();
  createGrid();
 selectColor();
}

slider.addEventListener('mouseup',reSetContainer)


// Start the page
reSetContainer();


