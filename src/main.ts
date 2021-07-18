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

startGame(row, col, canvas, blockSize, rateOfIncrease);
export { canvas, ctx, playerColor, goalColor, game, blockSize };
