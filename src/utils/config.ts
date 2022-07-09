import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "",
  transparent: true,
  backgroundColor: "#ff9e9e",
  render: {
    antialias: true,
    antialiasGL: true,
    mipmapFilter: "LINEAR_MIPMAP_NEAREST",
    transparent: true,
    maxTextures: -1,
    premultipliedAlpha: true,
    clearBeforeRender: true,
  },

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  dom: {
    createContainer: true,
  },
  plugins: {
    scene: [],
    global: [],
  },
};

export default config;
