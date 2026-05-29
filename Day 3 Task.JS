// 1. Student Login Check
let username = prompt("Enter Username");
let password = prompt("Enter Password");

if(username == "admin" && password == "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}


// 2. ATM Balance System
let balance = 5000;
let amount = prompt("Enter Withdraw Amount");

if(amount < balance) {
    console.log("Withdraw Success");
} else {
    console.log("Insufficient Balance");
}


// 3. Traffic Signal Project
let signal = "red";

switch(signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// 4. Age Eligibility Checker
let age = prompt("Enter Age");

if(age >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}


// 5. Shopping Discount System
let price = prompt("Enter Product Price");

if(price > 5000) {
    console.log("20% Discount");
}
else if(price > 3000) {
    console.log("10% Discount");
}
else {
    console.log("No Discount");
}


// 6. Password Strength Checker
let pass = prompt("Enter Password");

if(pass.length >= 8) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}


// 7. Mobile Battery Warning
let battery = prompt("Enter Battery %");

if(battery <= 10) {
    console.log("Battery Low");
}
else if(battery <= 50) {
    console.log("Battery Medium");
}
else {
    console.log("Battery Full");
}


// 8. Employee Salary Bonus
let salary = 40000;

if(salary >= 50000) {
    console.log("15% Bonus");
}
else if(salary >= 30000) {
    console.log("10% Bonus");
}
else {
    console.log("5% Bonus");
}


// 9. Online Food Order
let orderAmount = prompt("Enter Order Amount");

if(orderAmount > 499) {
    console.log("Free Delivery");
} else {
    console.log("Delivery Charge Added");
}


// 10. Movie Ticket Booking
let movieAge = prompt("Enter Age");

if(movieAge < 5) {
    console.log("Free Ticket");
}
else if(movieAge < 18) {
    console.log("Child Ticket");
}
else {
    console.log("Adult Ticket");
}
