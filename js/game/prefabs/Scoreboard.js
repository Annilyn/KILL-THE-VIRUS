var Scoreboard = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
Scoreboard.prototype.show = function(score,kill){
    //declare local variables
    var bmd, background, gameoverText, scoreText, highScoreText, newHighScoreText, starText, killText;

    //bitmapdata is like a canvass where we can draw or write on them
    //in this game we use game.width and game.height to show our bitmapdata full screen
    bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#000'; //black color
    bmd.ctx.fillRect(0,0, this.game.width, this.game.height); //draw rectangle

    background = this.game.add.sprite(0,0, bmd);
    background.alpha = 0.5; //opacity

    this.add(background); // our scoreboard

    var isNewHighScore = false;
    var highscore = localStorage.getItem('highscore');
    if (!highscore || highscore < score) {
        isNewHighScore = true;
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
    this.y = this.game.height; //starting position of scoreboard at the bottom of the screen

    gameoverText =  this.game.add.bitmapText(0, 100, 'minecraftia', 'You Died.', 36);
    gameoverText.x = this.game.width/2 - (gameoverText.textWidth/ 2);
    this.add(gameoverText);

    scoreText = this.game.add.bitmapText(0, 200, 'minecraftia', 'Your Score: ' + score, 24);
    scoreText.x = this.game.width / 2 - (scoreText.textWidth/ 2);
    this.add(scoreText);

    killText = this.game.add.bitmapText(0, 250, 'minecraftia', 'Your Kill: ' + kill, 24); // add and update kill
    killText.x = this.game.width / 2 - (killText.textWidth/ 2);
    this.add(killText);

    highScoreText = this.game.add.bitmapText(0, 300, 'minecraftia', 'Your High Score: ' + highscore, 24);
    highScoreText.x = this.game.width / 2 - (highScoreText.textWidth/ 2);
    this.add(highScoreText);

    starText = this.game.add.bitmapText(0, 350, 'minecraftia', 'Tap to play again!', 16);
    starText.x = this.game.width / 2 - (highScoreText.textWidth/ 4);
    this.add(starText);

    if (isNewHighScore) {
        newHighScoreText = this.game.add.bitmapText(0, 100, 'minecraftia', 'New High Score!', 12);
        newHighScoreText.tint = 0x4ebef7; //'#4ebef7'
        newHighScoreText.x = gameoverText.x + gameoverText.textWidth + 40;
        newHighScoreText.angle = 45;
        this.add(newHighScoreText);
    }
    this.game.add.tween(this).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);

    //restart the game
    this.game.input.onDown.addOnce(this.restart, this);
};
Scoreboard.prototype.restart = function(){
    this.game.state.start('Game', true, false);
};