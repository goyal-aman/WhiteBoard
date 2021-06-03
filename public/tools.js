let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let activeTool = "pencil";

pencil.addEventListener("click", function(){
    if(activeTool=="pencil"){
        // open pencil open and close.
    }else{
        activeTool = "pencil";
        ctx.strokeStyle = "black";
    }
});

eraser.addEventListener("click", function(){
    if(activeTool=="eraser"){

    }else{
        activeTool = "eraser";
        ctx.strokeStyle = "white"; 
    }
})