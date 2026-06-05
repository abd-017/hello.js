
const students = ["Arjun", "Priya", "Rohan", "Diya", "Karan"];
const marks = [55, 82, 48, 91, 67];
// Step 1: write a function that says if someone passed
function hasPassed(score) {
return score >= 60;
}

for (let i = 0; i < students.length; i++) {
const result = hasPassed(marks[i]) ? "PASS" : "FAIL";
console.log(students[i] + " — " + result);
}
