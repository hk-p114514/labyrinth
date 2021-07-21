"use strict";
import { Maze } from "./class/Maze";
import { MazeRenderer } from "./class/MazeRenderer";
import { Player } from "./class/Player";
import { startGame } from "./functions/startGame";

// 変数定義

// - Canvasの取得
const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// - ゲーム内定数の定義
let row: number = 21;
let col: number = 21;
const blockSize: number = 20;
const rateOfIncrease: number = 10;
const playerColor: string = "red";
const goalColor: string = "green";

// - システム変数の定義
const game = {
  clear: false,
  time: 0,
  goalX: row - 2,
  goalY: col - 2,
};

let maze = new Maze(row, col, new MazeRenderer(canvas, blockSize, row, col));

// - 迷路を描画し、迷路自身を取得する
let data: number[][] = maze.render();

let player = new Player(1, 1, data);

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (!game.clear) {
    player.move(event);
    console.log(`is not clear : ${game.clear}`);
  } else {
    console.log(`CLEAR! : ${game.clear}`);
    game.clear = false;
    maze = new Maze(row, col, new MazeRenderer(canvas, blockSize, row, col));
    player = new Player(1, 1, data);
    if (ctx) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    data = maze.render();
  }
});
export { canvas, ctx, playerColor, goalColor, game, blockSize };
