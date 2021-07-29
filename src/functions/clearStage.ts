"use strict";
import { canvas, game } from "../main";
import { rewriteTitle } from "./rewriteTitle";

const clearStage = (): void => {
  console.log(`STAGE_${game.time} CLEAR`);
  console.log(canvas.style.animationDuration);
  game.time++;
  // タイトルをステージ番号にする
  rewriteTitle(game.time);

  // 回転スピードを少しずつ優しくする
  game.animationDuration += game.durationAdd;
  canvas.style.animationDuration = `${game.animationDuration}s`;
  console.log(`added : ${canvas.style.animationDuration}`);
};

export { clearStage };
