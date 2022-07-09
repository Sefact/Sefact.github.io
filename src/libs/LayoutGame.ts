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
  }

  create(): void {}

  resize(): void {}

  update(): void {}
}
