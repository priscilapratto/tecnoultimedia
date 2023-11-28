class Principal {
  constructor() {
    this.estado = "inicio";
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);

    this.enemi = [];
    for (let i=0; i<7; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    this.tocaron = 0;

    //this.fondo = [];
    //this.carga();
  }
  dibujar() {
    if (this.estado == "inicio") {
      this.inicio();
    } else if (this.estado == "creditos") {
      this.creditos();
    } else if (this.estado == "pantalla1") {
      this.pantalla1();
    } else if (this.estado == "pantalla2") {
      this.pantalla2();
    } else if (this.estado == "pantalla3") {
      this.pantalla3();
    } else if (this.estado == "pantalla4") {
      this.pantalla4();
    } else if (this.estado == "prejuego") {
      this.prejuego();
    } else if (this.estado == "juego") {
      this.juego();
    } else if (this.estado == "ganaste") {
      this.pantallaBuena();
    } else if (this.estado == "perdiste") {
      this.pantallaMala();
    } else if (this.estado == "pantalla5") {
      this.pantalla5();
    } else if (this.estado == "pantalla6") {
      this.pantalla6();
    } else if (this.estado == "opcionA") {
      this.opcionA();
    } else if (this.estado == "opcionB") {
      this.opcionB();
    } else if (this.estado == "fin2") {
      this.fin2();
    } else if (this.estado == "pantalla7") {
      this.pantalla7();
    } else if (this.estado == "fin1") {
      this.fin1();
    }
  }

  inicio() {
    push();
    background(0);
    fill(255);
    textAlign(CENTER);
    text("inicio", 280, 230 );
    text("toca control para ir a los creditos", 350, 100 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  creditos() {
    push();
    background(0);
    fill(255);
    text("creditos", 280, 170 );
    text("toca control para volver", 350, 300 );
    pop();
    pop();
  }

  pantalla1() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla1", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }

  pantalla2() {
    push();
    background(0);
    fill(255);
    text("pantalla2", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }

  pantalla3() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla3", 280, 170 );
    text("toca shift para la opcionA", 100, 300 );
    text("toca control para la opcionB", 350, 300 );
    pop();
  }

  pantalla4() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla4", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  prejuego() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("prejuego", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  juego() {
    this.tocado();
    this.timer++;
    if (this.timer >= 60) {
      this.timerSeg++;
      this.timer = 0;
    }
    text("tiempo: "+this.timerSeg, 25, 10);

    this.personaje.dibujar();
    for (let i=0; i<5; i++) {
      this.enemi[i].dibujarEnemigo();
    }
    this.tocado();
    if (this.tocaron == 1) {
      this.estado = "perdiste";
    }

    if (this.timerSeg==20) {
      this.estado = "ganaste";
    }
  }
  pantallaBuena() { // estado 3
    push();
    background(0);
    //image(this.fondo [2], 0, 0, 500, 400);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("ganaste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.reinicio();
  }
  pantallaMala() { // estado 4
    push();
    background(0);
    //image(this.fondo [4], 0, 0, 500, 400);
    fill(5, 5, 5);
    textAlign(CENTER);
    textSize(20);
    text("perdiste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.reinicio();
  }

  pantalla5() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla5", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }

  pantalla6() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla6", 280, 170 );
    text("toca shift para la opcionA", 100, 300 );
    text("toca control para la opcionB", 350, 300 );
    pop();
  }
  opcionA() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("opcionA", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  opcionB() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("opcionB", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  fin2() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("fin2", 280, 170 );
    text("toca enter para volver al inicio", 350, 300 );
    pop();
  }
  pantalla7() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("pantalla7", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  fin1() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("fin1", 280, 170 );
    text("toca enter para volver al inicio", 350, 300 );
    pop();
  }
 colision(ex, ey, eal, ean, px, py, pan, pal) {
    return px > ex-ean/2 && py-pal/2>ey-eal && py+pal/2<ey+eal;
  }

  tocado() {
    for (let i=0; i<5; i++) {
      if (this.colision(this.enemi[i].posX, this.enemi[i].posY, 30, 30, this.personaje.posX, this.personaje.posY, 20, 20)&& this.enemi[i].vida) {
        this.enemi[i].posX=width+30;
        this.tocaron = 1;
      }
    }
  }

  reinicio() {
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);
    for (let i=0; i<5; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    this.tocaron = 0;
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);

    if (keyCode == ENTER && this.estado == "inicio") {
      this.estado = "pantalla1";
    } else if (keyCode == CONTROL && this.estado == "inicio") {
      this.estado = "creditos";
    } else if (keyCode == CONTROL && this.estado == "creditos") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "pantalla1") {
      this.estado = "pantalla2";
    } else if (keyCode == ENTER && this.estado == "pantalla2") {
      this.estado = "pantalla3";
    } else if (keyCode == SHIFT && this.estado == "pantalla3") {
      this.estado = "pantalla4";
    } else if (keyCode == CONTROL && this.estado == "pantalla3") {
      this.estado = "prejuego";
    } else if (keyCode == ENTER && this.estado == "prejuego") {
      this.estado = "juego";
    }else if (keyCode == ENTER && this.estado == "ganaste") {
      this.estado = "inicio";
    }else if (keyCode == ENTER && this.estado == "perder") {
      this.estado = "inicio";
    }else if (keyCode == ENTER && this.estado == "pantalla4") {
      this.estado = "pantalla5";
    } else if (keyCode == ENTER  && this.estado == "pantalla5") {
      this.estado = "pantalla6";
    } else if (keyCode == SHIFT && this.estado == "pantalla6") {
      this.estado = "opcionA";
    } else if (keyCode == CONTROL && this.estado == "pantalla6") {
      this.estado = "opcionB";
    } else if (keyCode == ENTER && this.estado == "opcionB") {
      this.estado = "fin2";
    } else if (keyCode == ENTER && this.estado == "fin2") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "opcionA") {
      this.estado = "pantalla7";
    } else if (keyCode == ENTER && this.estado == "pantalla7") {
      this.estado = "fin1";
    } else if (keyCode == ENTER && this.estado == "fin1") {
      this.estado = "inicio";
    }
  }
}
