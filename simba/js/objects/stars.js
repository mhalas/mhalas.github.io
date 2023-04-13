var stars;

function InitializeStarObject() {
    stars = game.add.group();
    stars.enableBody = true;
}

function createStar(x,y) {
    var star = stars.create(x,y, 'star');
    star.scale.x = 0.06;
    star.scale.y = 0.06;
}