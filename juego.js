class juego {
  constructor() {
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 375);


    this.enemi = [];
    for (let i=0; i<5; i++) {
      this.enemi[i] = new enemigo(535, 250+i*40);
    }
  }

  dibujar() {
    this.tocado();
    this.timer++;
    
    if (this.timer >= 60) {
     this.timerSeg++;
      this.timer = 0;
    }
   
    text("tiempo: "+this.timerSeg, 0, 10);
    

    this.personaje.dibujar();
    for (let i=0; i<5; i++) {
      this.enemi[i].dibujarEnemigo();
    }
    this.tocado();
    if(this.timerSeg==20){
      this.historia.estado=3; 
    }
  }

  colision(ex, ey, eal, ean, px, py, pan, pal) {
    return px > ex-ean/2 && py-pal/2>ey-eal && py+pal/2<ey+eal;
  }

  tocado() {
    for (let i=0; i<5; i++) {
      if (this.colision(this.enemi[i].posX, this.enemi[i].posY, 30, 30, this.personaje.posX, this.personaje.posY, 20, 20)&& this.enemi[i].vida) {
        this.enemi[i].posX=width+30;
      }
    }
  }


  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
