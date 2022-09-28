console.log("From external script");
let age = 16;

if(age >= 18){
    console.log("You can campaign for Peter Obi");
} else {
    console.log("Kindly mind your busines");
}

// let status;

// if(age >= 18) status = "Major"
// else status = "Minor"

// console.log(status);

let status_ = age >= 18 ? "Major" : "Minor"
console.log(status_);



let partyMan = `He is a ${age >= 18 ? "Major" : "Minor"}, He can ${age >= 18 ? "" : "not"
} vote`;



console.log(partyMan);



let day = "Sunday";

switch(day){
    case "Monday":
    case "Tuesday":
        console.log("It's a week day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend, enjoy!");
        break;
    default:
        console.log("You have problem");
}



for (let i = 0; i <= 10; i++) console.log(i);

for (var i = 1; i <= 10; i++){
    console.log(i);
}
console.log(i);



let count = 1;
while(count <= 10){
    console.log(count);
    count++;
}


do {
    console.log(count);
    count++
} while(count <= 10)




/**
 *  function declaration
 */
function sum(a, b){
    return a+b;
}

let add = sum(3, 5);
console.log(add);
console.log(sum(5, 6));


if (true){

    var s = 10;
    let g = 12;
    
    console.log("c", c);
}




// arrow function funtion declaration 
const square = num => num ** 2;
    console.log(square(8));