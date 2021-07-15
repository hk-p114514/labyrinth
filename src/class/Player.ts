"use strict";

class Player {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move = () => {
    // キーが押された時
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "ArrowUp") {
      }

      if (key === "ArrowDown") {
      }

      if (key === "ArrowRight") {
      }

      if (key === "ArrowLeft") {
      }
    });
  };
}
