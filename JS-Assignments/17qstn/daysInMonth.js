// Write a program which tells the number of days in a month.

let month = "September";

if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || "October" || month == "December") {
    console.log(`
    Days in a month ${month} = 31
    `);
} 
else if(month == "April" || month == "Jun" || month == "September" || month == "November") {
    console.log(`
    Days in a month ${month} = 30
    `);
} else {
    console.log(`
    Days in a month ${month} = 28
    `);
}