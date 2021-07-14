"use strict";

import { checkMove } from "../functions/checkMove";
import { maze } from "../main";
import { Maze } from "./Maze";

class Player {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D | null;
  playerSize: number;
  data: number[][];
  canvas: HTMLCanvasElement;
  constructor(
    startX: number,
    startY: number,
    canvas: HTMLCanvasElement,
    playerSize: number,
    data: number[][]
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.playerSize = playerSize;
    this.data = data;
    this.x = startX * this.playerSize;
    this.y = startY * this.playerSize;
  }

  draw = (x: number, y: number) => {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "#000000";
      maze.render();
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillRect(x, y, this.playerSize, this.playerSize);
    }
  };

  controlX = (move: number) => {
    if (checkMove(this.x + move, this.y, this.data)) {
      this.x += move * this.playerSize;
    }
    this.draw(this.x, this.y);
    console.log(`x : ${this.x} y : ${this.y}`);
  };

  controlY = (move: number) => {
    if (checkMove(this.x, this.y + move, this.data)) {
      this.y += move * this.playerSize;
    }
    this.draw(this.x, this.y);
  };
}

export { Player };
