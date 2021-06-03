let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = pencil.querySelector('.tool-options');
let eraserOptions = eraser.querySelector('.tool-options');

let pencilSizeInput = pencil.querySelector("input");
let eraserSizeInput = eraser.querySelector("input");

let activeTool = "pencil";

// adding event listeners in all pencil colors options.
let currentPencilColor = "black";
let pencilColors = document.querySelectorAll(".pencil-colors div");
for(let i=0; i<pencilColors.length; i++){
    pencilColors[i].addEventListener("click", function(e){
        console.log(e);
        let selectedPencilColor = e.target.className;
        ctx.strokeStyle = selectedPencilColor;
        currentPencilColor = selectedPencilColor;
    })
}

pencil.addEventListener("click", function () {
    if (activeTool == "pencil") {
        // open pencil open and close.
        if (pencilOptions.classList.contains("hide")) {
            pencilOptions.classList.remove("hide");
        } else {
            pencilOptions.classList.add("hide");
        }

    } else {
        activeTool = "pencil";
        ctx.strokeStyle = currentPencilColor
        // set line width equal to vlaue of pencil rannge input value.
        ctx.lineWidth = pencilSizeInput.value;
        eraserOptions.classList.add("hide");
    }
});

eraser.addEventListener("click", function () {
    if (activeTool == "eraser") {
        if (eraserOptions.classList.contains("hide")) {
            eraserOptions.classList.remove("hide");
        } else {
            eraserOptions.classList.add("hide");
        }

    } else {
        activeTool = "eraser";
        ctx.strokeStyle = "white";

        // set lineWidth equal to vlaue of eraser range input value.
        ctx.lineWidth = eraserSizeInput.value;
        pencilOptions.classList.add("hide");
    }
})

pencilSizeInput.addEventListener("change", function(){
    let newPencilSize = pencilSizeInput.value
    ctx.lineWidth = newPencilSize;
})

eraserSizeInput.addEventListener("change", function(){
    let newEraserSize = eraserSizeInput.value;
    ctx.lineWidth = newEraserSize;
})