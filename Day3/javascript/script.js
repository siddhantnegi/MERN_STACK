// console.log('hello');
// var x;
// x='siddhant'
// console.log(x)
// for(i=1;i<x.length;i++){
//     if(i%2==0){
//         console.log(x[i])
//     }
// }

// var age=18;
// age='eighteen'
// console.log(age);

// function env(){
//     for(var i=0;i<5;i++)
//     {
//         console.log(i);
//     }
//     console.log('outside the loop')
//     console.log(i)
// }

// env();

// const msg='sid';
// console.log(msg)

// let arr=['n', 'e', 'g', 'i']
// arr[0]='negi';
// console.log(arr);

// var str='12'
// var age=20
// var ans=age-(str*1)
// console.log(ans)

// let str='12'
// let p=parseInt(str);
// let n=Number(str)
// console.log(p, n)
// // console.log(n)

// let a="10"
// let b=10
// if(a==b){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

// var arr=['a','b','c']
// var cpy=[...arr]

// if(arr==cpy){
//     console.log('1.Yes')
// }
// else{
//     console.log('1.no')
// }

// if(arr===cpy){
//     console.log('2.Yes')
// }else{
//     console.log('2.no')
// }

// const str='ram'
// const str1=`jai shree ${str}`
// console.log(str1)


// function print(str='nothing is here'){                //value is not pass so this message will print '    '
//     console.log(str);
// }

// // const s='hello'
// print();




// function sum(a,b){
//     if(a&&b){
//         console.log(a+b)
//     }
//     else if
//     {
//         console.log(a)
//     }
        
//     else
//     {
//         console.log(0)
//     }
        
    
// }

// sum();
// sum(10);
// sum(10,20);

// return and value from arrow function

let a=2;
switch(a){
    case 1:{
console.log('one')
    }
    case 2:{
        console.log('two')
        break;
    }
    case 3:{
        console.log('three')
        break;
    }
    default: {
        console.log('default');
    }
}

// const obj=new Object();
const obj={
    'I':'one',
    'age': 20,
    'address': 'delhi'

};

obj[1]='one'
obj['name']='SIDDHANT NEGI'
obj['HOBBY']='FOOTBALL'
console.log(obj)

const x = (a,b) =>{
      console.log(a+b);
}

x(10,10);
console.log(`${obj[1]} ${obj[2]}`)
const str1 = prompt('enter the key');
console.log(obj[str1])
