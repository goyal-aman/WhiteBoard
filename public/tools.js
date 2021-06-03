let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = pencil.querySelector('.tool-options');
let eraserOptions = eraser.querySelector('.tool-options');

let activeTool = "pencil";

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
        ctx.strokeStyle = "black";
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
        pencilOptions.classList.add("hide");
    }
})