// const div= document.querySelector('div')
// console.log(div)
// // // div.innerText="hello"
// // // console.log(div)
// const c=document.querySelector('p')
// div.removeChild(c)

// const res=document.getElementById('p3')
// div.removeChild(res)

// const res=document.getElementById('p:nth-of-type(3)')
// div.removeChild(res)

// function getinfo(e) {
//     // console.log("siddhant negi")
//     console.log(e)
//     const d = document.querySelector("div")
//     const x=document.querySelector('p')
//     d.removeChild(x)
//     d.append('1')


//     // x.append('1')
//     e.target.style.color='red';

// }

const firstnamechange = (e) => {
    console.log(e)
}

const submitForm = (event) => {
    e.preventDefault();
    const t = e.target
    for (let i = 0; i < t.length; i++) {

        const ty = t[i].type;
        const vl = t[i].value;
        console.log(ty, vl);
        if (ty == 'checkbox') {
            console.log(t[i].checked)
        }
    }

}

const submitForm = (event) => {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };

    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        const vl = t[i].value;
        const nm = t[i].name;

        if (ty !== 'checkbox' && t[i].checked) {
            res.hobbies.push(vl);
        }
        if (ty == 'checkbox') {
            res(nm) = vl;
        }
    }
}
console.log(res);


//higher order function & call back function
