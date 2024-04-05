console.log("Js is Started...")
let parent = document.querySelectorAll('.parent')
console.log(parent)

// console.log(parent.children)

let days = document.querySelectorAll('.day')
days.forEach((i) => {
    console.log(i.innerHTML)
})

days[0].style.color = 'yellow'
console.log(days[0].parentElement.innerHTML)
console.log(days[0].nextElementSibling)

console.log(parent.childNodes)