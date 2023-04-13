var stateText;

function InitializeStateText() {

    stateText = game.add.text(settings.cameraWidth/2,settings.cameraHeight/2,'', { font: '64px Arial', fill: '#000' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.fixedToCamera = true;
    // stateText.visible = false;
}