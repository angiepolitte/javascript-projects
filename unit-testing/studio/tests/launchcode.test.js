// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit' for organization key", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should return 'Jeff' for executiveDirector key", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should return 100 for percentageCoolEmployees key", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return 'Web Development', 'Data Analysis', and 'Liftoff' as items in programsOffered", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  
});

describe("Testing launchOutput", function() {

  test("should return 'Launch' when num is even", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
   });

   test("should return 'Code!' when num is divisible by three", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
   });

   test("should return 'Rocks!' when num is divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
   });

   test("should return 'LaunchCode!' when a number is divisible by 2 AND 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
   });

   test("should return 'Code Rocks!' when a number is divisible by 3 AND 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
   });

   test("should return 'Launch Rocks! (CRASH!!!!)' when a number is divisible by 2 AND 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
   });

   test("should return 'LaunchCode Rocks!' when number is divisible by 2 AND 3 AND 5", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
   });
  
})



