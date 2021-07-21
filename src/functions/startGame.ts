"use strict";

import { Maze } from "../class/Maze";
import { MazeRenderer } from "../class/MazeRenderer";
import { Player } from "../class/Player";
import { canvas, game, mapData } from "../main";
import { checkCanvasHeight } from "./checkCanvasHeight";
import { clearCanvas } from "./clearCanvas";

const startGame = (player: Player, maze: Maze, data: number[][]) => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (!game.clear) {
      player.move(event);
    } else {
      console.log(`CLEAR! : ${game.clear}`);
      game.clear = false;
      mapData.row += mapData.rateOfIncrease;
      mapData.col += mapData.rateOfIncrease;
      maze = new Maze(
        mapData.row,
        mapData.col,
        new MazeRenderer(canvas, mapData.blockSize, mapData.row, mapData.col)
      );
      clearCanvas();
      data = maze.render();
      player = new Player(1, 1, data);
    }
  });
};

export { startGame };
