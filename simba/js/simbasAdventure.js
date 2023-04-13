window.onload = function() {
    GameStart();
}

function preload() {
    LoadImages();
}

function create() {
    InitializeGame();
    InitializeSimbaLifes();
    InitializePlatforms();
    InitializeHyenas();
    InitializeStarObject();

    InitializeLevel1();

    InitializeGameCamera();
    InitializeControls();
    InitializeStateText();
}

function update() {
    background.tilePosition.x = 0.5;
    InitializeCollisions();
    
    ControlsListener();
    CheckIfSimbaFall();
}

function render() {
    if(settings.debugMode) {
        // game.debug.bodyInfo(simba, 32, 32);

        game.debug.body(simba);
        
        DebugShowObjectinfo(platforms);
        DebugShowObjectinfo(hyenas);
        DebugShowObjectinfo(stars);
        DebugShowObjectinfo(exitSigns);
    }
}

function DebugShowObjectinfo(group) {
    for(var i=0;i<group.total;i++) {
            game.debug.body(group.getAt(i));
    }
}