function LoadImages() {
    game.load.image("background", "./assets/simba_bg.jpg"); 
    // game.load.image("star", "./assets/star.png");
    game.load.image("star", "./assets/chicken_leg.png");
    game.load.atlas('simba', './assets/simba.gif', './assets/simba.json');
    game.load.atlas('hyena', './assets/hyena.png', './assets/hyena.json');
    game.load.atlas('platform', './assets/platforms.png', './assets/platforms.json');
}