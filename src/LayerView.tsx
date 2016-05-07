import * as React from "react";
import View from "./View";

export default class LayerView extends View {
  public parentView: View;
  public positionX: "left-outside" | "left-inside" | "right-inside" | "right-outside";
  public positionY: "top-outside" | "top-inside" | "bottom-inside" | "bottom-outside";
  public offsetX: number;
  public offsetY: number;
  public width: number;
  public height: number;
}
