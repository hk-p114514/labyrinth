"use strict";

import { canvas, ctx } from "../main";

const clearCanvas = (): void => {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

export { clearCanvas };
