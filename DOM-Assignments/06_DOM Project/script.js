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