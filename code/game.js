var MobileMode = true;

Scene('StartingScreen', () => {
  add([
    rect(window.innerWidth, window.innerHeight),
    color(100, 20, 200),
  ]);
  
  add([
    rect(SCALE/64, SCALE/64),
    color(100, 20, 50),
    pos((SCALE/100)*70, (SCALE/100)*20),
    area(),
    'VersionButton'
  ]);

  onClick('VersionButton', () => {
    if (MobileMode == true) {
      MobileMode = false;
    } else {
      MobileMode = true;
    };
  };
});

scene('game', () => {
  const apple = add([
    sprite('apple'),
    pos(SCALE*3, SCALE*3),
    scale((SCALE/64) * 3), // SCALE divided by sprite width, multiplied by the size change
    rotate(0),
    anchor('center'),

  ]);

  onUpdate(() => {
    apple.angle += dt()*150;
    apple.pos = mousePos();
  });
});

go('StartingScreen');
