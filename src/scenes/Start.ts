import { LayoutGame } from "@/libs/LayoutGame";
import GameConfig from "@/constants";

class Start extends LayoutGame {
  private width: number = 0;
  private height: number = 0;
  private container: Phaser.GameObjects.Container | undefined;
  private object: Phaser.GameObjects.Sprite | undefined;

  constructor() {
    super({
      key: "Start",
    });
  }
  preload() {
    super.preload();
  }

  init(data: any): void {
    super.preload();
    this.width = this.sys.canvas.width;
    this.height = this.sys.canvas.height;
  }
  create(): void {
    super.create();
    this.initGame();
  }
  initGame(): void {
    this.container = this.add.container(0, 0);
    const bg = this.add.sprite(
      0,
      0,
      GameConfig.ATLAS_LIST.CITY_SCENE.key,
      "background"
    );
    this.object = this.add
      .sprite(
        0,
        400,
        GameConfig.ATLAS_LIST.CITY_SCENE.key,
        "capguy/walk/0001.png"
      )
      .setScale(0.5, 0.5);

    const setWalkAnimation = this.anims.generateFrameNames(
      GameConfig.ATLAS_LIST.CITY_SCENE.key,
      {
        start: 1,
        end: 8,
        zeroPad: 4,
        prefix: "capguy/walk/",
        suffix: ".png",
      }
    );

    if (this.container) {
      // this.container.add(bg);
      // this.container.add(guy);
      this.anims.create({
        key: "walk",
        frames: setWalkAnimation,
        frameRate: 10,
        repeat: -1,
      });
      this.object.anims.play("walk");
      console.log("obj: ", this.object);
    }
  }

  update(time: number, delta: number): void {
    if (this.object) {
      this.object.x += delta / 8;
      if (this.object.x > 800) {
        this.object.x = -50;
      }
    }
  }
}

export default Start;
