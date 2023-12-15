import { PI2 } from "./util";

export class Light {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 1;
    this.radius = 10;
  }

  update() {
    this.y += this.vy;

    return this;
  }

  draw(ctx) {
    ctx.save();

    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0.0, "#BB9");
    g.addColorStop(0.2, "#AA8");
    g.addColorStop(0.7, "#330");
    g.addColorStop(0.9, "#110");
    g.addColorStop(1, "#000");
    ctx.fillStyle = g;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2);
    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }
}
