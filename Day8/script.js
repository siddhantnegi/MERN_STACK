const fs = require("fs")
const http = require("http")
const url = require('url')
const data = fs.readFileSync("D:/Programming/MERN_STACK/Day8/data.json", "utf8")
// console.log(data)

const dataobj = JSON.parse(data).products;
// console.log(dataobj)

// try {
//     const data = fs.readFileSync("D:/Programming/MERN_STACK/Day8/data.json", "utf8");
//     console.log(data);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
const cardTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title</title>
</head>
<body>
 <div class='product-card'>
     <h3>$TITLE$</h3>
     <img src="$img_src$" alt='produnt-image' />
     <a href="$product_links$> More info </a>
</div>
</body>
</html>

`;

let result = [];

for (let i = 0; i < dataobj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$', dataobj[i].title);
    temp = temp.replace('$img_src$', dataobj[i].images[0]);
    temp = temp.replace('$product_links$', `/product?id=${i}`);
    result.push(temp);
}
result = result.join(' ')
// console.log(result)
const Server = http.createServer((req, res) => {

    const path = url.parse(req.url, query)
    const pathname = path.pathname;
    const q = path.query;
    // const {pathname, query} = url.parse(req.url, true);
    console.log(query)

    if (pathname == '/home') {
        res.end(result);
    }
    else if (pathname == '/products') {
        const id = q.id;
        const item = dataobj[id];
        res.end(`
        <div>
        <h3> ${item.title} </h3>
        </div>`)
    }
    else if (pathname == '/about') {
        res.end("About Section")
    }
    else {
        res.end('404 ERROR FOUND')
    }
    // res.end(result);
});

Server.listen(1600, () => {
    console.log("-----....Server Started....-----")
})

