// Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Tools
const brushColor = document.getElementById("brushColor");
const canvasColor = document.getElementById("canvasColor");
const brushSize = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");

let isDrawing = false;
let erasing = false;

// Start Drawing
canvas.addEventListener("mousedown", (e) => {

  isDrawing = true;

  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);

});

// Draw
canvas.addEventListener("mousemove", (e) => {

  if(!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);

  // Brush or Eraser
  if(erasing){
    ctx.strokeStyle = canvas.style.backgroundColor || "white";
  }else{
    ctx.strokeStyle = brushColor.value;
  }

  ctx.lineWidth = brushSize.value;

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.stroke();

});

// Stop Drawing
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

function stopDrawing(){

  isDrawing = false;
  ctx.closePath();

}

// Clear Canvas
clearBtn.addEventListener("click", () => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

});

// Change Canvas Color
canvasColor.addEventListener("input", () => {

  canvas.style.backgroundColor = canvasColor.value;

});

// Eraser Tool
eraserBtn.addEventListener("click", () => {

  erasing = !erasing;

  if(erasing){
    eraserBtn.innerText = "Drawing";
  }else{
    eraserBtn.innerText = "Eraser";
  }

});