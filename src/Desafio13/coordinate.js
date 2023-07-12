let startPosition = { x: 0, y: 0 };

const coordinates = [
    { x: 2, y: 3 },
    { x: -1, y: 5 },
    { x: 4, y: -2 }
  ];
  
for (let i = 0; i < coordinates.length; i++) {
    const { x, y } = coordinates[i];
    startPosition.x += x;
    startPosition.y += y;
  }
  
console.log(`The final position of the treasury is (${startPosition.x}, ${startPosition.y}).`);
  