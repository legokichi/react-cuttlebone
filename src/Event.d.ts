
interface SurfaceMouseEvent {
  type: "mousedown" | "mousemove" | "mouseup" | "mouseclick" | "mousedblclick";
  transparency: boolean; // true
  button: number; // マウスのボタン。 https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/button
  offsetX: number; // canvas左上からのx座標
  offsetY: number; // canvas左上からのy座標
  region: string; // collisionの名前,"Bust","Head","Face"など
  scopeId: number; // このサーフェスのスコープ番号
  wheel: number; // mousewheel実装したら使われるかも
  event: UIEvent // 生のDOMイベント。 https://developer.mozilla.org/ja/docs/Web/API/UIEvent
}

interface BalloonMouseEvent {
  type: "click" | "dblclikck" | "mousemove" | "mouseup" | "mousedown";
  scopeId: number; // \p[n]
  balloonId: number; // \b[n]
}

interface BalloonInputEvent {
  type: "userinput" | "communicateinput";
  id: string;
  content: string;
}

interface BalloonSelectEvent {
  type: "anchorselect" | "choiceselect";
  id: string;
  text: string;
  args: string[];
}

interface FileDropEvent {
  type: "filedrop";
  scopeId: number;
  event: UIEvent;
}


interface ContextMenuEvent {
  type: string;
  scopeId: number;
  event: UIEvent;
}