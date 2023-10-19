let currentlyActive = false;

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
     //   canvasGrid.addEventListener('mouseover', function(e) {
       //     canvasGrid.style.background = 'slategray';
       //   });   
    }
    canvasContainer.style.gridTemplateColumns = `repeat(${slider.value},1fr)`;
}

// Clear the div content
function clearContainer() {
  canvasContainer.replaceChildren();
  currentlyActive = false;}

// Reset the container
let reSetContainer = function(){
  clearContainer();
  createGrid();
}

slider.addEventListener('mouseup',reSetContainer)


// Part3: Grid color

const colorButton = document.querySelector('#colorButtonContainer')

let selectColor = function(e){
  
  let rainbowColor = function(){
    let color_x = Math.floor(Math.random() * 359);
    e.target.style.background = `hsl(${color_x}, 85%, 70%)`;
  };

let colorTheme = colorButton.color.value;
switch(colorTheme){
  case('defaultColor'):
  e.target.style.background = 'slategrey';
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
default:
  e.target.style.background = 'slategray';
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