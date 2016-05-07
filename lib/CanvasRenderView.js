"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LayerView_1 = require("./LayerView");
var CanvasRenderView = (function (_super) {
    __extends(CanvasRenderView, _super);
    function CanvasRenderView() {
        _super.apply(this, arguments);
    }
    return CanvasRenderView;
}(LayerView_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CanvasRenderView;
