let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let mouseDown = false;

//API -> to draw graphics
let tool = canvas.getContext("2d");

tool.strokeStyle = penColor; //color
tool.lineWidth = penWidth; //width (thickness)

//path of graphics -> mouse listener

//mousedown -> start new path , mousemove -> path fill(graphics)

canvas.addEventListener("mousedown", (e) => {
	mouseDown = true;
	beginPath({
		x: e.clientX,
		y: e.clientY,
	});
});

canvas.addEventListener("mousemove", (e) => {
	if (mouseDown) {
		drawStroke({
			x: e.clientX,
			y: e.clientY,
		});
	}
});

canvas.addEventListener("mouseup", (e) => {
	mouseDown = false;
});

function beginPath(strokeObj) {
	tool.beginPath();
	tool.moveTo(strokeObj.x, strokeObj.y);
}

function drawStroke(strokeObj) {
	tool.lineTo(strokeObj.x, strokeObj.y);
	tool.stroke();
}

//selection pen color
pencilColor.forEach((colorElem) => {
	colorElem.addEventListener("click", (e) => {
		let color = colorElem.classList[0];
		penColor = color;
		tool.strokeStyle = penColor;
	});
});

//selecting pencil width
pencilWidthElem.addEventListener("change", (e) => {
	penWidth = pencilWidthElem.value;
	tool.lineWidth = penWidth;
});

//selecting eraser width
eraserWidthElem.addEventListener("change", () => {
	eraserWidth = eraserWidthElem.value;
	tool.lineWidth = eraserWidth;
});

//eraser container
eraser.addEventListener("click", (e) => {
    
});

// tool.beginPath(); //new graphic (path) (line)
// tool.moveTo(10, 10); //start point
// tool.lineTo(100, 150); //end point
// tool.stroke(); //fill color(fill graphic)

// tool.strokeStyle = "blue";
// tool.beginPath();
// // agar hum beginPath nhi denge toh old path ke end se start hoga hamara naya path
// tool.moveTo(10, 10);
tool.lineTo(200, 200);
tool.stroke();
