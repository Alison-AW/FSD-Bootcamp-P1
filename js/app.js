let words
let pos
let choices
let choiceNum
let canvas

function setup() {
  canvas = createCanvas(2464, 1146)
  words = []
  choices = ["Hello,", "I'm", "Amy!", "A Designer", "A Photographer", "and", "A Maker!"]
  choiceNum = 0
  pos = createVector(100, 100)

  canvas.parent('canvas-container');
}

// function windowResized() {
//   canvas();
// }

function draw() {
  background("#111111")

  words.forEach(w => {
    w.draw()
  })
}

function mouseClicked() {
  let choice = choices[choiceNum]

  let w = new Word(mouseX, mouseY, choice)
  words.push(w)

  choiceNum = choiceNum + 1
  if (choiceNum > choices.length - 1) {
    choiceNum = 0
  }
}

function keyTyped() {
  let w = new Word(pos.x, pos.y, key)
  words.push(w)

  pos.x = pos.x + 50
  if (pos.x > windowWidth - 100) {
    pos.x = 100
  }
  pos.y = pos.y + 24
  if (pos.y > windowHeight - 100) {
    pos.y = 100
  }
}