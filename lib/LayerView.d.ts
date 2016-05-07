import View from "./View";
export default class LayerView extends View {
    parentView: View;
    positionX: "left-outside" | "left-inside" | "right-inside" | "right-outside";
    positionY: "top-outside" | "top-inside" | "bottom-inside" | "bottom-outside";
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
}
