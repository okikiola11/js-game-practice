import Entity from './entities';
//import GunShip from './gunShip';

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
  
    // declare the speed that the player shd move
    this.setData('speed', 200);
    // play the player animation
    this.play('sprPlayer');
  }

  // the movement functions
  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }
  
  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }
  
  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  // call the movement func inside this function
  update() {
    // every game update the player’s velocity will be set to zero
    this.body.setVelocity(0, 0);

    // ensures that the player cannot move off screen
    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  }
}

class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy1", "ChaserShip");
    
    // sets the y velocity of the enemy to be a random integer between 50 and 100
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy2", "CarrierShip");
    this.play("sprEnemy2");
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default Player;