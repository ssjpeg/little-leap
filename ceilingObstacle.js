class ceilingObstacle {
 
  constructor() {
    this.h = 30 * random(2, 6)
    this.w = 20 * random(2, 4)
    this.x = width
    this.y = 0
  }
  
  move(speed) {
    this.x -= speed
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}