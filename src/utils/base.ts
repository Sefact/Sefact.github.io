import { GameInterface, CanvasSizeInterface } from './game';

export class GameBase extends EventTarget implements GameInterface {
    private readonly _parentContainer: string;
    private _canvasSize: CanvasSizeInterface;

    constructor(size: CanvasSizeInterface, containerId: string) {
        super();
        this._parentContainer = containerId;
        this._canvasSize = size;
    }

    create(): void {
    }

    destroy(): void {
    }

    resize(): void {
    }

    get canvasSize(): CanvasSizeInterface {
        return this._canvasSize;
    }

    set canvasSize(value: CanvasSizeInterface) {
        this._canvasSize = value;
    }

    get parentContainer(): string {
        return this._parentContainer;
    }
}