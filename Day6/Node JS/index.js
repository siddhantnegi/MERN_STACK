// function sum(a, b) {
//     console.log(a + b)
// }

// function mul(x, y) {
//     console.log(x * y)
// }

// module.exports = {
//     sum,
//     mul,
// };

// //npm figlet

// var figlet = require("figlet");
// figlet("saumya bhabhi!!", (err, data) => {
//     console.log(data);
// }

// );


// //old method for 

// fetch('')
//     .then((res) => {
//         return res.json();
//     });

//     .then((data) => {
//         console.log(data)
//     });
//     .catch((error)=>{
//         console.log('error occured')
    // })

    //async await

    // async function getAPI(){
    //     const pr1=new Promise((res,rej)=>{
    //         console.log('promise1...')
    //     });

    //     setTimeout(()=>{

    //     })
    //     console.log('api calling')
    //     const pr= await fetch('https://api.github.com/users/lalit')
    //     console.log('making json')
    //     const data =await pr.json()
    //     console.log('::feched data::')
    // }
    // getAPI();

    console.log('start');

    async function callAPI(){
    const pri = new Promise((res, rej)=>{
    console. log('pronise 1...')})

    setTimeout(()=>
    console. log('timeout 1...')
    , 10000);
    }
    console. log('promise 1 completed');
    
    callAPI();