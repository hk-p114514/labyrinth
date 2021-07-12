"use strict";

import { Player } from "../class/Player";

const checkMove = (
  player: Player,
  move: number,
  data: number[][],
  direction: string
): boolean => {
  return true;
  const x = player.x;
  const y = player.y;
  let check: boolean = false;
  if (direction === "x") {
    if (data[x + move][y] === 0) {
      check = true;
    } else {
      check = false;
    }
  } else if (direction === "y") {
    if (data[x][y + move] === 0) {
      check = true;
    } else {
      check = false;
    }
  }

  return check;
};

export { checkMove };
