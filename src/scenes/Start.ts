import { LayoutGame } from "@/libs/LayoutGame";

class Start extends LayoutGame {
  private width: number = 0;
  private height: number = 0;
  private container: Phaser.GameObjects.Container | undefined;

  constructor() {
    super({
      key: "Start",
    });
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
    const bg = this.add
      .graphics()
      .fillStyle(0x000000, 1)
      .fillRect(0, 0, this.width, this.height);
    if (this.container) {
      this.container.add(bg);
    }
  }
}

export default Start;
