var exitSigns;

function InitializeExitSign(x,y) {
    exitSigns = game.add.group();
    exitSigns.enableBody = true;

    var es = exitSigns.create(x,y, 'platform', 'exitSign');
    es.body.immovable = true;
}