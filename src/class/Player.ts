"use strict";

import { checkClear } from "../functions/checkClear";
import { checkMove } from "../functions/checkMove";
import { renderPlayer } from "../functions/renderPlayer";
import { startGame } from "../functions/startGame";
import { game } from "../main";

class Player {
  public x: number;
  public y: number;
  public data: number[][];
  constructor(x: number, y: number, data: number[][]) {
    this.x = x;
    this.y = y;
    this.data = data;
    renderPlayer(this, this.data);
  }

  public get getX(): number {
    return this.x;
  }
  public get getY(): number {
    return this.y;
  }

  public move = (e: KeyboardEvent) => {
    if (!game.clear) {
      const key = e.key;

      if (key === "ArrowUp") {
        if (checkMove(this.x, this.y - 1, this.data)) {
          this.y -= 1;
        }
      }

      if (key === "ArrowDown") {
        if (checkMove(this.x, this.y + 1, this.data)) {
          this.y += 1;
        }
      }

      if (key === "ArrowRight") {
        if (checkMove(this.x + 1, this.y, this.data)) {
          this.x += 1;
        }
      }

      if (key === "ArrowLeft") {
        if (checkMove(this.x - 1, this.y, this.data)) {
          this.x -= 1;
        }
      }
    }

    // this.logPlayerPoint(this);
    renderPlayer(this, this.data);
    checkClear(this, this.data);
  };

  logPlayerPoint = (player: Player) => {
    console.log(`x : ${player.getX}, y : ${player.getY}`);
  };
}

export { Player };
