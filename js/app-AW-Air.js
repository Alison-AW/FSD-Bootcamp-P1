let words
let pos
let choices
let choiceNum

function setup() {
  createCanvas(1200, windowHeight)
  words = []
  choices = ["Hello,", "I'm", "Amy", "A Designer", "A Photographer", "and", "A Maker!"]
  choiceNum = 0
  pos = createVector(100, 100)
}

function draw() {
  background("#000000")

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
}