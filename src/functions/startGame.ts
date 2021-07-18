"use strict";

import { Maze } from "../class/Maze";
import { MazeRenderer } from "../class/MazeRenderer";
import { Player } from "../class/Player";
import { game } from "../main";

const startGame = (
  row: number,
  col: number,
  canvas: HTMLCanvasElement,
  blockSize: number,
  rateOfIncrease: number
) => {
  // - 迷路の作成
  const maze = new Maze(
    row,
    col,
    new MazeRenderer(canvas, blockSize, row, col)
  );

  // - 迷路を描画し、迷路自身を取得する
  const data: number[][] = maze.render();

  const player = new Player(1, 1, data);
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (!game.clear) {
      player.move(event);
      console.log(game.clear);
    } else {
      console.log(game.clear);
      startGame(
        (row += rateOfIncrease),
        (col += rateOfIncrease),
        canvas,
        blockSize,
        rateOfIncrease
      );
    }
  });
};

export { startGame };
