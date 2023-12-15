import { LightController } from "./light-controller";
import { Snow } from "./snow";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.dpr = window.devicePixelRatio || 1;

    this.snow = new Snow(this.stageWidth, this.stageHeight);
    this.lightController = new LightController();

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    window.addEventListener(
      "pointerdown",
      this.lightController.onDown.bind(this.lightController)
    );

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.dpr;
    this.canvas.height = this.stageHeight * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.snow.resize(this.stageWidth, this.stageHeight);
    this.lightController.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.snow.draw(this.ctx);
    this.lightController.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
};
