# **DOM Assignments:**

***Original Output:***

![](./output.png)


## **Assignment One:**

---
**Task 1:**

```
    let liTags = document.querySelectorAll("li")
    let liAll = [...liTags]
    liAll[2].innerText = "Projects"

    const ul = document.querySelector("ul")
    const textNode = document.createTextNode("Hire Me")
    ul.appendChild(textNode);

    const logos = document.querySelectorAll("ul");
    const allLogos = [...logos];

    allLogos[1].remove();
```

![](./firstAssignmentImage/resultImages/Task%201(assignment%201).png)

---

**Task 2:**

```
let liTags = document.querySelectorAll("li")
let liAll = [...liTags]
liAll[2].innerText = "Projects"

const btn = document.querySelector("input").placeholder = "Search My Projects"
```

![](./firstAssignmentImage/resultImages/Task%202%20(assignment%201).png)

---

**Task 3:**
```
let liTags = document.querySelectorAll("li")
let liAll = [...liTags]
liAll[2].innerText = "Projects"

const span = document.querySelectorAll("span")
const allSpan = [...span]

allSpan[2].innerText = "an Employee"
allSpan[3].innerText = "iNeuron Intelligence Pvt Ltd"
```

![](./firstAssignmentImage/resultImages/Task%203%20(assignment%201).png)

---

**Task 5:**
```
let liTags = document.querySelectorAll("li")
let liAll = [...liTags]
liAll[2].innerText = "Projects"

const newbtn = document.createElement("BUTTON");
const node = document.createTextNode("Support Me");
newbtn.appendChild(node);

const element = document.querySelectorAll("div");
const allElements = [...element]

element[4].appendChild(newbtn);
```

![](./firstAssignmentImage/resultImages/Task%205%20(assignment%201).png)

---

## **Assignment Two:**

**Task 1:**

```
let h3 = document.querySelectorAll("h3")
const allh3 = [...h3]

allh3.forEach(element => {
    element.style.backgroundColor = "#dadaf8"
});
```

![](./secondAssignmentImage/resultImages/task%201%20(assignment%202).png)

---

**Task 2:**
```
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
```

![](./secondAssignmentImage/resultImages/Task%202%20(Assignment%202).png)

---
## **Assignment Three:**

**Task 1:**

```
const input = document.querySelectorAll("input")
const allInputs = [...input]
allInputs[1].placeholder = "FSJS 2.0"
allInputs[2].placeholder = "fsjs@ineuron.ai"
allInputs[3].placeholder = "FSJS 2.0"
allInputs[4].placeholder = "fsjs@ineuron.ai"

const textarea =  document.querySelectorAll("textarea")
const allTextareas = [...textarea]

allTextareas[0].placeholder = "Hello World"
allTextareas[1].placeholder = "Hello World"

```

![](./thirdAssignmentImage/resultImages/task%201%20(assignment%203).png)

---