import SceneMainMenu from './sceneMainMenu';
import SceneMain from './sceneMain';
import SceneGameOver from './sceneGameOver';

// configuration properties for the Phaser game instance
let config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
}

export const game = new Phaser.Game(config);
