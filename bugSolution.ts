function printCoord(pt: { x?: number; y: number }) {
  // Solution 1: Optional chaining
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

function printCoord(pt: { x?: number; y: number }) {
  // Solution 2: Type Guard
  if (pt.x !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
  } else {
    console.log("The coordinate's x value is undefined");
  }
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoord({ y: 7 });