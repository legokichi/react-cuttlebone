"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LayerSetView_1 = require("./LayerSetView");
var GhostView = (function (_super) {
    __extends(GhostView, _super);
    function GhostView() {
        _super.apply(this, arguments);
    }
    return GhostView;
}(LayerSetView_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GhostView;
