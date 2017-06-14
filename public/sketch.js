var socket

function setup () {
  createCanvas(windowWidth, windowHeight)
  background(51)
  socket = io.connect('https://socketxdraw.herokuapp.com')
  socket.on('mouse', newDrawing)
}

function newDrawing (data) {
  noStroke()
  fill(255)
  ellipse(data.x, data.y, 10, 10)
}

function mouseDragged () {
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)

  noStroke()
  fill(255, 0, 0)
  ellipse(mouseX, mouseY, 10, 10)
}
