import * as React from "react";
import CanvasRenderView from "./CanvasRenderView";

export default class SurfaceView extends CanvasRenderView {
  public change(surfaceId: number): void;
  public change(surfaceAlias: string): void;
  public change(id: number|string): void;
  public on(event: string, callback: Function): EventEmitter2;
  public on(event: "mouse", handler: (event: any)=> any): EventEmitter2;
}
