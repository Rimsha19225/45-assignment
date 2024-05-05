//QUESTION: 32
let current_users = [
    "zaryab",
    "rimsha",
    "adil",
    "tayyaba",
    "shaban",
    "adeel",
    "babar azam",
    "shaheen shah afridi",
];
let new_users = [
    "babar azam",
    "shaheen shah afridi",
    "rizwan",
    "hassan ali",
    "naseem shah",
    "ubaid shah",
];
new_users.forEach((new_users) => {
    if (current_users.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new username.`);
    }
    else {
        console.log(`${new_users} is available.`);
    }
});
export {};
