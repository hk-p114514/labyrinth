"use strict";

import { Player } from "../class/Player";
import { game } from "../main";

const checkClear = (player: Player, data: number[][]) => {
  const x: number = player.getX;
  const y: number = player.getY;

  if (x === data[0].length - 2 && y === data.length - 2) {
    game.clear = true;
  } else {
    console.log(`clearX : ${data[0].length - 2}, clearY : ${data.length - 2}`);
  }
};

export { checkClear };
