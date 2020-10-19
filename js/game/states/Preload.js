KillVirus.Preload = function(){
    this.ready = false;
};

KillVirus.Preload.prototype = {
    preload: function(){

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 107, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('background', 'assets/images/background.png');
        this.load.image('foreground', 'assets/images/foreground.png');
        this.load.image('bullet', 'assets/images/bullet.png');
       

        this.load.spritesheet('vaccines', 'assets/images/vaccines-ps.png', 170,200, 1);
        this.load.spritesheet('player', 'assets/images/army-ps.png', 229, 296, 4);
        this.load.spritesheet('virus', 'assets/images/viruss-ps.png', 361, 218,  1);

        this.load.audio('gameMusic', ['assets/audio/backgroundmusic.mp3', 'assets/audio/backgroundmusic.ogg']);
        //this.load.audio('rocket', 'assets/audio/rocket.wav');
        this.load.audio('vaccine', 'assets/audio/vaccine.wav');
        this.load.audio('death', 'assets/audio/death.wav');
        this.load.audio('shot', 'assets/audio/shot.wav');

        this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function(){
        this.preloadBar.cropEnabled = false;
    },
    update: function(){
        if (this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
            this.state.start('MainMenu');
        }
    },
    onLoadComplete: function(){
        this.ready = true;
    }
};
