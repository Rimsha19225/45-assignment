//QUESTION: 21

import { verify } from "crypto"




interface item{
    name:string,
    price:number

}

const vagetable : item ={
    name: "potato",
    price: 100
}

const fruite : item ={
    name: "mango",
    price: 200
}

console.log(`i want to buy 1kg ${vagetable.name}, there price is: ${vagetable.price}`);
console.log(`i want to buy 1kg ${fruite.name}, there price is: ${fruite.price}`);