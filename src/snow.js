import { SnowFlake } from "./snow-flake";
import { array1D } from "./util";

export class Snow {
  constructor(stageWidth, stageHeight) {
    this.totalFlakes = 200;
    this.snowFlakes = array1D(this.totalFlakes) //
      .map(() => new SnowFlake(stageWidth, stageHeight));
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalFlakes; i++) {
      this.snowFlakes[i].resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalFlakes; i++) {
      this.snowFlakes[i]
        .update() //
        .draw(ctx);
    }
  }
}
