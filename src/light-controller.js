import { Light } from "./light";

export class LightController {
  constructor() {
    this.lights = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  onDown(e) {
    this.lights.push(new Light(e.clientX, e.clientY));
  }

  update() {
    for (let i = this.lights.length - 1; i >= 0; i--) {
      const light = this.lights[i];
      if (light.y - light.radius > this.stageHeight) {
        this.lights.splice(i, 1);
      }
    }
  }

  draw(ctx) {
    this.update();

    for (let i = 0; i < this.lights.length; i++) {
      this.lights[i]
        .update() //
        .draw(ctx);
    }
  }
}
