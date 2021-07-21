"use strict";
import { Maze } from "./class/Maze";
import { MazeRenderer } from "./class/MazeRenderer";
import { Player } from "./class/Player";
import { clearCanvas } from "./functions/clearCanvas";
import { renderPlayer } from "./functions/renderPlayer";
import { startGame } from "./functions/startGame";

// 変数定義

// - Canvasの取得
const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
// - ゲーム内定数の定義
const mapData = {
  row: 21,
  col: 21,
  blockSize: 20,
  rateOfIncrease: 6,
  playerColor: "red",
  goalColor: "green",
};
// - システム変数の定義
const game = {
  clear: false,
  time: 0,
  goalX: mapData.row - 2,
  goalY: mapData.col - 2,
};

let maze = new Maze(
  mapData.row,
  mapData.col,
  new MazeRenderer(canvas, mapData.blockSize, mapData.row, mapData.col)
);

// - 迷路を描画し、迷路自身を取得する
let data: number[][] = maze.render();

let player = new Player(1, 1, data);

alert("ARE YOU READY?");
startGame(player, maze, data);

export { canvas, ctx, game, mapData };
