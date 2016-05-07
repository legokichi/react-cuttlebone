import * as React from "react";
import LayerSetView from "./LayerSetView";
import ContextMenuView from "./ContextMenuView";
import GhostView from "./GhostView";

export default class DesktopView extends LayerSetView {
  private ghosts: GhostView[];
  private contextmenu: ContextMenuView;
  
  public on(event: string, callback: Function): EventEmitter2;
}
