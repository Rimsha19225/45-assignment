//QUESTION: 43
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_name = ["harry", "rimsha", "petter"];
let copy_magician_names = magician_name.slice();
let copy_great_magician = make_great(copy_magician_names);
console.log("original array");
show_magicians(magician_name);
console.log("\ncoppied array");
show_magicians(copy_great_magician);
export {};
