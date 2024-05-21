const { reverse } = require("dns");

function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}
console.log(makeLine(5));

console.log();
//spaced for a cleaner look

function makeSquare(width, height) {
    let square = "";
    for (let i = 0; i < height; i++) {
      square += (makeLine(width) + "\n");
    }
    return square;
  }
  console.log(makeSquare(5, 5));


function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + "\n");
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5, 3));

  console.log();
  //spaced for a cleaner look

  function makeDownwardStairs(height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + "\n");
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));

  console.log();
  //spaced for a cleaner look

  function makeSpaceLine(numSpaces, numChars) {
    let spacedLine = "";
    
        for (let i = 0; i < numSpaces; i++) {
        spacedLine += " ";
    }   
        for (let i = 0; i < numChars; i++) {
        spacedLine += "#";
    }   
        for (let i = 0; i < numSpaces; i++) {
        spacedLine += " ";
    }    

    return spacedLine;
    
} 

  console.log(makeSpaceLine(3, 5));

  console.log();
  //spaced for a cleaner look

function makeIsoscelesTriangles(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangles(5));

console.log();
//spaced for a cleaner look

function makeDiamond(height) {
    let diamond = "";
    
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
    }

    for (let i = height - 1; i >= 0; i--) {
        diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
    }
    return diamond
    
}
console.log(makeDiamond(5));
