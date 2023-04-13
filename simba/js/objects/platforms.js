var platforms;

function InitializePlatforms() {
    if(platforms != null && platforms != undefined) {
        platforms.destroy();
    }
    
    platforms = game.add.group();
    platforms.enableBody = true;
}

function createSinglePlatform(x,y,length=1) {
    var platformWidth = 69*settings.platformScaleX;
    var platformHeight = 69*settings.platformScaleY;

    addPlatformPartToGroup(x,y,"start");
    for(var i=0;i<length;i++) {
        addPlatformPartToGroup((x+platformWidth+(i*platformWidth)),y,"middle");
    }
    addPlatformPartToGroup((x+platformWidth+(length*platformWidth)),y,"end");
}

function addPlatformPartToGroup(partX,partY, partName) {
    var part = platforms.create(partX,partY, 'platform', partName);
    part.name = partName;

    if(partName == "start")
        part.anchor.x = 0.0;
    else if(partName == "end")
        part.anchor.x = 0.0;
    part.anchor.y = 0.0;
    part.scale.setTo(settings.platformScaleX,settings.platformScaleY);
    part.body.immovable = true;

}