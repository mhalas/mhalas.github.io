var controls;

function InitializeControls() {
    controls = game.input.keyboard.createCursorKeys();
}

function ControlsListener() {
    simba.body.velocity.x = 0;

    if(controls.up.isDown && simba.body.touching.down) 
    {
        simba.body.velocity.y = -500;
    }
    else if (controls.left.isDown && simba.body.touching.down)
    {
        simba.body.velocity.x=-settings.speed;
        if(simba.scale.x > 0) {
            simba.scale.x *= -1;
        }

        simba.animations.play('running', settings.animationSpeed, true);
    }
    else if (controls.right.isDown && simba.body.touching.down)
    {
        simba.body.velocity.x=settings.speed;
        if(simba.scale.x < 0)
            simba.scale.x *= -1;

        simba.animations.play('running', settings.animationSpeed, true);
    }
    else if(simba.body.touching.down) {
        simba.body.velocity.x = 0;
        simba.animations.play('standing', settings.animationSpeed, true);
    }

    if(!simba.body.touching.down) {
        if(simba.scale.x > 0)
            simba.body.velocity.x = settings.jumpMove;
        else if(simba.scale.x < 0)
            simba.body.velocity.x = -settings.jumpMove;


        simba.animations.play('jumping', settings.animationSpeed, true);
    }
}