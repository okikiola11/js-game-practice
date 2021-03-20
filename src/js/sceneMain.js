import Player from "./player";

class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" })
  }

  preload() {
    // load the image files
    // this.load.image(imageKey, path);
    this.load.image("sprBg0", "../src/assets/images/sprBg0.png");
    this.load.image("sprBg1", "../src/assets/images/sprBg1.png");
    this.load.spritesheet("sprExplosion", "../src/assets/images/sprExplosion.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("sprEnemy0", "../src/assets/images/sprEnemy0.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprEnemy1", "../src/assets/images/sprEnemy1.png");
    // add animation
    this.load.spritesheet("sprEnemy2", "../src/assets/images/sprEnemy2.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprLaserEnemy0", "../src/assets/images/sprLaserEnemy0.png");
    this.load.image("sprLaserPlayer", "../src/assets/images/sprLaserPlayer.png");
    this.load.spritesheet("sprPlayer", "../src/assets/images/sprPlayer.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    // add the loading code for our sounds
    this.load.audio("sndExplode0", "../src/assets/images/sndExplode0.wav");
    this.load.audio("sndExplode1", "../src/assets/images/sndExplode1.wav");
    this.load.audio("sndLaser", "../src/assets/images/sndLaser.wav");
  }

  create() {
    // inorder to create our animations
    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    // create sounds
    this.sfx = {
      explosions: [
        this.sound.add("sndExplode0"),
        this.sound.add("sndExplode1")
      ],
      laser: this.sound.add("sndLaser")
    };

    // an instance of the player function is created here
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprPlayer"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  }

  // add the movement checks
  update() {
    // runs the update code that will keep the player still
    this.player.update();

    // THESE if statements check if the corresponding key is down, 
    // if so, move the player in the appropriate direction
    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }
    
    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }
    
  }
}

export default SceneMain;