//QUESTION: 42
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_name = ["harry", "rimsha", "petter"];
let great_magician = make_great(magician_name);
show_magicians(great_magician);
export {};
