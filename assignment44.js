//QUESTION: 44
function makeSandwich(...items) {
    console.log(`\n making a sandwich with the following items:`);
    items.forEach(singleItems => console.log(singleItems));
    console.log("Now enjoy sandwich \n");
}
makeSandwich("bread", "chicken", "cheese", "yougat", "egg");
makeSandwich("bread", "beef", "egg", "ketchup");
makeSandwich("bread", "butter");
export {};
