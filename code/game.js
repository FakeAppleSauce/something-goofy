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
