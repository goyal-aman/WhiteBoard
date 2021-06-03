let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoLine);
redo.addEventListener("click", redoLine);

function undoLine(){
    let latestLine = db.pop();
    
    // online push line to redoDb if there is line on canvas.
    if(latestLine) redodb.push(latestLine);

    //2. clear canvas.
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //3. redawLine();
    redrawLine(db);
}

function redrawLine(db){
    ctx.lineCap = 'round';
    for(let i=0; i<db.length; i++){
        let line = db[i];
        for(let j=0; j<line.length; j++){
            let pointObject = line[j];
            if(pointObject.type == 'md'){
                ctx.strokeStyle = pointObject.color;
                ctx.lineWidth = pointObject.width;
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            }else{
                ctx.lineTo(pointObject.x, pointObject.y);
                ctx.stroke();
            }
        }
    }
}

function redoLine(){
    if(redodb.length==0){
        return;
    }
    let latestLine = redodb.pop();
    console.log(redodb);
    console.log(latestLine)
    db.push(latestLine);
    for(let i=0; i<db.length; i++){
        let line = db[i];
        for(let j=0; j<line.length; j++){
            let pointObject = line[j];
            if(pointObject.type == 'md'){
                ctx.strokeStyle = pointObject.color;
                ctx.lineWidth = pointObject.width;
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            }else{
                ctx.lineTo(pointObject.x, pointObject.y);
                ctx.stroke();
            }
        }
    }
}