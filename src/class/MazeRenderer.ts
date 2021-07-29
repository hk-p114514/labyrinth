class MazeRenderer {
  ctx: CanvasRenderingContext2D | null;
  wallSize: number;
  canvas;
  constructor(
    canvas: HTMLCanvasElement,
    wallSize: number,
    row: number,
    col: number
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.wallSize = wallSize;
    canvas.height = row * this.wallSize;
    canvas.width = col * this.wallSize;
  }

  render = (data: number[][]) => {
    const wallSize = this.wallSize;

    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        if (this.ctx) {
          if (data[row][col] === 1) {
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(
              col * wallSize,
              row * wallSize,
              wallSize,
              wallSize
            );
          }
        }
      }
    }
  };
}

export { MazeRenderer };
