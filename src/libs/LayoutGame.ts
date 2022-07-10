import GameConfig from "@/constants";

export class LayoutGame extends Phaser.Scene {
  constructor(v: any) {
    if (v) super(v);
    else
      super({
        key: "LayoutGame",
      });
  }

  init(data: any): void {
    // init
  }

  preload(): void {
    // this.load.multiatlas();
    this.load.multiatlas(
      GameConfig.ATLAS_LIST.CITY_SCENE.key,
      GameConfig.ATLAS_LIST.CITY_SCENE.src,
      "/assets"
    );
  }

  create(): void {}

  resize(): void {}

  update(time: number, delta: number): void {}
}
