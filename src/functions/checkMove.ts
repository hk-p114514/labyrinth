"use strict";
const checkMove = (
  movedX: number,
  movedY: number,
  data: number[][]
): boolean => {
  let isAbleToMove: boolean = false;
  // 進む先が壁だったら進まない
  if (data[movedX][movedY]) {
    isAbleToMove = true;
  } else {
    console.log("ダメだお");
  }

  return isAbleToMove;
};

export { checkMove };
