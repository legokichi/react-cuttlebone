import * as React from "react";
import CanvasRenderView from "./CanvasRenderView";

interface ContextMenuObject {
  callback: (key: string)=> void;
  items: {[key: string]: ContextMenuItem | ContextMenuSubGroup}
}
interface ContextMenuItem {
  name: string;
}
interface ContextMenuSubGroup {
  name: string;
  items: {[key: string]: ContextMenuItem | ContextMenuSubGroup};
}


export default class ContextMenuView extends CanvasRenderView { 
  private menuItems: ContextMenuObject[];
  
  public on(event: "contextmenu", handler: (event: ContextMenuEvent)=> void): EventEmitter2;
  public on(event: string, callback: Function): EventEmitter2;
}
