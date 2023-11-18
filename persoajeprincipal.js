class personaje {
  constructor(posX,posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorpersonaje = color(255, 0, 0);
    this.vida  = 1;
   
  }

  dibujar() {
  
    push();
    rectMode(CENTER);
    fill(this.colorpersonaje);
    rect(this.posX, this.posY, 20, 20);
    pop();
 
  }

  teclaPresionada(keyCode) {
    if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverAbajo() {
    this.posY += 10;
    if (this.posY > height) {
      this.posY = height/2-25;
    } //if(this.posY
  }

  moverArriba() {
    this.posY -= 10;
    if (this.posY<height/2) {
      this.posY = height+25;
    }
  }
 
  
}
