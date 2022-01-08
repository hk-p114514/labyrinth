/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/Maze.ts":
/*!***************************!*\
  !*** ./src/class/Maze.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Maze = void 0;\nvar rand_1 = __webpack_require__(/*! ../functions/rand */ \"./src/functions/rand.ts\");\nvar Maze = /** @class */ (function () {\n    function Maze(row, col, renderer) {\n        var _this = this;\n        this.getData = function () {\n            var data = [];\n            // 二次元配列を初期化する\n            for (var row = 0; row < _this.maxRow; row++) {\n                data[row] = [];\n                for (var col = 0; col < _this.maxCol; col++) {\n                    data[row][col] = 1;\n                }\n            }\n            // 中だけ空白にする\n            for (var row = 1; row < _this.maxRow - 1; row++) {\n                for (var col = 1; col < _this.maxCol - 1; col++) {\n                    data[row][col] = 0;\n                }\n            }\n            // 格子状に棒を立てる\n            for (var row = 2; row < _this.maxRow - 2; row += 2) {\n                for (var col = 2; col < _this.maxCol - 2; col += 2) {\n                    data[row][col] = 1;\n                }\n            }\n            // ランダムに棒を倒す\n            for (var row = 2; row < _this.maxRow - 2; row += 2) {\n                for (var col = 2; col < _this.maxCol - 2; col += 2) {\n                    var destRow = 0, destCol = 0;\n                    do {\n                        // 条件式 ? 式1 : 式2 (条件式がtrueのとき式1を返す)\n                        var dir = row === 2 ? rand_1.rand(0, 3) : rand_1.rand(1, 3);\n                        switch (dir) {\n                            case 0: // up\n                                destRow = row - 1;\n                                destCol = col;\n                                break;\n                            case 1: // down\n                                destRow = row + 1;\n                                destCol = col;\n                                break;\n                            case 2: // left\n                                destRow = row;\n                                destCol = col - 1;\n                                break;\n                            case 3: // right\n                                destRow = row;\n                                destCol = col + 1;\n                                break;\n                        }\n                    } while (data[destRow][destCol] === 1);\n                    data[destRow][destCol] = 1;\n                }\n            }\n            return data;\n        };\n        this.render = function () {\n            _this.renderer.render(_this.data);\n            return _this.data;\n        };\n        this.maxRow = row;\n        this.maxCol = col;\n        this.data = this.getData();\n        this.renderer = renderer;\n        if (this.maxRow < 5 || this.maxCol < 5 || this.maxRow % 2 === 0) {\n            alert(\"Size is valid\");\n            return;\n        }\n    }\n    return Maze;\n}());\nexports.Maze = Maze;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/Maze.ts?");

/***/ }),

/***/ "./src/class/MazeRenderer.ts":
/*!***********************************!*\
  !*** ./src/class/MazeRenderer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MazeRenderer = void 0;\nvar MazeRenderer = /** @class */ (function () {\n    function MazeRenderer(canvas, wallSize, row, col) {\n        var _this = this;\n        this.render = function (data) {\n            var wallSize = _this.wallSize;\n            for (var row = 0; row < data.length; row++) {\n                for (var col = 0; col < data[row].length; col++) {\n                    if (_this.ctx) {\n                        if (data[row][col] === 1) {\n                            _this.ctx.fillStyle = \"black\";\n                            _this.ctx.fillRect(col * wallSize, row * wallSize, wallSize, wallSize);\n                        }\n                    }\n                }\n            }\n        };\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.wallSize = wallSize;\n        canvas.height = row * this.wallSize;\n        canvas.width = col * this.wallSize;\n    }\n    return MazeRenderer;\n}());\nexports.MazeRenderer = MazeRenderer;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/MazeRenderer.ts?");

/***/ }),

/***/ "./src/class/Player.ts":
/*!*****************************!*\
  !*** ./src/class/Player.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nvar checkClear_1 = __webpack_require__(/*! ../functions/checkClear */ \"./src/functions/checkClear.ts\");\nvar checkMove_1 = __webpack_require__(/*! ../functions/checkMove */ \"./src/functions/checkMove.ts\");\nvar renderPlayer_1 = __webpack_require__(/*! ../functions/renderPlayer */ \"./src/functions/renderPlayer.ts\");\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar Player = /** @class */ (function () {\n    function Player(x, y, data) {\n        var _this = this;\n        this.move = function (e) {\n            if (!main_1.game.clear) {\n                var key = e.key;\n                if (key === \"ArrowUp\") {\n                    if (checkMove_1.checkMove(_this.x, _this.y - 1, _this.data)) {\n                        _this.y -= 1;\n                    }\n                }\n                if (key === \"ArrowDown\") {\n                    if (checkMove_1.checkMove(_this.x, _this.y + 1, _this.data)) {\n                        _this.y += 1;\n                    }\n                }\n                if (key === \"ArrowRight\") {\n                    if (checkMove_1.checkMove(_this.x + 1, _this.y, _this.data)) {\n                        _this.x += 1;\n                    }\n                }\n                if (key === \"ArrowLeft\") {\n                    if (checkMove_1.checkMove(_this.x - 1, _this.y, _this.data)) {\n                        _this.x -= 1;\n                    }\n                }\n            }\n            // this.logPlayerPoint(this);\n            renderPlayer_1.renderPlayer(_this, _this.data);\n            checkClear_1.checkClear(_this, _this.data);\n        };\n        this.logPlayerPoint = function (player) {\n            console.log(\"x : \" + player.getX + \", y : \" + player.getY);\n        };\n        this.x = x;\n        this.y = y;\n        this.data = data;\n        renderPlayer_1.renderPlayer(this, this.data);\n    }\n    Object.defineProperty(Player.prototype, \"getX\", {\n        get: function () {\n            return this.x;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Player.prototype, \"getY\", {\n        get: function () {\n            return this.y;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://labyrinth/./src/class/Player.ts?");

/***/ }),

/***/ "./src/functions/checkClear.ts":
/*!*************************************!*\
  !*** ./src/functions/checkClear.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkClear = void 0;\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar checkClear = function (player, data) {\n    var x = player.getX;\n    var y = player.getY;\n    if (x === data[0].length - 2 && y === data.length - 2) {\n        main_1.game.clear = true;\n    }\n    else {\n        // console.log(`clearX : ${data[0].length - 2}, clearY : ${data.length - 2}`);\n    }\n};\nexports.checkClear = checkClear;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/checkClear.ts?");

/***/ }),

/***/ "./src/functions/checkMove.ts":
/*!************************************!*\
  !*** ./src/functions/checkMove.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkMove = void 0;\nvar checkMove = function (movedX, movedY, data) {\n    var isAbleToMove = false;\n    // 進む先が壁だったら進まない\n    if (movedX <= 0 ||\n        movedY <= 0 ||\n        movedX >= data[0].length - 1 ||\n        movedY >= data.length - 1 ||\n        data[movedY][movedX]) {\n    }\n    else {\n        isAbleToMove = true;\n    }\n    return isAbleToMove;\n};\nexports.checkMove = checkMove;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/checkMove.ts?");

/***/ }),

/***/ "./src/functions/clearCanvas.ts":
/*!**************************************!*\
  !*** ./src/functions/clearCanvas.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clearCanvas = void 0;\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar clearCanvas = function () {\n    if (main_1.ctx) {\n        main_1.ctx.clearRect(0, 0, main_1.canvas.width, main_1.canvas.height);\n    }\n};\nexports.clearCanvas = clearCanvas;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/clearCanvas.ts?");

/***/ }),

/***/ "./src/functions/clearStage.ts":
/*!*************************************!*\
  !*** ./src/functions/clearStage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clearStage = void 0;\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar rewriteTitle_1 = __webpack_require__(/*! ./rewriteTitle */ \"./src/functions/rewriteTitle.ts\");\nvar clearStage = function () {\n    console.log(\"STAGE_\" + main_1.game.time + \" CLEAR\");\n    console.log(main_1.canvas.style.animationDuration);\n    main_1.game.time++;\n    // タイトルをステージ番号にする\n    rewriteTitle_1.rewriteTitle(main_1.game.time);\n    // 回転スピードを少しずつ優しくする\n    main_1.game.animationDuration += main_1.game.durationAdd;\n    main_1.canvas.style.animationDuration = main_1.game.animationDuration + \"s\";\n    console.log(\"added : \" + main_1.canvas.style.animationDuration);\n};\nexports.clearStage = clearStage;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/clearStage.ts?");

/***/ }),

/***/ "./src/functions/rand.ts":
/*!*******************************!*\
  !*** ./src/functions/rand.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rand = void 0;\nvar rand = function (min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nexports.rand = rand;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/rand.ts?");

/***/ }),

/***/ "./src/functions/renderPlayer.ts":
/*!***************************************!*\
  !*** ./src/functions/renderPlayer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderPlayer = void 0;\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar clearCanvas_1 = __webpack_require__(/*! ./clearCanvas */ \"./src/functions/clearCanvas.ts\");\nvar renderPlayer = function (player, data) {\n    clearCanvas_1.clearCanvas();\n    for (var row = 0; row < data.length; row++) {\n        for (var col = 0; col < data[row].length; col++) {\n            if (main_1.ctx) {\n                //   contextのnullチェック\n                if (data[row][col] === 1) {\n                    main_1.ctx.fillStyle = \"black\";\n                    main_1.ctx.fillRect(col * main_1.mapData.blockSize, row * main_1.mapData.blockSize, main_1.mapData.blockSize, main_1.mapData.blockSize);\n                }\n                if (row === player.getX && col === player.getY) {\n                    main_1.ctx.fillStyle = main_1.mapData.playerColor;\n                    main_1.ctx.fillRect(row * main_1.mapData.blockSize, col * main_1.mapData.blockSize, main_1.mapData.blockSize, main_1.mapData.blockSize);\n                }\n                var goalX = main_1.mapData.col - 2, goalY = main_1.mapData.row - 2;\n                if (col === goalX && row === goalY && !main_1.game.clear) {\n                    main_1.ctx.fillStyle = main_1.mapData.goalColor;\n                    main_1.ctx.fillRect(col * main_1.mapData.blockSize, row * main_1.mapData.blockSize, main_1.mapData.blockSize, main_1.mapData.blockSize);\n                }\n            }\n        }\n    }\n};\nexports.renderPlayer = renderPlayer;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/renderPlayer.ts?");

/***/ }),

/***/ "./src/functions/rewriteTitle.ts":
/*!***************************************!*\
  !*** ./src/functions/rewriteTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rewriteTitle = void 0;\nvar rewriteTitle = function (time) {\n    document.title = \"Labyrinth_\" + time;\n};\nexports.rewriteTitle = rewriteTitle;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/rewriteTitle.ts?");

/***/ }),

/***/ "./src/functions/startGame.ts":
/*!************************************!*\
  !*** ./src/functions/startGame.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startGame = void 0;\nvar Maze_1 = __webpack_require__(/*! ../class/Maze */ \"./src/class/Maze.ts\");\nvar MazeRenderer_1 = __webpack_require__(/*! ../class/MazeRenderer */ \"./src/class/MazeRenderer.ts\");\nvar Player_1 = __webpack_require__(/*! ../class/Player */ \"./src/class/Player.ts\");\nvar main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nvar clearCanvas_1 = __webpack_require__(/*! ./clearCanvas */ \"./src/functions/clearCanvas.ts\");\nvar clearStage_1 = __webpack_require__(/*! ./clearStage */ \"./src/functions/clearStage.ts\");\nvar startGame = function (player, maze, data) {\n    main_1.canvas.style.animationDuration = main_1.game.animationDuration + \"s\";\n    document.addEventListener(\"keydown\", function (event) {\n        if (!main_1.game.clear) {\n            player.move(event);\n        }\n        else {\n            console.log(\"CLEAR! : \" + main_1.game.clear);\n            main_1.game.clear = false;\n            main_1.mapData.row += main_1.mapData.rateOfIncrease;\n            main_1.mapData.col += main_1.mapData.rateOfIncrease;\n            maze = new Maze_1.Maze(main_1.mapData.row, main_1.mapData.col, new MazeRenderer_1.MazeRenderer(main_1.canvas, main_1.mapData.blockSize, main_1.mapData.row, main_1.mapData.col));\n            clearCanvas_1.clearCanvas();\n            clearStage_1.clearStage();\n            data = maze.render();\n            player = new Player_1.Player(1, 1, data);\n        }\n    });\n};\nexports.startGame = startGame;\n\n\n//# sourceURL=webpack://labyrinth/./src/functions/startGame.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mapData = exports.game = exports.ctx = exports.canvas = void 0;\nvar Maze_1 = __webpack_require__(/*! ./class/Maze */ \"./src/class/Maze.ts\");\nvar MazeRenderer_1 = __webpack_require__(/*! ./class/MazeRenderer */ \"./src/class/MazeRenderer.ts\");\nvar Player_1 = __webpack_require__(/*! ./class/Player */ \"./src/class/Player.ts\");\nvar startGame_1 = __webpack_require__(/*! ./functions/startGame */ \"./src/functions/startGame.ts\");\n// 変数定義\n// - Canvasの取得\nvar canvas = document.getElementById(\"canvas\");\nexports.canvas = canvas;\nvar ctx = canvas.getContext(\"2d\");\nexports.ctx = ctx;\n// - ゲーム内定数の定義\nvar mapData = {\n    row: 21,\n    col: 21,\n    blockSize: 20,\n    rateOfIncrease: 6,\n    playerColor: \"red\",\n    goalColor: \"green\",\n};\nexports.mapData = mapData;\n// - システム変数の定義\nvar game = {\n    time: 1,\n    clear: false,\n    goalX: mapData.row - 2,\n    goalY: mapData.col - 2,\n    animationDuration: 5,\n    durationAdd: 0.5,\n};\nexports.game = game;\nvar maze = new Maze_1.Maze(mapData.row, mapData.col, new MazeRenderer_1.MazeRenderer(canvas, mapData.blockSize, mapData.row, mapData.col));\n// - 迷路を描画し、迷路自身を取得する\nvar data = maze.render();\nvar player = new Player_1.Player(1, 1, data);\nalert(\"ARE YOU READY?\");\nstartGame_1.startGame(player, maze, data);\n\n\n//# sourceURL=webpack://labyrinth/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;