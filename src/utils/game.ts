import { Loader } from "@/utils/loader";

const GAME_EVENT = {
  LOADED: "LOADED",
  GAME_MOUNTED: "GAME_MOUNTED",
  GAME_UNMOUNTED: "GAME_UNMOUNTED",
};

export interface GameInterface {
  create(): void;
  destroy(): void;
  resize(): void;
}

export interface CanvasSizeInterface {
  width: number;
  height: number;
}

export class Game implements GameInterface {
  private readonly parentContainer: string;
  private readonly canvasSize: CanvasSizeInterface;
  private contentObject?: GameInterface;

  constructor(w: number, h: number, containerId: string) {
    this.parentContainer = containerId;
    this.canvasSize = { width: w, height: h };
    this.create();
  }

  create(): void {}

  destroy(): void {
    if (this.contentObject) {
      this.contentObject.destroy();
      this.contentObject = undefined;
    }
  }

  resize(): void {}

  loadContent(): void {
    if (this.contentObject) {
      this.contentObject.destroy();
    }
    this.contentObject = new Loader(this.canvasSize, this.parentContainer);
    if (this.contentObject) this.contentObject.create();
  }
}

let game: Game | undefined;

export function createGameInstance(w: number, h: number, containerId: string) {
  if (!game) game = new Game(w, h, containerId);
  return game;
}
