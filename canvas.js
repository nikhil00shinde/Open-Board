let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//API -> to draw graphics
let tool = canvas.getContext("2d");

tool.strokeStyle = "red"; //color
tool.lineWidth = "8"; //width (thickness)

tool.beginPath(); //new graphic (path) (line)
tool.moveTo(10, 10); //start point
tool.lineTo(100, 150); //end point
tool.stroke(); //fill color(fill graphic)

tool.strokeStyle = "blue";
tool.beginPath();
// agar hum beginPath nhi denge toh old path ke end se start hoga hamara naya path
tool.moveTo(10, 10);
tool.lineTo(200, 200);
tool.stroke();
