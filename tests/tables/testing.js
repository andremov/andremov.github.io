
// GRID

const tableRadius=38;
const scale = 25;
const tableWidth = 87.5;
const tableHeight = 37.5;

let root = d3.select("#test svg");

for (let x = 0; x < 36; x++) {
  for (let y = 0; y < 36; y++) {

    root.append('rect')
      .attr('transform',`translate(${x*scale}, ${y*scale})`)
      .attr('width', scale)
      .attr('height', scale)
      .attr('fill', "white")
      .attr('stroke', "gray")

  }
}


  root.append('rect')
    .attr('transform',`translate(${690}, ${830})`)
    .attr('width', 200)
    .attr('height', 60)
    .attr('fill', "hsl(100,30%,50%)")
    .on("click", function() {
      makeDraggableCircle({x:450, y:850});
    })

  root.append('text')
    .attr('transform',`translate(${747}, ${868})`)
    .attr('fill',"white")
    .attr('font-size',20)
    .text("New Circle")
    .on("click", function() {
      makeDraggableCircle({x:450, y:850});
    })


  root.append('rect')
    .attr('transform',`translate(${690}, ${730})`)
    .attr('width', 200)
    .attr('height', 60)
    .attr('fill', "hsl(100,30%,50%)")
    .on("click", function() {
      makeDraggableRect({x:450, y:850});
    })

  root.append('text')
    .attr('transform',`translate(${727}, ${768})`)
    .attr('fill',"white")
    .attr('font-size',20)
    .text("New Rectangle")
    .on("click", function() {
      makeDraggableRect({x:450, y:850});
    })


  root.append('rect')
    .attr('transform',`translate(${10}, ${830})`)
    .attr('width', 200)
    .attr('height', 60)
    .attr('fill', "hsl(0,00%,100%)")
    .attr('stroke',"hsl(0,50%,30%)")

  root.append('text')
    .attr('transform',`translate(${37}, ${865})`)
    .attr('fill',"black")
    .text("Drag Here to Delete")


  root.append("polyline")      // attach a polyline
    .attr('stroke', "black")  // colour the line
    .attr('fill', "white")     // remove any fill colour
    .attr("points", "50,200, 200,50, 300,150, 600,150, 700,50, 850,200, 750,300, 750, 700, 150,700, 150,300, 50,200");  // x,y points




function makeDraggableCircle(point, id) {

    var circleDrag = d3.drag()
      .on('drag', onDrag)
      .on('end', checkDeath);

    let circle = root.append('circle')
        .attr('class', "draggable")
        .attr('r', tableRadius)
        .attr('fill', "hsl(0,50%,50%)")
        .attr('_id', id)
        .attr('stroke', "hsl(0,0%,0%)")
        .call(
          circleDrag
        );

    function updatePosition() {
        circle.attr('transform',`translate(${point.x} ${point.y})`);
    }

    function checkDeath() {
        if (10 < point.x && point.x < 210 && 830 < point.y && point.y < 890) {
          point.x = -300;
          point.y = -300;

          updatePosition();
        }
    }

    function onDrag() {
        point.x = d3.event.x;
        point.y = d3.event.y;

        updatePosition();
    }

    updatePosition();
}


function makeDraggableRect(point) {

    var rectDrag = d3.drag()
      .on('drag', onDrag)
      .on('end', checkDeath);

    let rect = root.append('rect')
        .attr('class', "draggable")
        .attr('width', tableWidth)
        .attr('height', tableHeight)
        .attr('fill', "hsl(200,50%,50%)")
        .attr('stroke', "hsl(0,0%,0%)")
        .call(
          rectDrag
        );

    function updatePosition() {
        rect.attr('transform',`translate(${point.x-(tableWidth/2)} ${point.y-(tableHeight/2)})`);
    }

    function checkDeath() {
        if (10 < point.x && point.x < 210 && 830 < point.y && point.y < 890) {
          point.x = -300;
          point.y = -300;

          updatePosition();
        }
    }

    function onDrag() {
        point.x = d3.event.x;
        point.y = d3.event.y;

        updatePosition();
    }

    updatePosition();
}
