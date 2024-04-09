let arr=[1,2,3,4,5]
// function printarray(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }
// printarray(arr);

// function printpretty(elem){
//     console.log(elem)
// }

// arr.forEach(printpretty);
// console.log('GEC start')
// function printpretty(elem){
//     console.log(arr)
// }

// arr.forEach((a,b,c)=>{
//     console.log('->','element',a,'->','index',b,'->','array',c);
// })

// arr.map((a)=>{
//     console.log(a)
// })

// arr.filter((a)=>{
//     console.log(a);
// })
// console.log('GEC start')
// function printpretty(elem){
//     console.log('pretty start')
//     let ans=2+3;
//     console.log(ans)
//     console.log('pretty end')
// }

// setTimeout(printpretty, 5000)
// console.log('GEC end')

// const btn=document.getElementByID('btn')
// btn.addEventListenet("click", printpretty)

// console.log("Start")

// const req=fetch("https://api.github.com/users/siddhantnegi")
// console.log(req);
// req.then(()=>{
//     console.log(req)})

// console.log("End")

// console.log("Start")
// const req=fetch('https://dummyjson.com/products/1')
// // .then(res => res.json())
// const res=req.then(res=>res.json)
// res.then((data)=>console.log(data));
// // .then(json => console.log(json))
// console.log("End")

fetch('https://dummyjson.com/products/1')
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>{
    console.log('Error')
})