//QUESTION: 33
let array = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] == 1) {
        console.log(`${myNumber[i]}st`);
    }
    else if (myNumber[i] == 2) {
        console.log(`${myNumber[i]}nd`);
    }
    else if (myNumber[i] == 3) {
        console.log(`${myNumber[i]}rd`);
    }
    else if (myNumber[i] >= 4 && myNumber[i] <= 9) {
        console.log(`${myNumber[i]}th`);
    }
}
export {};
