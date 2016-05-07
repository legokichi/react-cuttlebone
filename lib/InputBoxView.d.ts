import CanvasRenderView from "./CanvasRenderView";
export default class InputBoxView extends CanvasRenderView {
    on(event: "input", handler: (event: BalloonInputEvent) => void): EventEmitter2;
    on(event: string, callback: Function): EventEmitter2;
}
