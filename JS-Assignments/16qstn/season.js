// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // - September, October or November, the season is Autumn.
    // - December, January or February, the season is Winter.
    // - March, April or May, the season is Spring
    // - June, July or August, the season is Summer

let month = "January";

if (month == "September" || month == "October" || month == "November") {
    console.log("Autumn");
} else if(month == "December" || month == "January" || month == "February") {
    console.log("Winter");
} else if(month == "May" || month == "April" || month == "March") {
    console.log("Spring");
} else {
    console.log("Summer");
}