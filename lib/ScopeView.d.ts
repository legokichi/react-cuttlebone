import LayerSetView from "./LayerSetView";
import SurfaceView from "./SurfaceView";
import BalloonView from "./BalloonView";
export default class ScopeView extends LayerSetView {
    private currentSurface;
    private currentBalloon;
    scopeId: number;
    type: "sakura" | "kero";
    surface(surfaceId?: number | string): SurfaceView;
    blimp(blimpId?: number): BalloonView;
    position(pos?: {
        right: number;
        bottom: number;
    }): {
        right: number;
        bottom: number;
    };
    on(event: string, callback: Function): EventEmitter2;
    on(event: "active", handler: (event: any) => any): EventEmitter2;
}
