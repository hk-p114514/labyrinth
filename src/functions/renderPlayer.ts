"use strict";

import { Player } from "../class/Player";
import { blockSize, ctx, game, goalColor, playerColor } from "../main";
import { clearCanvas } from "./clearCanvas";

const renderPlayer = (player: Player, data: number[][]) => {
  clearCanvas();
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (ctx) {
        //   contextのnullチェック
        if (data[row][col] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
        }
        if (row === player.getX && col === player.getY) {
          ctx.fillStyle = playerColor;
          ctx.fillRect(row * blockSize, col * blockSize, blockSize, blockSize);
        }

        if (col === game.goalX && row === game.goalY && !game.clear) {
          ctx.fillStyle = goalColor;
          ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
        }
      }
    }
  }
};

export { renderPlayer };
