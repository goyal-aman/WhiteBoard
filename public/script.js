let canvas = document.querySelector('#canvas');

let {top:canvasTop} = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop; 
canvas.width = window.innerWidth;

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight - canvasTop; 
    canvas.width = window.innerWidth;
    
})