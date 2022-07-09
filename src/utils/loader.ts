import Phaser from "phaser";
import { GameBase } from "@/utils/base";
import { CanvasSizeInterface } from "@/utils/game";
import config from "@/utils/config";
import utils from "@/utils/utils";
import { SCENE_LIST } from "@/scene-list";

export class Loader extends GameBase {
  private game?: Phaser.Game;
  private contentContainer?: Phaser.GameObjects.Container;
  private size;
  constructor(size: CanvasSizeInterface, containerId: string) {
    super(size, containerId);
    this.size = size;
  }

  create(): void {
    this.game = new Phaser.Game(
      Object.assign(config, {
        width: this.size.width,
        height: this.size.height,
        parent: this.parentContainer,
        scene: {
          preload: this.gamePreload.bind(this),
          create: this.gameCreated.bind(this),
        },
      })
    );
  }

  destroy(): void {
    this.game?.destroy(true);
  }

  resize(): void {
    super.resize();
  }

  gamePreload(): void {
    if (this.game) {
      const scene = this.game.scene.getAt(0);
      if (scene) {
        // scene.load.multiatlas(ATLAS_LIST.COMMON_0.key, ATLAS_LIST.COMMON_0.src, 'assets/sprite');
      }
    }
  }

  getScene(): Phaser.Scene {
    if (!this.game) throw new Error("Get scene error");
    return <Phaser.Scene>this.game.scene.getAt(0);
  }

  gameCreated(): void {
    const scene = this.getScene();
    this.contentContainer = scene.add.container(0, 0);
    this.resize();
    this.gameStart().then((r) => () => {
      console.log("create game");
    });
  }

  async gameStart(): Promise<void> {
    const scene = this.getScene();
    if (this.contentContainer) this.contentContainer.removeAll(true);
    if (scene) {
      utils.startScene(
        scene,
        SCENE_LIST.START.key,
        await SCENE_LIST.START.src(),
        Object.assign({}, { game: this })
      );
    }
  }
}
