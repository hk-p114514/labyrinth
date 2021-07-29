"use strict";

import { Maze } from "../class/Maze";
import { MazeRenderer } from "../class/MazeRenderer";
import { Player } from "../class/Player";
import { canvas, game, mapData } from "../main";
import { clearCanvas } from "./clearCanvas";
import { clearStage } from "./clearStage";

const startGame = (player: Player, maze: Maze, data: number[][]) => {
  canvas.style.animationDuration = `${game.animationDuration}s`;
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
      clearStage();
      data = maze.render();
      player = new Player(1, 1, data);
    }
  });
};

export { startGame };
