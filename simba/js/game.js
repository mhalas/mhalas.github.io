var game;
var scoreText;
var score;
var background;

function GameStart() {
    game  = new Phaser.Game(settings.cameraWidth, settings.cameraHeight, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render});
}

function InitializeGame() {
    game.world.setBounds(0, 0, settings.gameWidth, settings.gameHeight);
    background = game.add.tileSprite(0, 0, settings.gameWidth, 600, 'background');

    scoreText = game.add.text(settings.cameraWidth-200,50,'', { font: '32px Arial', fill: '#000' });
    scoreText.anchor.setTo(0, 0.5);
    scoreText.fixedToCamera = true;
}

function InitializeGameCamera() {
    game.camera.follow(simba);
}

function GameOver() {
    simba.kill();
    stateText.setText("GAME OVER!");
    stateText.visible = true;
}

function GameWon() {
    simba.kill();
    stateText.setText("You Won!\nScore: "+score+" + "+simbaLifes.total+" lifes = "+(simbaLifes.total*10+score));
    stateText.visible = true;
}

function updateScore() {
    scoreText.setText("Score: "+score);
}