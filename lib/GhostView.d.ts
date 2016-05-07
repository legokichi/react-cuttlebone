import LayerSetView from "./LayerSetView";
export default class GhostView extends LayerSetView {
    private scopes;
    private inputBox;
    private communicationBox;
    on(event: string, callback: Function): EventEmitter2;
    on(event: "active", handler: (event: any) => any): EventEmitter2;
}
