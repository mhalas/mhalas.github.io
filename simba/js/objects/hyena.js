var hyenas;

function InitializeHyenas() {
    if(hyenas != null && hyenas != undefined) {
        hyenas.destroy();
    }

    hyenas = game.add.group();
    hyenas.enableBody = true;
}

function createSingleHyena(x, y, isMovingRight=true) {
    var hyena = hyenas.create(x,y, 'hyena');
    hyena.scale.x = 0.75;
    hyena.scale.y = 0.75;
    hyena.anchor.x = 0.5;
    hyena.anchor.y = 0.0;
    game.physics.arcade.enable(hyena);
    hyena.animations.add('running', Phaser.Animation.generateFrameNames('running', 0, 7, '', 4), 10, true);
    hyena.animations.play('running', settings.animationSpeed, true);
    SetGravityOnHyena(hyena);

    hyena.body.velocity.x=settings.speed/2;
    if(!isMovingRight) {
        hyena.body.velocity.x *= -1;
        hyena.scale.x *= -1;
    }
}

function SetGravityOnHyena(hyena) {
    hyena.body.bounce.y = 0;
    hyena.body.gravity.y = settings.Ygravity;
    hyena.body.collideWorldBounds = true;

    hyena.body.velocity.x = 0;
}