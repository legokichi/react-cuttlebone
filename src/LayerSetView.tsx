import * as React from "react";
import View from "./View";
import LayerView from "./LayerView";

export default class LayerSetView extends View {
  private layers: LayerView[];
  
  public foreground(id: number): void;
}