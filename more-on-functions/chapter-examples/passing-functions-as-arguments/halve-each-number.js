let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
 let dividedByTwo = function (n) {
    return n/2;
 };

let halved = nums.map(dividedByTwo);

console.log(halved);
