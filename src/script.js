let canvas = document.querySelector('#canvas');

let { top: canvasTop } = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;
    redrawLine(db);

})

let ctx = canvas.getContext("2d");
ctx.lineCap ='round';

let db = [];
let redodb = [];
let line=[];

let isMouseDown = false;
canvas.addEventListener('mousedown', function (e) {
    if(redodb.length>0) redodb=[]
    
    isMouseDown = true;
    let x = e.clientX;
    let y = e.clientY - canvasTop;
    ctx.beginPath();
    ctx.moveTo(x, y);

    // on mouse down, create a point object, add it to 
    // line list.
    let pointObject = {
        type: "md",
        x:x,
        y:y,
        color:ctx.strokeStyle,
        width:ctx.lineWidth
    }
    line.push(pointObject);
})

canvas.addEventListener('mouseup', function (e) {
    isMouseDown = false;
    db.push(line);
    line = []
    console.log(db);
})

canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        let x = e.clientX;
        let y = e.clientY - canvasTop;
        ctx.lineTo(x,y);
        ctx.stroke();

        let pointObject = {
            type:"mm",
            x:x,
            y:y,
        }
        line.push(pointObject);
    }
})