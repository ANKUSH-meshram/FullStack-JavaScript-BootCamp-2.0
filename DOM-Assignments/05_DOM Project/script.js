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

