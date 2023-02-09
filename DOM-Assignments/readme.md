<<<<<<< HEAD
# **DOM Assignments:**
>   Here is the list of my all **DOM Assignments** in which I have created and manipulated web *wonderfull* webpages dynamically using **JavaScript**.  >

***Assignment 1,2,3 -- Original Output :***

![output](https://user-images.githubusercontent.com/118118102/217901856-a1f6b36d-850c-4445-8032-2b99b2b7cf06.png)


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



![Task 1(assignment 1)](https://user-images.githubusercontent.com/118118102/217902770-4c65c57a-58e2-4f73-9baa-ecf8d883de43.png)
---

**Task 2:**

```
let liTags = document.querySelectorAll("li")
let liAll = [...liTags]
liAll[2].innerText = "Projects"

const btn = document.querySelector("input").placeholder = "Search My Projects"
```


![Task 2 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902151-01f3f08f-42ab-4741-9113-76dfb133fbad.png)
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

![Task 3 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902167-3aad25bc-c1cd-4ca9-82a7-af9bfa47df01.png)


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

![Task 5 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902198-35254ace-f0b6-4667-b337-884845b8665c.png)


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

]![task 1 (assignment 2)](https://user-images.githubusercontent.com/118118102/217902902-4d8c5242-9ad5-48d4-a40a-cffb5562b213.png)


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

![Task 2 (Assignment 2)](https://user-images.githubusercontent.com/118118102/217902915-4ae7d1b4-61d4-46f7-a791-084e9e760a4c.png)

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

![task 1 (assignment 3)](https://user-images.githubusercontent.com/118118102/217903111-e761d9cf-5a71-4d4c-ad27-a4b2a307c613.png)

---
=======
# **DOM Assignments:**
>   Here is the list of my all **DOM Assignments** in which I have created and manipulated web *wonderfull* webpages dynamically using **JavaScript**.  >

***Assignment 1,2,3 -- Original Output :***

![output](https://user-images.githubusercontent.com/118118102/217901856-a1f6b36d-850c-4445-8032-2b99b2b7cf06.png)


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



![Task 1(assignment 1)](https://user-images.githubusercontent.com/118118102/217902770-4c65c57a-58e2-4f73-9baa-ecf8d883de43.png)
---

**Task 2:**

```
let liTags = document.querySelectorAll("li")
let liAll = [...liTags]
liAll[2].innerText = "Projects"

const btn = document.querySelector("input").placeholder = "Search My Projects"
```


![Task 2 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902151-01f3f08f-42ab-4741-9113-76dfb133fbad.png)
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

![Task 3 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902167-3aad25bc-c1cd-4ca9-82a7-af9bfa47df01.png)


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

![Task 5 (assignment 1)](https://user-images.githubusercontent.com/118118102/217902198-35254ace-f0b6-4667-b337-884845b8665c.png)


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

]![task 1 (assignment 2)](https://user-images.githubusercontent.com/118118102/217902902-4d8c5242-9ad5-48d4-a40a-cffb5562b213.png)


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

![Task 2 (Assignment 2)](https://user-images.githubusercontent.com/118118102/217902915-4ae7d1b4-61d4-46f7-a791-084e9e760a4c.png)

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

![task 1 (assignment 3)](https://user-images.githubusercontent.com/118118102/217903111-e761d9cf-5a71-4d4c-ad27-a4b2a307c613.png)

---
>>>>>>> a16821a620f8f841731be0202ea538e9ef695bd6
