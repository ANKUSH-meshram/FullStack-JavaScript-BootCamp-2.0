// Task 1:
let h3 = document.querySelectorAll("h3")
const allh3 = [...h3]

allh3.forEach(element => {
    element.style.backgroundColor = "#dadaf8"
});

// --------------------------------------------------

// Task 2
// new element:
const el = document.createElement("div");
el.style.margin = "10px"
el.style.border = "2px solid white"
el.style.cursor = "pointer"
// Skills:
const newh3 = document.createElement("h3")
const node1 = document.createTextNode("Skills");
newh3.style.padding = "5px 15px"
newh3.style.backgroundColor ="#dadaf8"

newh3.appendChild(node1)
el.appendChild(newh3)

// para:
const para = document.createElement("P")
const node2 = document.createTextNode("I posses a very good command over Full Stack Development technologies like MERN which can be seen in my work over the Github.")
para.style.padding = "5px 15px";
para.style.fontSize = "16px"
para.style.fontWeight = "600"

para.appendChild(node2)
el.appendChild(para)


const divs = document.querySelectorAll("div")
const allDivs = [...divs]
allDivs[2].appendChild(el)


