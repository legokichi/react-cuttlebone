"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasRenderView_1 = require("./CanvasRenderView");
var BalloonView = (function (_super) {
    __extends(BalloonView, _super);
    function BalloonView() {
        _super.apply(this, arguments);
    }
    BalloonView.prototype.scroll = function (x) { };
    return BalloonView;
}(CanvasRenderView_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BalloonView;
