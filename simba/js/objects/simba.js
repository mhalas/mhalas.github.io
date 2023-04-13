var simba;
var simbaLifes;
var simbaFacing = "right";
var isSimbaImmune;

function InitializeSimba(x=0,y=0) {
    if(simba != null && simba != undefined) {
        simba.destroy();
    }

    simba = game.add.sprite(x,y,'simba');
    simba.anchor.x = 0.5;
    simba.anchor.y = 0.0;
    game.physics.arcade.enable(simba);
    SetGravityOnsimba();

    AddAnimationToSimba();
    simba.animations.play('standing', settings.animationSpeed, true);

    isSimbaImmune = false;
}

function AddAnimationToSimba() {
    simba.animations.add('standing', Phaser.Animation.generateFrameNames('standing', 0, 8, '', 4), 10, true);
    simba.animations.add('running', Phaser.Animation.generateFrameNames('running', 0, 10, '', 4), 10, true);
    simba.animations.add('die', Phaser.Animation.generateFrameNames('die', 0, 3, '', 4), 10, true);
    simba.animations.add('jumping', Phaser.Animation.generateFrameNames('jump', 0, 11, '', 4), 10, true);
    
}

function InitializeSimbaLifes() {
    simbaLifes = game.add.group();

    for(var i=0;i<settings.playerLivesOnStart;i++) {
        var sl = simbaLifes.create(20+(30*i),20, 'simba', 'simbalife');
        sl.fixedToCamera = true;
    }
}

function SetGravityOnsimba() {
    simba.body.bounce.y = 0;
    simba.body.gravity.y = settings.Ygravity;
    // simba.body.collideWorldBounds = true;

    simba.body.velocity.x = 0;
}

function SimbaHit() {
    simbaLifes.removeChildAt(simbaLifes.total-1);

    if(simbaLifes.total == 0) {
        GameOver(true);
    }
    else {
        isSimbaImmune = true;
        game.time.events.add(Phaser.Timer.SECOND * 5, TurnOffSimbaImmune, this);
    }
}

function CheckIfSimbaFall() {
    if(simba.body.y > settings.gameHeight) {
        SimbaHit();
        simba.body.x = 50;
        simba.body.y = 500;
    }
}