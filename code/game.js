var mobileMode = true;

/**scene('StartingScreen', () => {
  add([
    rect(width(), height()),
    color(100, 20, 200),
    z(1),
  ]);
  
  add([
    rect(SCALE/2, SCALE/2),
    color(100, 20, 50),
    pos(SCALE*13, SCALE*13),
    area(),
    z(2),
    'VersionButton'
  ]);

  onClick('VersionButton', () => {
    if (mobileMode == true) {
      mobileMode = false;
    } else {
      mobileMode = true;
    };
  });
});*/

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

go('game');
