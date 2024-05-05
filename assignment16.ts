//QUESTION: 16




// console.log(`PREVIOUS LIST`);
let guestList : string[] = ["noshaba", "sana", "fabia", "toba"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n\n`);
// }
// console.log(`NEW LIST`);
let leaveGuestList : string = "toba";
let specialGuest : string = "Babar Azam";
guestList[4] = specialGuest;
for(let i=0; i<guestList.length; i++){
    console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n`);
}
console.log(`\n\n Arrange big dinner table so we add more guest\n\n`);

guestList.unshift("M.Rizwan", "Shadab Khan", "Naseen Shah");
for(let i=0; i<guestList.length; i++){
    console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n`);
}