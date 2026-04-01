let canvas;
let ctx;

// DrawTriangle.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  canvas = document.getElementById('example');
  // Get the rendering context for 2DCG
  ctx = canvas.getContext('2d');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Draw a black background
  ctx.fillStyle = "black"; // Set color to black
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

  const v1 = new Vector3([2.25, 2.25, 0]);
  drawVector(v1, 'red');
}

function drawVector(v, color) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(canvas.width / 2 + v.elements[0] * 20, canvas.height / 2 - v.elements[1] * 20);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function handleDrawEvent() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let x1 = document.getElementById("x1").value;
  let y1 = document.getElementById("y1").value;
  const v1 = new Vector3([parseFloat(x1), parseFloat(y1), 0]);
  drawVector(v1, "red");

  let x2 = document.getElementById("x2").value;
  let y2 = document.getElementById("y2").value;
  const v2 = new Vector3([parseFloat(x2), parseFloat(y2), 0]);
  drawVector(v2, "blue");
}
