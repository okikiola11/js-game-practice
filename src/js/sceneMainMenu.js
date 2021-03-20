class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" })
  }

  preload() {
    this.load.image("sprBtnPlay", "../src/assets/images/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "../src/assets/images/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "../src/assets/images/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "../src/assets/images/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "../src/assets/images/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "../src/assets/images/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "../src/assets/images/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "../src/assets/images/sndBtnDown.wav");
  }

  create() {
    this.scene.start("SceneMain");
  }
}

export default SceneMainMenu;