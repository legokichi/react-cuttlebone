import * as React from "react";
import LayerSetView from "./LayerSetView";
import InputBoxView from "./InputBoxView";
import ScopeView from "./ScopeView";

export default class GhostView extends LayerSetView {
  private scopes: ScopeView[];
  private inputBox: InputBoxView[];
  private communicationBox: InputBoxView[];
  public on(event: string, callback: Function): EventEmitter2;
  public on(event: "active", handler: (event: any)=> any): EventEmitter2;
}
