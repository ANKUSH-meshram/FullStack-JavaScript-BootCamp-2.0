const courses = document.querySelectorAll("a")
const allCourses = [...courses]

for (let i = 1; i < allCourses.length; i = i+2) {
    allCourses[i].remove();
}

const input = document.querySelector("input")
input.placeholder = "iNeuron"
