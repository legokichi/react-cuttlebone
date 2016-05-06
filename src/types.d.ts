class View {
  public element: HTMLElement;
  public destructor(): void;
  public on(event: string, callback: (event: any)=> any): any;
}

class LayerView extends View {
  private layerStack: this[];
  public raise(): void;
  public lower(): void;
}

class NamedView extends View {
  private namedies: NamedLayerView[];
}

class NamedLayerView extends LayerView {
  public id: number; // このゴーストのプロセス番号
  private scopes: {[number]: ScopeLayerView;}; // このゴースト配下のキャラクター一覧
  private scopeLayerStack: ScopeLayerView[]; // このゴースト配下のキャラクターのレイヤのスタック状態
  private currentScope: ScopeLayerView; // 現在のキャラクター
}

class ScopeLayerView extends LayerView {
  // \p[]キャラクター一体分の情報を保持する
  
  private surface: SurfaceView; // このキャラクターのサーフェスビュー
  private blimp: BlimpView; // このキャラクターのバルーンビュー

  public id: number; // このキャラクターのスコープ番号
  public type: "sakura" | "kero"; // スコープ種別

  // internal methods
  private changeSurface(surfaceId: number): Surface;
  private changeBalloon(balloonId: number): Balloon;

  // cuttlebone API compatible
  public surface(): Surface; // 現在のサーフェスビューを返す
  public surface(surfaceId: number): Surface; // サーフェスビューを変更する
  public surface(surfaceAlias: string): Surface; // サーフェスビューを変更する
  public blimp(): Blimp; // 現在のバルーンビューを返す
  public blimp(blimpId: number): Blimp; // バルーンビューを変更する
}
