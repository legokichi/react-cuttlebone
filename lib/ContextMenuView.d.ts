import CanvasRenderView from "./CanvasRenderView";
export default class ContextMenuView extends CanvasRenderView {
    private menuItems;
    on(event: "contextmenu", handler: (event: ContextMenuEvent) => void): EventEmitter2;
    on(event: string, callback: Function): EventEmitter2;
}
