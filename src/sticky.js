let stickyDiv = document.querySelector("#sticky"); 
let stickyHeader = document.querySelector(".sticky-header");

stickyDiv.addEventListener("click", appendSticky);


let isStickyHold =false;
let initialX;
let initialY;

let selectedSticky = undefined;

function appendSticky(){
    {
        // <!-- sticky template -->
        //  <div class="sticky">
        //     <div class="sticky-header">
        //         <div class="minimize"></div>
        //         <div class="close"></div>
        //     </div>
        //     <div class="sticky-content">
        //         <textarea  cols="30" rows="10"></textarea>
        //     </div>
        // </div> 
    
    }
    let stickyTemplate = `<div class="sticky-header">
                <div class="minimize"></div>
                <div class="close"></div>
            </div>
            <div class="sticky-content">
                <textarea  cols="30" rows="10"></textarea>
            </div>`;
    let sticky = document.createElement("div");
    sticky.classList.add('sticky');
    sticky.innerHTML = stickyTemplate;

    sticky.querySelector(".minimize").addEventListener("click", ()=> minimizeSticky(sticky));
    sticky.querySelector(".close").addEventListener("click", ()=> removeSticky(sticky));

    
    let stickyHeader = sticky.querySelector('.sticky-header');
    stickyHeader.addEventListener("mousedown", (e)=>stickyHoldDown(e, sticky));
    stickyHeader.addEventListener("mousemove", (e)=>stickyMove(e, sticky));
    stickyHeader.addEventListener("mouseup", (e)=>stickyHoldup(e, sticky));
    
    

    document.querySelector("body").append(sticky);
}

function minimizeSticky(sticky){
    let stickyContent = sticky.querySelector(".sticky-content");
    stickyContent.classList.contains("hide")? stickyContent.classList.remove("hide")                                           : stickyContent.classList.add("hide");
}
function removeSticky(sticky){
    sticky.remove();
}
function stickyHoldDown(e, sticky){
    selectedSticky = sticky;
    isStickyHold = true;
    let x = e.clientX;
    let y = e.clientY;
    initialX = x;
    initialY = y;
}
function stickyMove(e, sticky){
    if(isStickyHold && selectedSticky){
        let x = e.clientX;
        let y = e.clientY;
        
        let finalX = e.clientX;
        let finalY = e.clientY;
        
        let dx = finalX - initialX;
        let dy = finalY - initialY;
        let {top, left} = selectedSticky.getBoundingClientRect();
        initialX = finalX;
        initialY = finalY;

        selectedSticky.style.top = top + dy + "px";
        selectedSticky.style.left = left + dx + "px";
    }
}
function stickyHoldup(e, sticky){
    isStickyHold = false;

}
