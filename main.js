function drawMap(data) {
    let parsedDat = new Ms3dslevel(new KaitaiStream(data));
    let canvas = document.getElementById('viewer');
    if(!canvas){
        canvas = document.createElement('canvas');
        canvas.setAttribute("id", 'viewer')
        document.body.appendChild(canvas);
    }

    let xCoords = [];
    let yCoords = [];
    for(let i = 0; i < parsedDat.seg1Collision.elements.length; i++) {
        xCoords.push(parsedDat.seg1Collision.elements[i].line.point1.xCoord)
        xCoords.push(parsedDat.seg1Collision.elements[i].line.point2.xCoord)
        yCoords.push(parsedDat.seg1Collision.elements[i].line.point1.yCoord)
        yCoords.push(parsedDat.seg1Collision.elements[i].line.point2.yCoord)
    }
    
    let maxX = Math.max(...xCoords);
    let maxY = Math.max(...yCoords);
    
    canvas.style = "border-style: solid";
    canvas.width = maxX + 50;
    canvas.height = (maxY + 50) > 2000 ? 2000 : (maxY + 50);
    
    if(canvas.getContext) {
        var context = canvas.getContext('2d');
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#808000';
    context.lineWidth = 5;
    
    for(let i = 0; i < parsedDat.seg1Collision.elements.length; i++) {
        context.moveTo( parsedDat.seg1Collision.elements[i].line.point1.xCoord,
                        parsedDat.seg1Collision.elements[i].line.point1.yCoord);
        context.lineTo( parsedDat.seg1Collision.elements[i].line.point2.xCoord,
                        parsedDat.seg1Collision.elements[i].line.point2.yCoord);
        context.stroke();
    }
}