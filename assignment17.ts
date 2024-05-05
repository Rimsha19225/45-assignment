//QUESTION: 17




let guestList : string[] = ["noshaba", "sana", "fabia", "toba"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n\n`);
// }
let leaveGuestList : string = "toba";
let specialGuest : string = "Babar Azam";
guestList[4] = specialGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n`);
// }
// console.log(`\n\n Arrange big dinner table so we add more guest\n\n`);

guestList.unshift("M.Rizwan", "Shadab Khan", "Naseen Shah");
// for(let i=0; i<guestList.length; i++){
//     console.log(`dear respected ${guestList[i]}, \n I will invite you on birthday party at Karachi. \n Thank You! \n`);
// }
console.log(`\n unfortunatly we cannot arrange big table, only two people allow.`);
while(guestList.length>2){
    let removeGuest = guestList.pop();
    console.log(`Sorry dear! \n ${removeGuest}, you are not invited for birthday party.`);
}
console.log(`\n\n\n`);
for(let i=0; i<guestList.length; i++){
    console.log(`dear respected ${guestList[i]}, \n yes you invited on tomorrow birthday party. \n Thank You! \n`);
}
guestList.splice(0,2);
console.log(guestList);