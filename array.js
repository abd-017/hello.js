const names  = 
["abdullah","aryan","shiv","aman","jish"];
const scores = 
[67, 89, 23, 94, 77];

// Step 1 — print each student with their score
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + 
" : " + scores[i]);
}

// Step 2 — add a new student
names.push("Meera");  scores.push(88);
console.log(
"Total students: " + names.length);   // Total students: 6

// Step 3 — check if Priya is in the list
console.log(names.includes("Priya"));   // true
