// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

console.log("Sorted array is: ", ages.sort());

console.log(`
"Maximum age is: ${Math.max.apply(null, ages)}
"Minimum age is: ${Math.min.apply(null, ages)}
`);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i]
}
console.log(`
Average age is: ${sum / ages.length}
`);