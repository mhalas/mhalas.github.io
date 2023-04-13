function InitializeLevel1() {
    var groundHeight = game.world.height-35;
    createSinglePlatform(0, groundHeight, 10);
    createSinglePlatform(250, groundHeight-100, 2);
    createSinglePlatform(150, groundHeight-200, 2);
    createSinglePlatform(50, groundHeight-300, 0);
    createSinglePlatform(500, groundHeight, 1);
    createSinglePlatform(650, groundHeight, 1);
    createSinglePlatform(800, groundHeight, 4);

    createSinglePlatform(1150, groundHeight-100, 1);
    createSinglePlatform(1000, groundHeight-200, 1);
    createSinglePlatform(1150, groundHeight-300, 1);
    createSinglePlatform(1300, groundHeight-300, 5);
    createSinglePlatform(1550, groundHeight-50, 1);
    createSinglePlatform(1800, groundHeight-50, 1);
    createSinglePlatform(2000, groundHeight-150, 1);
    createSinglePlatform(2300, groundHeight, 20);
    createSinglePlatform(2500, groundHeight-100, 1);
    createSinglePlatform(2500, groundHeight-275, 1);
    createSinglePlatform(2750, groundHeight-175, 1);
    createSinglePlatform(2900, groundHeight-200, 3);

    createSinglePlatform(3200, groundHeight-150, 5);
    createSinglePlatform(3400, groundHeight-50, 7);
    createSinglePlatform(3600, groundHeight-150, 1);
    createSinglePlatform(3800, groundHeight-250, 1);
    
    createSinglePlatform(4000, groundHeight-350, 1);
    createSinglePlatform(4200, groundHeight-450, 1);
    createSinglePlatform(4500, groundHeight, 1);
    createSinglePlatform(4700, groundHeight-100, 1);
    createSinglePlatform(4900, groundHeight-200, 1);
    createSinglePlatform(4700, groundHeight-300, 1);
    createSinglePlatform(4900, groundHeight-400, 1);

    createStar(50,groundHeight-350);
    createStar(800,groundHeight-200);
    createStar(1400,groundHeight-450);
    createStar(1600,groundHeight-150);
    createStar(2200,groundHeight-250);
    createStar(3050,groundHeight-50);
    createStar(2525,groundHeight-350);
    createStar(3400,groundHeight-100);
    createStar(3400,groundHeight-200);
    createStar(4750,groundHeight-400);


    createSingleHyena(800,groundHeight-100);
    createSingleHyena(1400,groundHeight-400);
    createSingleHyena(2350,groundHeight-50);
    createSingleHyena(2800,groundHeight-50);
    createSingleHyena(2700,groundHeight-50, false);
    createSingleHyena(3000,groundHeight-50, false);
    createSingleHyena(3400,groundHeight-100);

    InitializeSimba(50,groundHeight-50);
    
    InitializeExitSign(4930,groundHeight-465);

    score = 0;
    updateScore();
}