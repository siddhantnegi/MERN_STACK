// setTimeout(()=>{console.log('timeout1~~~')},15000)
// console.log('start')
// setTimeout(()=>{console.log('timeout2~~~')},10000)
// console.log('end')/


// inversion of control
// function createorder(x, fn){
//     console.log(x)
//     setTimeout(()=>{
//         fn('sid1234')
//     },1000)
// }

// function makePayment(orderID){
//     console.log(orderID)
// }
// createorder('soap', makePayment)


// function position(x, fn){
//     console.log(x)
//     setTimeout(()=>{
//         fn('Striker')
//     },2000)
// }

// function pass(y){
//     console.log(y)
// }
// position('Messi', pass)



const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Some items are out of stock");
    }, 3000)
});

setTimeout(()=>{console.log('First Timeout...')},0)

console.log(pr);

pr.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})