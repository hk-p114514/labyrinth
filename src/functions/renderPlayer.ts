"use strict";

import { Player } from "../class/Player";
import { mapData, ctx, game } from "../main";
import { clearCanvas } from "./clearCanvas";

const renderPlayer = (player: Player, data: number[][]) => {
  clearCanvas();
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (ctx) {
        //   contextのnullチェック
        if (data[row][col] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(
            col * mapData.blockSize,
            row * mapData.blockSize,
            mapData.blockSize,
            mapData.blockSize
          );
        }
        if (row === player.getX && col === player.getY) {
          ctx.fillStyle = mapData.playerColor;
          ctx.fillRect(
            row * mapData.blockSize,
            col * mapData.blockSize,
            mapData.blockSize,
            mapData.blockSize
          );
        }

        const goalX = mapData.col - 2,
          goalY = mapData.row - 2;
        if (col === goalX && row === goalY && !game.clear) {
          ctx.fillStyle = mapData.goalColor;
          ctx.fillRect(
            col * mapData.blockSize,
            row * mapData.blockSize,
            mapData.blockSize,
            mapData.blockSize
          );
        }
      }
    }
  }
};

export { renderPlayer };
