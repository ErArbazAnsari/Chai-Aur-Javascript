const div = document.createElement('div')
console.log(div)
div.className = 'myClass'
div.id = Math.round(Math.random() * 10 + 1)
console.log(div)

div.setAttribute('title', 'this is a title')
div.style.color = 'red'
div.style.fontSize = '3rem'
div.style.backgroundColor = "yellow"
div.style.padding = '20px'

// div.innerHTML='<h1>Chai aur code</h1>'
const data = document.createTextNode("arbaz ansari")
div.appendChild(data)

document.body.appendChild(div)