function InitializeCollisions() {
    game.physics.arcade.collide(simba, platforms);
    game.physics.arcade.collide(hyenas, platforms, HyenaPlatformCollideCallback, null, this);
    game.physics.arcade.overlap(simba, exitSigns, SimbaExitSignCollideCallback, null, this);
    game.physics.arcade.overlap(simba, stars, SimbaStarCollideCallback, null, this);
    game.physics.arcade.overlap(simba, hyenas, SimbaHyenasCollideCallback, null, this);
}

function SimbaHyenasCollideCallback(simba, hyena) {
    if(simba != undefined && hyena != undefined && isSimbaImmune == false) {
        SimbaHit();
    }
}

function SimbaStarCollideCallback(simba, star) {
    star.destroy();
    score += 10;
    updateScore();
}

function HyenaPlatformCollideCallback(hyena, platform) {
    if((platform.name == "start" && hyena.body.velocity.x < 0) || (platform.name == "end" && hyena.body.velocity.x > 0)) {
        hyena.body.velocity.x *= -1;
        hyena.scale.x *= -1;
    }
}

function SimbaExitSignCollideCallback(simba,es) {
    GameWon();
}

function TurnOffSimbaImmune() {
    isSimbaImmune = false;
}