//QUESTION: 40

function make_album1(artist_name: string, album_title: string) {
  return { artist_name, album_title };
}

let album1 = make_album1("rimsha", "The Code World");
let album2 = make_album1("fatima", "Speak Code Language");
let album3 = make_album1("zohaib", "Dive Code River");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(
  artist_name: string,
  album_title: string,
  album_tracks: number
) {
  return { artist_name, album_title, album_tracks };
}

let album4 = make_album2("rimsha", "The Code World", 45);
let album5 = make_album2("fatima", "Speak Code Language", 85);
let album6 = make_album2("zohaib", "Dive Code River", 43);

console.log(album4);
console.log(album5);
console.log(album6);
