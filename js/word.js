let easing = function (t) { return t*t*t }

class Word {
  constructor(x, y, text) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI)

    this.position = createVector(x, y)
    this.speed = createVector(0, -10)
    this.speed = this.speed.rotate(randomAngle)
    this.acc = createVector(0, 0.5)

    this.friction = 0.99
    this.elastic = 0.8
    this.time = 0

    // this.size = size
    this.text = text
  }

  move() {
    this.speed = this.speed.add(this.acc)
    this.speed = this.speed.mult(this.friction)
    this.position = this.position.add(this.speed)


    if (this.position.y > 1099) (
      this.speed.y = this.speed.y * -1 * this.elastic
    )

    this.position.y = constrain(this.position.y, -1000, 1099)
    this.time = this.time + 0.005
  }

  draw() {
    this.move()
    
    let alpha = 242 - 242 * easing(this.time)

    fill(242, 242, 242, alpha)
    noStroke()
    textSize(98)
    textFont("Inconsolata")
    textAlign(CENTER, BASELINE)
    text(this.text, this.position.x, this.position.y)
  }
}