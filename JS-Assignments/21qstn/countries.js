// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ['India', 'England', 'USA', 'Australia', 'New Zealand', 'Portugal', 'France', 'Brazil', 'Canada',]
console.log(countries);

if(countries.includes('Ethiopia')) {
    console.log("ETHIOPIA");
} else {
    countries.push('Ethiopia')
    console.log("After pushing" ,countries);
}