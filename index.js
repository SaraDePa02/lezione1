import {somma} from "./math.js";

console.log("script start");    
let msg = 'ciao';

const pi =3.14; 

if(msg === 'ciao'){
    console.log('il messaggio è ciao');
} 
else{
    console.log("il messaggio non contiene ciao")
}

for(let i =0; i<10;i++){
    console.log(i);
}

let i=0;
while(i<10){
    console.log("--" + i);
    i+=1;
}



const somma1 = (n1,n2) => {
    let res = n1 + n2; 
    return res; 
}
console.log('somma1: ' + somma1(15,10));