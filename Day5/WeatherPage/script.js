function callAPI(){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=LHDSC3BZ7BM582CRZ3VJWFCDQ')
    .then((res)=>res.json())
    .then(console.log)

}

function renderUI{
    const row=document.createElement('tr')
    const cell1=document.createElement('th')
    cell1.innerText='Date';
    row.appendChild(cell1);

    const cell2=document.createElement('th')
    cell2.innerText='Maximum Temperature'
    row.appendChild(cell2)

    const cell3=document.createElement('th')
    cell3.innerText='Minimum Temperature'
    row.appendChild(cell3)
}
callAPI();
// SUWENMJDCG3P8Y7E9M4Y22