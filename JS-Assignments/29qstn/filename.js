// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
    const fileNameSplit = fileName.split(".");
    if (fileNameSplit.length === 1 || (fileNameSplit[0] === "" &&       fileNameSplit.length === 2)) {
        return "";
    }
    return fileNameSplit.pop();
}
const fileName = "example.txt";
console.log(getFileExtension(fileName));