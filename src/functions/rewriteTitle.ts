"use strict";

const rewriteTitle = (time: number): void => {
  document.title = `Labyrinth_${time}`;
};

export { rewriteTitle };
