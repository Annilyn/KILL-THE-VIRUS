var Vaccine = function(game, x, y, key, frame){ //the same parameters as sprite does
    key = 'vaccines';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.3);
    this.anchor.setTo(0.3);

    //this.animations.add('spin'); // name this animation as 'spin', see preload.js

    this.game.physics.arcade.enableBody(this); //enable physics
    this.body.allowGravity = false; //not allow vaccines to fall

    this.checkWorldBounds = true; //Phaser will check if vaccines is inside the gameworld or not
    this.onOutOfBoundsKill = true; //hide or kill the vaccine when it goes off screen

    this.events.onKilled.add(this.onKilled, this); //see function below
    this.events.onRevived.add(this.onRevived, this); //see function below
};
//standard javascript inheritance
Vaccine.prototype = Object.create(Phaser.Sprite.prototype);
Vaccine.prototype.constructor = Vaccine;

Vaccine.prototype.onRevived = function(){
    this.body.velocity.x = -300; //horizontal speed of the vaccine
    //this.animations.play('spin', 10, true); //spin animation at 10fps
};

Vaccine.prototype.onKilled = function(){
    this.animations.frame = 0; //the vaccine will face the screen when it spin
};
