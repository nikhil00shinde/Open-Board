let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let toolsCont = document.querySelector(".tools-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");

//true  -> tools show
//false -> hide tools
optionsCont.addEventListener("click", (e) => {
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
