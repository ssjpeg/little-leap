 class Obstacle {
 
  constructor() {
    this.h = 30 * random(2, 4)
    this.w = 20 * random(2, 5)
    this.x = 700
    this.y = height - this.h
  }
  
  move(speed) {
    this.x -= speed
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h)
  }
  hidden() {
    rect(0, 0, 0, 0)
  }
}