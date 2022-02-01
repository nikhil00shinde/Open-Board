//Backend wala kaam

//accessing
const express = require("express"); //Access
const socket = require("socket.io");

//application initialize ho jaegi
const app = express(); //initialized and server ready

app.use(express.static("public"));

//server listen karane ke liye
let port = 5000;
let server = app.listen(port, () => {
	console.log("Listening to port" + port);
});

//jitni bhi computer connected hain,receive karega and jitne bhi connected hain sabko tranfer kar dega

//connect with server
//frontend socketio cdn link(script)

//server se connection ke liye
let io = socket(server); //intialization

//event listener hai, ki jabhi mere frontend se connect ho jaega
io.on("connection", (socket) => {
	console.log("Made socket connection");

	// Recieved Data
	socket.on("beginPath", (data) => {
		// data -> data from frontend
		// Now transfer data to all connected computers
		io.sockets.emit("beginPath", data);
	});

	socket.on("drawStroke", (data) => {
		io.sockets.emit("drawStroke", data);
	});

	socket.on("redoUndo", (data) => {
		io.sockets.emit("redoUndo", data);
	});
});
