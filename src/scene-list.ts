export const SCENE_LIST = {
  START: {
    key: "Start",
    src: async () => (await import("./scenes/Start")).default,
  },
};
