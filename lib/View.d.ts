export default class View extends EventEmitter2 {
    element: HTMLElement;
    render(): void;
    destructor(): void;
}
