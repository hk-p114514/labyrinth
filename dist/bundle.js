/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/class/Maze.ts":
      /*!***************************!*\
  !*** ./src/class/Maze.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.Maze = void 0;\nvar rand_1 = __webpack_require__(/*! ../functions/rand */ "./src/functions/rand.ts");\nvar Maze = /** @class */ (function () {\n    function Maze(row, col, renderer) {\n        var _this = this;\n        this.getData = function () {\n            var data = [];\n            // 二次元配列を初期化する\n            for (var row = 0; row < _this.maxRow; row++) {\n                data[row] = [];\n                for (var col = 0; col < _this.maxCol; col++) {\n                    data[row][col] = 1;\n                }\n            }\n            // 中だけ空白にする\n            for (var row = 1; row < _this.maxRow - 1; row++) {\n                for (var col = 1; col < _this.maxCol - 1; col++) {\n                    data[row][col] = 0;\n                }\n            }\n            // 格子状に棒を立てる\n            for (var row = 2; row < _this.maxRow - 2; row += 2) {\n                for (var col = 2; col < _this.maxCol - 2; col += 2) {\n                    data[row][col] = 1;\n                }\n            }\n            // ランダムに棒を倒す\n            for (var row = 2; row < _this.maxRow - 2; row += 2) {\n                for (var col = 2; col < _this.maxCol - 2; col += 2) {\n                    var destRow = 0, destCol = 0;\n                    do {\n                        // 条件式 ? 式1 : 式2 (条件式がtrueのとき式1を返す)\n                        var dir = row === 2 ? rand_1.rand(0, 3) : rand_1.rand(1, 3);\n                        switch (dir) {\n                            case 0: // up\n                                destRow = row - 1;\n                                destCol = col;\n                                break;\n                            case 1: // down\n                                destRow = row + 1;\n                                destCol = col;\n                                break;\n                            case 2: // left\n                                destRow = row;\n                                destCol = col - 1;\n                                break;\n                            case 3: // right\n                                destRow = row;\n                                destCol = col + 1;\n                                break;\n                        }\n                    } while (data[destRow][destCol] === 1);\n                    data[destRow][destCol] = 1;\n                }\n            }\n            return data;\n        };\n        this.render = function () {\n            _this.renderer.render(_this.data);\n            return _this.data;\n        };\n        this.maxRow = row;\n        this.maxCol = col;\n        this.data = this.getData();\n        this.renderer = renderer;\n        if (this.maxRow < 5 || this.maxCol < 5 || this.maxRow % 2 === 0) {\n            alert("Size is valid");\n            return;\n        }\n    }\n    return Maze;\n}());\nexports.Maze = Maze;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/Maze.ts?'
        );

        /***/
      },

    /***/ "./src/class/MazeRenderer.ts":
      /*!***********************************!*\
  !*** ./src/class/MazeRenderer.ts ***!
  \***********************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.MazeRenderer = void 0;\nvar MazeRenderer = /** @class */ (function () {\n    function MazeRenderer(canvas, wallSize, row, col) {\n        var _this = this;\n        this.render = function (data) {\n            console.log("Render!");\n            var wallSize = _this.wallSize;\n            for (var row = 0; row < data.length; row++) {\n                for (var col = 0; col < data[row].length; col++) {\n                    if (_this.ctx && data[row][col] === 1) {\n                        _this.ctx.fillRect(col * wallSize, row * wallSize, wallSize, wallSize);\n                    }\n                }\n            }\n        };\n        this.canvas = canvas;\n        this.ctx = canvas.getContext("2d");\n        this.wallSize = wallSize;\n        canvas.height = row * this.wallSize;\n        canvas.width = col * this.wallSize;\n    }\n    return MazeRenderer;\n}());\nexports.MazeRenderer = MazeRenderer;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/MazeRenderer.ts?'
        );

        /***/
      },

    /***/ "./src/class/Player.ts":
      /*!*****************************!*\
  !*** ./src/class/Player.ts ***!
  \*****************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.Player = void 0;\nvar checkMove_1 = __webpack_require__(/*! ../functions/checkMove */ "./src/functions/checkMove.ts");\nvar main_1 = __webpack_require__(/*! ../main */ "./src/main.ts");\nvar Player = /** @class */ (function () {\n    function Player(startX, startY, canvas, playerSize, data) {\n        var _this = this;\n        this.draw = function (x, y) {\n            if (_this.ctx) {\n                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);\n                _this.ctx.fillStyle = "#000000";\n                main_1.maze.render();\n                _this.ctx.fillStyle = "#ff0000";\n                _this.ctx.fillRect(x, y, _this.playerSize, _this.playerSize);\n            }\n        };\n        this.controlX = function (move) {\n            if (checkMove_1.checkMove(_this.x + move, _this.y, _this.data)) {\n                _this.x += move;\n            }\n            _this.draw(_this.x * _this.playerSize, _this.y * _this.playerSize);\n        };\n        this.controlY = function (move) {\n            if (checkMove_1.checkMove(_this.x, _this.y + move, _this.data)) {\n                _this.y += move;\n            }\n            _this.draw(_this.x * _this.playerSize, _this.y * _this.playerSize);\n        };\n        this.canvas = canvas;\n        this.ctx = canvas.getContext("2d");\n        this.playerSize = playerSize;\n        this.data = data;\n        this.x = startX * this.playerSize;\n        this.y = startY * this.playerSize;\n    }\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/Player.ts?'
        );

        /***/
      },

    /***/ "./src/functions/checkMove.ts":
      /*!************************************!*\
  !*** ./src/functions/checkMove.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.checkMove = void 0;\nvar checkMove = function (movedX, movedY, data) {\n    var isAbleToMove = false;\n    // 進む先が壁だったら進まない\n    if (data[movedX][movedY] === 0) {\n        isAbleToMove = true;\n    }\n    else {\n        console.log("\\u30C0\\u30E1\\u3060\\u304A\\n x: " + movedX + " y: " + movedY + " is wall");\n    }\n    return isAbleToMove;\n};\nexports.checkMove = checkMove;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/checkMove.ts?'
        );

        /***/
      },

    /***/ "./src/functions/rand.ts":
      /*!*******************************!*\
  !*** ./src/functions/rand.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.rand = void 0;\nvar rand = function (min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nexports.rand = rand;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/rand.ts?'
        );

        /***/
      },

    /***/ "./src/main.ts":
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.maze = void 0;\nvar Maze_1 = __webpack_require__(/*! ./class/Maze */ "./src/class/Maze.ts");\nvar MazeRenderer_1 = __webpack_require__(/*! ./class/MazeRenderer */ "./src/class/MazeRenderer.ts");\nvar Player_1 = __webpack_require__(/*! ./class/Player */ "./src/class/Player.ts");\n// 変数定義\nvar canvas = document.getElementById("canvas");\nvar row = 21;\nvar col = 21;\nvar blockSize = 15;\nvar maze = new Maze_1.Maze(row, col, new MazeRenderer_1.MazeRenderer(canvas, blockSize, row, col));\nexports.maze = maze;\n// 迷路を描画し、迷路自身を取得する\nvar data = maze.render();\nvar player = new Player_1.Player(1, 1, canvas, blockSize, data);\ndocument.addEventListener("keydown", function (e) {\n    var key = e.key;\n    switch (key) {\n        case "ArrowUp":\n            player.controlY(-1);\n            break;\n        case "ArrowDown":\n            player.controlY(1);\n            break;\n        case "ArrowLeft":\n            player.controlX(-1);\n            break;\n        case "ArrowRight":\n            player.controlX(1);\n            break;\n    }\n});\n\n\n//# sourceURL=webpack://labyrinth/./src/main.ts?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/main.ts");
  /******/
  /******/
})();
