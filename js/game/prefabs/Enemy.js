var Enemy = function(game, x, y, key, frame){ 
    key = 'virus';
    Phaser.Sprite.call(this, game, x, y, key, frame);
    this.scale.setTo(0.2);
    this.anchor.setTo(0.2);
    this.game.physics.arcade.enableBody(this); 
    this.body.allowGravity = false;
    this.checkWorldBounds = true;
    this.onOutOfBoundsKill = true;
    this.events.onRevived.add(this.onRevived, this);};
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.onRevived = function(){
    this.game.add.tween(this).to({y: this.y - 150}, 700, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
    this.body.velocity.x = -500;
 
};
