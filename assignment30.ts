//QUESTION: 30




let hello_admin :string[] = ["rimsha", "admin", "adil", "tayyaba", "shaban", "adeel"];

for(let user of hello_admin){
    if(user === "admin"){
        console.log("Hello Admin,\n would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user}, \n Thank you for logging in again.`)
    }
}






