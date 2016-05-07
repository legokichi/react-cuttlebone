import * as React from "react";
import CanvasRenderView from "./CanvasRenderView";

export default class InputBoxView extends CanvasRenderView {
  public on(event: "input", handler: (event: BalloonInputEvent)=> void): EventEmitter2;
  public on(event: string, callback: Function): EventEmitter2;
}