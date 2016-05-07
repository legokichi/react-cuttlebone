import CanvasRenderView from "./CanvasRenderView";
export default class SurfaceView extends CanvasRenderView {
    change(surfaceId: number): void;
    change(surfaceAlias: string): void;
    change(id: number | string): void;
    on(event: string, callback: Function): EventEmitter2;
    on(event: "mouse", handler: (event: any) => any): EventEmitter2;
}
