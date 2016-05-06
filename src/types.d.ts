interface View {
  public element: HTMLElement;
  public render(): void;
  public destructor(): void;
  public on?(event: string, callback: (event: any)=> any): any;
}

class LayerView implements View {
  public parentView: View;
  public positionX: "left-outside" | "left-inside" | "right-inside" | "right-outside";
  public positionY: "top-outside" | "top-inside" | "bottom-inside" | "bottom-outside";
  public offsetX: number;
  public offsetY: number;
  public width: number;
  public height: number;
}
class LayerSetView implements View {
  private layers: LayerView[];
  public foreground(id: number): void;
}

class CanvasRender {
  canvas: HTMLCanvasElement;
}

class DesktopView extends LayerSetView {
  ghosts: GhostView[];
  contextmenu: ContextMenuView;
}
class GhostView extends LayerSetView {
  scopes: ScopeView[];
  inputBox: InputBoxView[];
  communicationBox: InputBoxView[];
  on("active", handler: (event: any)=> any): any;
}
class ScopeView extends LayerSetView {
  surface: SurfaceView[];
  balloon: BalloonView[];
  on("active", handler: (event: any)=> any): any;
}

class SufaceView extends CanvasRender, LayerView {
  change(surfaceId: number): void;
  change(surfaceAlias: string): void;
  on("mouse", handler: (event: any)=> any): any;
}
class BalloonView extends CanvasRender, LayerView {
  textfield: HTMLElement;
  scroll(number): void;
  on("select", handler: (event: any)=> any): any;
}

class ContextMenuView extends CanvasRender, LayerView {
  menuItems: MenuItem[];
  on("select", handler: (event: any)=> any): any;
}
class InputBoxView extends CanvasRender, LayerView {
  on("input", handler: (event:any)=> any): any;
}

