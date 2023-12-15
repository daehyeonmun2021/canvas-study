import { PI2, ranInt } from "./util";

export class SnowFlake {
  constructor(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.init();
  }

  init() {
    this.radius = ranInt(1, 3);
    this.x = ranInt(this.radius, this.stageWidth - this.radius);
    this.y = ranInt(-500, -100);
    this.vx = ranInt(-1, 1);
    this.vy = ranInt(1, 4);
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    const isOutOfStageX =
      this.x - this.radius > this.stageWidth || //
      this.x + this.radius < 0;
    const isOutOfStageY = this.y - this.radius > this.stageHeight;
    if (isOutOfStageX || isOutOfStageY) {
      this.init();
    }

    return this;
  }

  draw(ctx) {
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0, "rgba(255, 255, 255, 1)");
    g.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = g;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2);
    ctx.fill();
    ctx.closePath();
  }
}
