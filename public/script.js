let canvas = document.querySelector('#canvas');

let { top: canvasTop } = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;

})

let ctx = canvas.getContext("2d");
ctx.lineCap ='round';
let isMouseDown = false;

canvas.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    let x = e.clientX;
    let y = e.clientY - canvasTop;
    ctx.beginPath();
    ctx.moveTo(x, y);
})

canvas.addEventListener('mouseup', function (e) {
    isMouseDown = false;
})

canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        let x = e.clientX;
        let y = e.clientY - canvasTop;
        ctx.lineTo(x,y);
        ctx.stroke();
    }
})