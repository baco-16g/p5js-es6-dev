import P5 from "p5";
import ParticleSystem from "./ParticleSystem";

const sketch = (p) => {

  var system;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    system = new ParticleSystem();

    //パーティクルの数
    var num = 500;

    for(var i = 0; i < num; i++) {
      var l = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));

      system.addParticle(p, l);
    }
  }

  p.draw = function() {
    p.background(255);

    system.run();
  }
}

new P5(sketch);