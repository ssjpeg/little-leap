class Player {
  constructor() {
    this.r = 30;
    this.x = this.r;
    this.y = this.r;
    this.vy = 0;
    this.gravity = 0.7;
  }

  jump() {
    this.elev = height - this.y - this.r
    if (this.elev == 0 || 0.5) {
      this.vy = -10;
    }
  }
  
  hits(obs) {
    return collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h)
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, 305)
  }

  show() {
    image(defaultImg, this.x, this.y)
    if (this.vy < -5 ){
      image(jumpImg, this.x, this.y)
    } else {
      image(defaultImg, this.x, this.y)
    }
    
  }
  hide(){
    this.x = -100
    this.y = -100
  }
}