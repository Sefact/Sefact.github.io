import Phaser from "phaser";

const GAME_EVENT = {
  LOADED: "LOADED",
  GAME_MOUNTED: "GAME_MOUNTED",
  GAME_UNMOUNTED: "GAME_UNMOUNTED",
};

export interface GameInterface extends EventTarget {
  create(): void;

  destroy(): void;
}

export class Game extends EventTarget implements GameInterface {
  constructor(w: number, h: number) {
    super();
  }

  create(): void {}

  destroy(): void {}
}

let game: Game | undefined;

export function createGameInstance(w: number, h: number) {
  if (!game) game = new Game(w, h);
  return game;
}
