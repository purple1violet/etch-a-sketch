let currentlyActive = false;

// Part1: Slider
const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");

// Display the default slider value
output.textContent = `${slider.value} x ${slider.value}`;

// Update the current slider value each time you drag
slider.oninput = function() {
  output.textContent = `${this.value} x ${this.value}`;
}

// Part2: Container
const canvasContainer = document.querySelector("#canvasContainer");

// Create the div content
function createGrid(){
  let repeatTimes = (slider.value * slider.value);
    for (let i = 0; i < repeatTimes; i++){
        const canvasGrid = document.createElement("div");
        canvasGrid.classList.add("canvasGrid");
        canvasContainer.appendChild(canvasGrid);
        canvasContainer.style.gridTemplateColumns = `repeat(${slider.value},1fr)`;
}}

// Clear the div content
function clearContainer() {
  canvasContainer.replaceChildren();
  currentlyActive = false;
}

// Reset the container
function reSetContainer(){
  clearContainer();
  createGrid();
}

slider.addEventListener('mouseup',reSetContainer)


// Part3: Grid color
const colorButton = document.querySelector('#colorButtonContainer')

function selectColor(e){
  let rainbowColor = function(){
    let color_x = Math.floor(Math.random() * 359);
    e.target.style.background = `hsl(${color_x}, 85%, 70%)`;
  };



var colorPicker = document.querySelector("#color-picker");

var fav = colorPicker.value

let colorTheme = colorButton.color.value;
switch(colorTheme){
  case('defaultColor'):
  e.target.style.background = fav;
  break;
  case('blackColor'):
  e.target.style.background = 'black';
  break;
  case('rainbowColor'):
  rainbowColor();
  break;
  case('eraser'):
  e.target.style.background = 'white';
  break;
  case('cleanall'):
  blankColor();
  break;

default:
  e.target.style.background = 'black';
break;}
}

// Clean the container
let blankColor = function(){
  const gridItems = document.querySelectorAll(".canvasGrid")
  for (let i = 0; i < gridItems.length; i++){
    gridItems[i].style.background = 'white';
  }};
  
const cleanAllButton = document.querySelector('#cleanAll');
cleanAllButton.addEventListener('click', blankColor);

// click to draw
canvasContainer.addEventListener('click', function(){togglePen()});

function togglePen() {
  const gridItems = document.querySelectorAll(".canvasGrid");
  if(!currentlyActive) {
      gridItems.forEach(item =>{
        item.addEventListener('mouseover', selectColor);
        currentlyActive = true;})}
   else {
    gridItems.forEach(item =>{
      item.removeEventListener('mouseover', selectColor);
      currentlyActive = false;
  })}
}

// start the page
reSetContainer();
