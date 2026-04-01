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

function angleBetween(v1, v2) {
  let mag1 = v1.magnitude();
  let mag2 = v2.magnitude();
  let dot = Vector3.dot(v1, v2)
  let cos = dot / (mag1 * mag2);
  let angle = Math.acos(cos) * 180 / Math.PI;
  return angle
}

function areaTriangle(v1, v2) {
  let cross = Vector3.cross(v1, v2);
  let area = 0.5 * cross.magnitude();
  return area;
}

function handleDrawOperationEvent() {
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

  let operation = document.getElementById("operation").value;
  let scalar = parseFloat(document.getElementById("scalar").value);
  const v3 = new Vector3([v1.elements[0], v1.elements[1], v1.elements[2]]);
  const v4 = new Vector3([v2.elements[0], v2.elements[1], v2.elements[2]]);
  if (operation === "add") {
    v3.add(v2);
    drawVector(v3, "green");
  }
  else if (operation === "sub") {
    v3.sub(v2);
    drawVector(v3, "green");
  }
  else if (operation === "mul") {
    v3.mul(scalar);
    v4.mul(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if (operation === "div") {
    v3.div(scalar);
    v4.div(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if (operation === "magnitude") {
    let m1 = v1.magnitude();
    let m2 = v2.magnitude();
    console.log("Magnitude v1: " + m1);
    console.log("Magnitude v2: " + m2);
  }
  else if (operation === "normalize") {
    v3.normalize();
    v4.normalize();
    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if (operation === "angleBetween") {
    let angle = angleBetween(v1, v2);
    console.log("Angle: " + angle);
  }
  else if (operation === "area") {
    let area = areaTriangle(v1, v2);
    console.log("Area of the triangle: " + area);
  }
}
