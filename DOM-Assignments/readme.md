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

## **Assignment Four :***

***Original output :***

![orinalOutpur](https://user-images.githubusercontent.com/118118102/218048029-6f15c868-579e-404b-b29b-8bf40f07fd14.png)

After using DOM, completed the given assignment.
The code and result snapshot is given below.

```

let div = document.querySelectorAll("div")
let allDivs = [...div]
allDivs[21].innerText = "The Archer"
allDivs[53].innerText = "The Goblin"

let stat = document.querySelectorAll(".stat")
let allStat = [...stat]

for (const iterator of allStat) {
    iterator.style.color = "#feffff"
}

let value = document.querySelectorAll(".stat-value")
let allVals = [...value]

for (const iterator of allVals) {
    iterator.style.color = "white"
}


// The Barbarian

let barbarianLast = document.querySelectorAll(".clash-card__unit-stats--barbarian")
let allBarb = [...barbarianLast]

for (let iter of allBarb) {
    iter.style.backgroundColor = "#ec9b3b"
}

// The Archer

let archer = document.querySelectorAll(".clash-card__unit-stats--archer")
let archerBGC = [...archer]

for (const iterator of archerBGC) {
    iterator.style.backgroundColor = "#ee5487"
}

// The Giant 
let giant = document.querySelectorAll(".clash-card__unit-stats--giant")
let giantBGC = [...giant]

for (const iterator of giantBGC) {
    iterator.style.backgroundColor = "#f6901a"
}

// The Goblin
let goblin = document.querySelectorAll(".clash-card__unit-stats--goblin")
let goblinBGC = [...goblin]

for (const iterator of goblinBGC) {
    iterator.style.backgroundColor = "#82bb30"
}


// The Wizard

let wizard = document.querySelectorAll(".clash-card__unit-stats--wizard")
let wizardBGC = [...wizard]

for (const iterator of wizardBGC) {
    iterator.style.backgroundColor = "#4facff"
}
```
![assignment 4](https://user-images.githubusercontent.com/118118102/218047273-bd50edf1-d134-4690-a61d-40410bd6bf24.png)

---

## **Assignment 5 :**

***original output :***

![original-output](https://user-images.githubusercontent.com/118118102/218101477-e8bdb578-b3d1-4324-9945-8e1c067a839e.png)

**code :** for change that i made to complete this assignment is below here:

```
const div = document.querySelectorAll("div")
const allDivs = [...div]
const contact = allDivs[3]

// creating new element - Pro Subscription button
const prosubs = document.createElement("a")
prosubs.innerText = "Pro Subscription"
contact.appendChild(prosubs)

prosubs.style.backgroundColor = "#8a2be2"
prosubs.style.padding = "10px 15px"
prosubs.style.fontSize = "25px"
prosubs.style.color = "white"
prosubs.style.borderRadius = "3px"  
prosubs.style.cursor = "pointer"


// Adding new item in menu recipies
const recipes = allDivs[7]
const chinese = document.createElement("a")
chinese.innerText = "Chinese (7)"
recipes.appendChild(chinese)

// last
const recis = document.querySelectorAll(".recipe-name")
const allRecis = [...recis]

for (const iterator of allRecis) {
    iterator.style.color = "#551c8c"
}

const disp = document.querySelectorAll(".recipe-disp")
const dispAll = [...disp]

for (const iterator of dispAll) {
    iterator.style.color = "#6531a0"
}

// extra addtional card
const gallery = document.querySelector(".recipe-gallery")
const newCard = document.createElement("div")
newCard.classList.add("card")
gallery.appendChild(newCard)

const heading = document.createElement("h5")
heading.innerText = "add 6th card here"
newCard.appendChild(heading)

heading.style.padding = "5px"
heading.style.fontSize = "20px"

// footer
const atag = document.querySelectorAll("a")
const atagsAll = [...atag]

atagsAll[19].innerText = "aankuushhh"

```

![result](https://user-images.githubusercontent.com/118118102/218101493-7d0663f4-1ae8-4216-ab7c-86628838217d.png)

---

## **Assignment 6 :**

***original output :***

![original output - 1](https://user-images.githubusercontent.com/118118102/218141201-46e7cfe1-6535-4fb1-8bf1-d07db76c9c4b.png)

![original output - 2](https://user-images.githubusercontent.com/118118102/218141222-330ab424-d453-4898-a308-99327b44954e.png)


***code and output result of assignment 6 :***

```
// logo
const header = document.querySelector("header")
let img = document.createElement("img")
img.src = "https://ineuron.ai/images/ineuron-logo.png"
header.appendChild(img);

let logo = document.querySelector(".logo")
logo.remove()


// Price
const span = document.querySelectorAll("span")
const spanAll = [...span]
spanAll[0].innerHTML = "$10"


// linkedin
const social = document.querySelector(".footer_social")

const div = document.createElement("div")
div.classList.add("footer_social_ico")

const linkdIn = document.createElement('img')
linkdIn.src = "https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
linkdIn.style.width = "22px"

div.append(linkdIn);

social.appendChild(div);
```
![result 1](https://user-images.githubusercontent.com/118118102/218141680-d1e44116-557f-480f-95b2-a3f3ecbf2722.png)


![result 2](https://user-images.githubusercontent.com/118118102/218141694-1d571204-e5c9-4de6-8819-d28dcba381ff.png)

---

## **Assignment 7 :**
*original output*

![original output](https://user-images.githubusercontent.com/118118102/218146100-e9006d77-dbae-44e4-88de-b925c80d33d2.png)


```
const courses = document.querySelectorAll("a")
const allCourses = [...courses]

for (let i = 1; i < allCourses.length; i = i+2) {
    allCourses[i].remove();
}

const input = document.querySelector("input")
input.placeholder = "iNeuron"
```
After dom:

![result](https://user-images.githubusercontent.com/118118102/218145557-2079bcf4-f22a-4166-ad4b-c5ac091377ad.png)

---

## **Assignment 9 :**

***original output :***

![original](https://user-images.githubusercontent.com/118118102/218152608-132cf36a-fdb0-4378-9202-cad00dc353cd.png)

## Task 1 :

```
const h1 = document.querySelector("h1");
h1.style.color = "#dc163e"
```

***Result ouput of Task 1 :***

![result 1](https://user-images.githubusercontent.com/118118102/218152990-8f0210a3-b53a-46c9-a1a5-79c391916564.png)


## Task 2 :

```
const cart = document.querySelector(".add-to-cart")
cart.style.backgroundColor = "#dc163e"
```

![result 2](https://user-images.githubusercontent.com/118118102/218153254-6c3b3ac2-77a6-4eea-89c5-e25143e76297.png)

---
