// // const fs = require('node:fs');

// // const data = fs.readFileSync('./myReadMe.txt');       //'readFileSync' is a synchronous operation, meaning it will block the execution of further code until the file reading is complete.
// // console.log(data);                  //THIS WILL PRINT THE DATA IN ENCRYPTED FORM
// // console.log(data.toString());      //THIS WILL CONVERT THE DATA IN STRING

// //2nd METHOD 

// // const fs = require('fs');
// // const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf8'});
// // console.log(data);

// // const fs = require('fs')
// // const data=fs.writeFileSync('./myReadMe.txt', "tomorrow is EpoQue")


// // const fs=require('fs')
// // console.log('start')
// // const data=fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'})
// // console.log(data)
// // console.log('end')


// //PROMISES IN FILE SYSTEM

// // const fsPromises = require('fs/promises');
// // console.log('start')
// // const pr = fsPromises.readFile('./myReadMe.txt', { encoding: "utf-8" });
// // pr.then((res) => {
// //     console.log(res)
// // })
// // console.log('end')


// //CALLBACK IN FILE SYSTEM

// // const fs = require('fs');
// // // const { clearScreenDown } = require('readline');
// // fs.readFile('./myReadMe.txt', { encoding: 'utf8' }, (err, data) => {
// //     // if (err) {
// //     //     console.error(err);
// //     //     return;
// //     // }
// //     console.log(data)
// // })



// //HTTP://LOCALHOST:1400/


// // const http = require('http');
// // const page='<h1>Node JS</h1>'
// // const app = http.createServer((req, res)=>{
// //     console.log('Recieved!')
// //     console.log(req.url)
// //     res.writeHead(200, {'content-Type': 'text/html'}),
// //     res.end(page)
// // });

// // app.listen(1400, ()=>{
// //     console.log('......Server Start.....')
// // })


// //MINI PROJECT

// const http = require('http');
// const fs = require('fs')

// const data = fs.readFileSync('./data.json', { encoding: 'utf-8' })
// // const htmlTemplate=fs.readFileSync('./templates/page.html', { encoding: 'utf-8' })

// const dataObj = JSON.parse(data);
// // console.log(dataObj)
// const products = dataObj.products;

// // const http = require('http');
// const htmlTemplate = `
//     <!DOCTYPE>
//     <html Lang="en-US">
//     <head>
//         <style>
//         body {
//           display: grid;
//           grid-template-columns: repeat(5, 1fr);
//           gap: 20px;
//           align-items: center;
//           text-align: center;
//           background-color: black;
          
//         }
    
//         .product-card {
//           border: 1px solid #ccc;
//           padding: 10px;
//           background-color: #f9f9f9;
//           background: yellow;
//           transition: transform 0.3s, box-shadow: 0.3s;
//         }
    
//         .product-card h3 {
//           top: 5px;
//         }

//         .product-card:hover{
//           transform: scale(1.25);
//           box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
//         }
    
//         .product-card p {
//           margin-top: 5px;
//         }
//         img{
//           height: 180px;
//           width: 200px;
//         }
//         // .product-card{
//         //     border: 3px double blue;
//         //     border-radius: 8px;
//         //     padding: 18px;
//         //     margin: 20px auto
//         //      max-width: 500px;
            
//         //   }
//         //   body{
//         //     display: grid;
//         //     gap: 200px;
//         //     grid-template-columns: repeat(3, 1fr);
//         //   }
        
//         </style>
//         <title>productpage</title>
//         </head>
//         <body>
//             _PRODUCTS_CARDS_
//         </body>
//         </html>
  
// `;

// const cardTemplate = `
//     <div class='product-card' >
//     <h3>_TITLE_</h3>
//     <img src="_IMAGE_URL" alt="TITLE_ Image">
//     <p>_INFO_</p>
//     </div >
//     `;

// const card1 = cardTemplate.replace('_TITLE_', products[0].title).replace('_INFO_', products[0].description);
// const card2 = cardTemplate.replace('_TITLE_', products[1].title).replace('_INFO_', products[1].description);
// const card3 = cardTemplate.replace('_IMAGE_URL', products[2].title);

// const allcards = products.map((elem) => {
//   let newCard = cardTemplate;
//   newCard = newCard
//     .replace("TITLE", elem.title)
//     .replace("INFO", elem.description)
//     .replace("_IMAGE_URL", elem.thumbnail);
//   return newCard;
// });

// const page = htmlTemplate.replace("PRODUCT", allcards);

// const app = http.createServer((req, res) => {
//   console.log("Recieved");
//   console.log(req.url);                                //URL is printed in the console
//   res.writeHead(200, {
//     "content-type": "text/html",
//   });
//   res.end(page);
// });

// app.listen(1400, () => {
//   console.log("......Server Started......");
// });
