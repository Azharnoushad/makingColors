// Global Selections And Variables

const colorDivsEl = document.querySelectorAll(".color");
const geneateBtnEl = document.querySelector(".generate");
const sliderEl = document.querySelectorAll('input[type="range"]');
const currentHexesEl = document.querySelectorAll(".color h2");
let initialColors;
// Function Body

// color generator function
function generateHex() {
 const hexColor = chroma.random()
 return hexColor
}

let randomHex = generateHex();
console.log(randomHex);

function randomColors() {

  colorDivsEl.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor= generateHex();


    div.style.backgroundColor = randomColor;
    hexText.innerHTML = randomColor;

    checkTextContrast(randomColor,hexText)
  });
}


function checkTextContrast(color,text){
    const luminance = chroma(color).luminance()
    if(luminance > 0.5){
        text.style.color="black"
    }else{
        text.style.color="white"
    }
}



randomColors();
