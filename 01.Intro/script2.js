

//Script 1

{
    let number = 0
    if (number > 0) {
        console.log("The number is positive");
    }
    else if (number < 0) { console.log("The number is negative"); }

    else if (number == 0)
        console.log("The number is zero");

}


// Script 2


{
    let number = 1
    if (number % 2) {
        console.log("The number is odd");
    }
    else {
        console.log("The number is even");
    }



}

// Script 3

{
    let number1 = 2
    let number2 = 9
    if (number1 > number2) {
        console.log("first number is greater than second");
    }
    else if (number1 < number2) {
        console.log("second number is greater than first");
    }
    else if (number1 == number2) {
        console.log("numbers are equal");
    }

}

//Script 4

{

    let grade = 100
    if (grade >= 95) {
        console.log("High Honour Grade");
    }
    else if (grade >= 85) {
        console.log("Honour Grade");
    }
    else if (grade >= 65) {
        console.log("Grade");
    }
    else if (grade >= 0) {
        console.log("Failed");
    }

}

// Script 5

{
let age = undefined
if (age <= 18) {
    console.log("The price is 10 AZN")
}
else if (age <= 35){
    console.log("The price is 25 AZN");
}
else if (age <= 100)
    console.log("The price is 35 AZN");
else if (age <= 1000)
    console.log("The price is 1000 AZN");
else 
console.log("You didn't entered your age");
}

// Script 6

{
   let amount = 500
 if ((amount > 0) && (amount < 20)){
    console.log("1 AZN discount");
 }
 else if ((amount >= 20) && (amount < 50)){
    console.log("5 AZN discount");
 }
else if ((amount >= 50) && (amount < 500)){
    console.log("10 AZN discount");
}
else if ((amount >= 500) && (amount < 1000)){
    console.log("50 AZN discount");
}
else {
    console.log("No discount");;
}

}

// Script 7

{

let number = prompt("Enter you number")

if (number == 16){
    console.log("Congrats! You won");
}
else if (number < 16){
    console.log("The number was too low");
}
else if (number > 16){
    console.log("The number was too high");
}
else {
    console.log("You didn't entered the number");
}

}








