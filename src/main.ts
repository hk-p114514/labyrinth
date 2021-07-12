"use strict";
import { Maze } from "./class/Maze";
import { MazeRenderer } from "./class/MazeRenderer";
import { Player } from "./class/Player";

// 変数定義
const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const row: number = 21;
const col: number = 21;
const blockSize: number = 15;
const maze = new Maze(row, col, new MazeRenderer(canvas, blockSize, row, col));

// 迷路を描画し、迷路自身を取得する
const data: number[][] = maze.render();

const player = new Player(2, 2, canvas, blockSize, data);

document.addEventListener("keydown", (e: KeyboardEvent) => {
  const key = e.key;
  switch (key) {
    case "ArrowUp":
      player.controlY(-1);
      break;

    case "ArrowDown":
      player.controlY(1);
      break;

    case "ArrowLeft":
      player.controlX(-1);
      break;

    case "ArrowRight":
      player.controlX(1);
      break;
  }
});
