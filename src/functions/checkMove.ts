"use strict";

const checkMove = (
  movedX: number,
  movedY: number,
  data: number[][]
): boolean => {
  let isAbleToMove: boolean = false;
  // 進む先が壁だったら進まない
  if (
    movedX <= 0 ||
    movedY <= 0 ||
    movedX >= data[0].length - 1 ||
    movedY >= data.length - 1 ||
    data[movedY][movedX]
  ) {
  } else {
    isAbleToMove = true;
  }

  return isAbleToMove;
};

export { checkMove };
