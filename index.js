await page.evaluate(() => {
  let minKeyUpDown = Infinity;
  let maxKeyUpDown = 0;

  let minBetweenChars = Infinity;
  let maxBetweenChars = 0;

  let keyUpDown;
  let betweenChars;
  document.addEventListener('keydown', () => {
    keyUpDown = Date.now();

    if (betweenChars) {
      const delay = Date.now() - betweenChars;
      
      if (delay > maxBetweenChars) {
        maxBetweenChars = delay;
      }

      if (delay < minBetweenChars) {
        minBetweenChars = delay;
      }
    }
  });

  document.addEventListener('keyup', () => {
    const delay = Date.now() - keyUpDown;
    
    if (delay > maxKeyUpDown) {
      maxKeyUpDown = delay;
    }

    if (delay < minKeyUpDown) { 
      minKeyUpDown = delay;
    }

    betweenChars = Date.now();

    console.log({ minKeyUpDown, maxKeyUpDown, minBetweenChars, maxBetweenChars });
  });
});