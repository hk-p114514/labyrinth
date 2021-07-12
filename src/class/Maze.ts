"use strict";

import { rand } from "../functions/rand";
import { MazeRenderer } from "./MazeRenderer";

class Maze {
  data: number[][];
  maxRow: number;
  maxCol: number;
  renderer: MazeRenderer;

  constructor(row: number, col: number, renderer: MazeRenderer) {
    this.maxRow = row;
    this.maxCol = col;
    this.data = this.getData();
    this.renderer = renderer;

    if (this.maxRow < 5 || this.maxCol < 5 || this.maxRow % 2 === 0) {
      alert("Size is valid");
      return;
    }
  }
  getData = (): number[][] => {
    let data: number[][] = [];

    // 二次元配列を初期化する
    for (let row = 0; row < this.maxRow; row++) {
      data[row] = [];
      for (let col = 0; col < this.maxCol; col++) {
        data[row][col] = 1;
      }
    }

    // 中だけ空白にする
    for (let row = 1; row < this.maxRow - 1; row++) {
      for (let col = 1; col < this.maxCol - 1; col++) {
        data[row][col] = 0;
      }
    }

    // 格子状に棒を立てる
    for (let row = 2; row < this.maxRow - 2; row += 2) {
      for (let col = 2; col < this.maxCol - 2; col += 2) {
        data[row][col] = 1;
      }
    }

    // ランダムに棒を倒す
    for (let row = 2; row < this.maxRow - 2; row += 2) {
      for (let col = 2; col < this.maxCol - 2; col += 2) {
        let destRow: number = 0,
          destCol: number = 0;

        do {
          // 条件式 ? 式1 : 式2 (条件式がtrueのとき式1を返す)
          const dir: number = row === 2 ? rand(0, 3) : rand(1, 3);
          switch (dir) {
            case 0: // up
              destRow = row - 1;
              destCol = col;
              break;
            case 1: // down
              destRow = row + 1;
              destCol = col;
              break;
            case 2: // left
              destRow = row;
              destCol = col - 1;
              break;
            case 3: // right
              destRow = row;
              destCol = col + 1;
              break;
          }
        } while (data[destRow][destCol] === 1);

        data[destRow][destCol] = 1;
      }
    }

    return data;
  };

  render = (): number[][] => {
    this.renderer.render(this.data);

    return this.data;
  };
}

export { Maze };
