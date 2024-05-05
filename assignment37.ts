//QUESTION: 37




function make_shirt(size: string = "large", message:string = "I love typeScript"){
    console.log(`make a ${size} t-shirt, and ${message} printed on it.`);
} 

make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");