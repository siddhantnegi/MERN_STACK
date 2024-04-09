console.log('....APP Started....')

function callAPI() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=47c5d49e0110453a950d905d89664acc')
        .then((res) => res.json())
        .then((data) => renderUI(data))

}



function renderUI(data) {
    const articles = data.articles;
    // console.log(articles)
    // console.log(data)
    const root=document.getElementById('root')
    // console.log(articles)  
    // const div=document.createElement('div')
    // div.innerHTML='h1'
    // div.innerText='card'
    for(let i=0;i<articles.length;i++){
        const ar = articles[i]
        const div = document.createElement('div');
        div.setAttribute("class", "news-card")
        // console.log(ar);
        
        const h3 = document.createElement('h3')
        h3.innerText = ar.title;
        div.appendChild(h3)

        const p=document.createElement('p')
        div.innerText=ar.description;
    
        const img = document.createElement('img')
        img.src = ar.urlToImage;
        div.appendChild(img)

        
    
        root.appendChild(div);
    }
    }
    
// renderUI();
callAPI();