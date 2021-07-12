"use strict";

import { checkMove } from "../functions/checkMove";

class Player {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D | null;
  playerSize: number;
  data: number[][];
  constructor(
    startX: number,
    startY: number,
    canvas: HTMLCanvasElement,
    playerSize: number,
    data: number[][]
  ) {
    this.x = startX;
    this.y = startY;
    this.ctx = canvas.getContext("2d");
    this.playerSize = playerSize;
    this.data = data;
  }

  draw = (x: number, y: number) => {
    if (this.ctx) {
      console.log("MOVE");
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillRect(x, y, this.playerSize, this.playerSize);
    }
  };

  controlX = (move: number) => {
    if (checkMove(this, move, this.data, "x")) {
      this.x += move;
    }
    this.draw(this.x, this.y);
  };

  controlY = (move: number) => {
    if (checkMove(this, move, this.data, "y")) {
      this.y += move;
    }
    this.draw(this.x, this.y);
  };
}

export { Player };
