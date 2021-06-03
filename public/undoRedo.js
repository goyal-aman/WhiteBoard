let undo = document.querySelector("#undo");

undo.addEventListener("click", undoLine);

function undoLine(){
    let latestLine = db.pop();
    redodb.push(latestLine);

    //2. clear canvas.
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //3. redawLine();
    redrawLine(db);
}

function redrawLine(db){
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