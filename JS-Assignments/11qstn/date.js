// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


let day = new Date();

console.log(`
${day}

year today  : ${day.getFullYear()}
month today : ${day.getMonth()}
date today  : ${day.getDate()}
day today   : ${day.getDay()}
hours now   : ${day.getHours()}
minutes now : ${day.getMinutes()}
`);