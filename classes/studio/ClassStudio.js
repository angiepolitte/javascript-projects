//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(additionalScore) {
        this.scores.push(additionalScore);
    }
    totalScores() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        return total;
    }
    averageScore() {
        let average = 0;
        let total = 0;
        let numItems = this.scores.length;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
            average = total / numItems;
        }return Math.round(average);
    }
    status() {
        let average = this.averageScore();
        if (average >= 90) {
            console.log(`${this.name} earned an average test score of ${average}% and has a status of "Accepted"`);
        } else if (average >= 80) {
            console.log(`${this.name} earned an average test score of ${average}% and has a status of "Reserve"`);
        } else if (average >= 70) {
            console.log(`${this.name} earned an average test score of ${average}% and has a status of "Probationary"`)
        } else {
            console.log(`${this.name} earned an average test score of ${average}% and has a status of "Rejected"`);
        }return "";
    }
}
let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97])
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);


console.log(candidate1);
console.log(candidate2);
console.log(candidate3);
console.log(candidate1.totalScores());
console.log(candidate2.totalScores());
console.log(candidate3.totalScores());
console.log(candidate1.averageScore());
console.log(candidate2.averageScore());
console.log(candidate3.averageScore());
// candidate1.addScore(83);
// console.log(candidate1.scores);
console.log(candidate1.status());
console.log(candidate2.status());
console.log(candidate3.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
candidate3.addScore(100);
candidate3.addScore(100);
console.log(candidate3.averageScore());
console.log(candidate3.status());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.