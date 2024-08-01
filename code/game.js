var mobileMode = true;

scene('startingScreen', () => {
  add([
    rect(width(), height()),
    color(100, 20, 200),
    z(1),
  ]);
  
  add([
    rect(SCALE, SCALE/2),
    color(100, 20, 50),
    pos(SCALE*3, SCALE*13),
    area(),
    z(2),
    'versionButton'
  ]);
  
  add([
    rect(SCALE, SCALE/2),
    color(10, 200, 10),
    pos(SCALE*10, SCALE*13),
    area(),
    z(2),
    'startButton'
  ]);

  onClick('versionButton', () => {
    if (mobileMode == true) {
      mobileMode = false;
    } else {
      mobileMode = true;
    };
  });

  onClick('startButton', () => {
    go('game');
  });
});

scene('game', () => {
  const apple = add([
    sprite('apple'),
    pos(SCALE*3, SCALE*3),
    scale((SCALE/64) * 3), // SCALE divided by sprite width, multiplied by the size change
    rotate(0),
    anchor('center'),
  ]);

  if (mobileMode == true) {
    //add movement buttons
  }

  onUpdate(() => {
    apple.angle += dt()*150;
    apple.pos = mousePos();
  });
});

go('startingScreen');
