var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'');

game.state.add('Boot', KillVirus.Boot);
game.state.add('Preloader', KillVirus.Preload);
game.state.add('MainMenu', KillVirus.MainMenu);
game.state.add('Game', KillVirus.Game);

game.state.start('Boot');