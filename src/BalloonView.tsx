import * as React from "react";
import CanvasRenderView from "./CanvasRenderView";

export default class BalloonView extends CanvasRenderView {
  private textfield: HTMLElement;
  
  public scroll(x: number): void {}
  public on(event: "select", callback: Function): any;
  public on(event: string, callback: Function): any;
}
