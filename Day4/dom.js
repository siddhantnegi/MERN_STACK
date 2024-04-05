// console.log('dom')
// window.console.log(window)
// window.console.log(window.innerHeight)
// window.console.log(window.innerWidth)
// window.console.log(window.document)

// console.log(window.document)
// console.log(window)

// const res= document.getElementById('h1')
// console.log(res)

// const res=querySelectorall('div>h3')
// console.log(res)

const ne=document.createElement("h1")
const me=document.createElement("div")
me.innerHTML="h6"
me.innerText="Dynamic Text 1"


ne.innerText="Dynamic Text"

const firstdiv=document.getElementsByTagName("div")
firstdiv[0].appendChild(ne);

//deep copy & shallow copy 