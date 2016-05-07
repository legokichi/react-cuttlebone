import * as React from "react";
import LayerSetView from "./LayerSetView";
import SurfaceView from "./SurfaceView";
import BalloonView from "./BalloonView";

export default class ScopeView extends LayerSetView {
  private currentSurface: SurfaceView[];
  private currentBalloon: BalloonView[];
  public scopeId: number;
  public type: "sakura" | "kero";
  
  public surface(surfaceId?: number|string): SurfaceView;
  public blimp(blimpId?: number): BalloonView;
  public position(pos?:{right: number, bottom: number}): {right: number, bottom: number};
  public on(event: string, callback: Function): EventEmitter2;
  public on(event: "active", handler: (event: any)=> any): EventEmitter2;
}

