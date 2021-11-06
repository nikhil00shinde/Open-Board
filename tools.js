let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let pencilFlag = false;
let eraser = document.querySelector(".eraser");
let eraserFlag = false;

let sticky = document.querySelector(".sticky");

optionsCont.addEventListener("click", (e) => {
	//true  -> tools show
	//false -> hide tools
	optionsFlag = !optionsFlag;

	if (optionsFlag) openTools();
	else closeTools();
});

function openTools() {
	let iconElem = optionsCont.children[0];
	iconElem.classList.remove("fa-times");
	iconElem.classList.add("fa-bars");
	toolsCont.style.display = "flex";
}
function closeTools() {
	let iconElem = optionsCont.children[0];
	iconElem.classList.remove("fa-bars");
	iconElem.classList.add("fa-times");
	toolsCont.style.display = "none";
	// if the pencil tool container or eraser tool container is open then close them
	pencilToolCont.style.display = "none";
	eraserToolCont.style.display = "none";
}

pencil.addEventListener("click", (e) => {
	//    true -> show pencil tool , false -> hide pencil tool
	pencilFlag = !pencilFlag;
	if (pencilFlag) pencilToolCont.style.display = "block";
	else pencilToolCont.style.display = "none";
});

eraser.addEventListener("click", (e) => {
	// true -> show eraser tool, false -> hide eraser tool
	eraserFlag = !eraserFlag;

	if (eraserFlag) eraserToolCont.style.display = "flex";
	else eraserToolCont.style.display = "none";
});

sticky.addEventListener("click", (e) => {
	let stickCont = document.createElement("div");
	stickCont.setAttribute("class", "sticky-cont");

	stickCont.innerHTML = `
	<div class="header-cont">
		<div class="minimize"></div>
		<div class="remove"></div>
    </div>
	<div class="note-cont">
		<textarea></textarea>
	</div>`;

	document.body.appendChild(stickCont);
});
