const startScene = (
  game: Phaser.Scene,
  key: string,
  cls: any,
  param = {}
): void => {
  const sceneParam = Object.assign({}, param);
  try {
    if (game.scene && game.scene.getIndex) {
      if (game.scene.getIndex(key) > -1) {
        game.scene.start(key, sceneParam);
      } else {
        game.scene.add(key, new cls());
        game.scene.start(key, sceneParam);
      }
      if (game.scene.manager.getScenes().length > 0) {
        game.scene.manager.remove(game.scene.manager.getScenes()[0].scene.key);
      }
    }
  } catch (e) {
    console.error(e, key, cls, param);
  }
};

export default { startScene };
