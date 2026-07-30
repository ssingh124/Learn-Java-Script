console.log("JavaScript Loaded!");

document.getElementById("btn").addEventListener("click", function () {

    alert("Welcome to the website.");

});
document.getElementById("byebtn").addEventListener("click", function () {

    alert("Goodbye! See you tomorrow.");

});

// ---------Variables ----------//

//Creating Recipe Variables

const recipeTitle = "Fudgy Double Chocolate Brownies";
const time = 35;
const difficultyLevel = "Easy";
const rating = 5;
const calories = 280;
const authorName = "Satnam Singh";
const dishImageUrl = "recipe-image.jpg";

//Select HTML element by ID
const imgElement = document.getElementById("dish-img");
const titleElement = document.getElementById("title");
const authorNameElement = document.getElementById("author-name");
const timeElement = document.getElementById("time");
const ratingElement = document.getElementById("rating");
const difficultyElement = document.getElementById("difficulty");
const caloriesElement = document.getElementById("calories");

//Display Values on HTML Side

imgElement.src= dishImageUrl;
titleElement.textContent = recipeTitle;
authorNameElement.textContent = authorName;
timeElement.textContent = time + " mins"; // Added text units for clarity
ratingElement.textContent = "⭐ ".repeat(rating); // Converts the number 5 into 5 stars!
difficultyElement.textContent = difficultyLevel;
caloriesElement.textContent = calories + " kcal"; 



//----------Data Types-----------//

const developerName = "Satnam";
const age = 25;
const isLearningJavaScript = true;
let futureSkill;
let currentJob = null;


document.getElementById("string-output").textContent =
`String: ${developerName}`;

document.getElementById("number-output").textContent =
`Number: ${age}`;

document.getElementById("boolean-output").textContent =
`Boolean: ${isLearningJavaScript}`;

document.getElementById("undefined-output").textContent =
`Undefined: ${futureSkill}`;

document.getElementById("null-output").textContent =
`Null: ${currentJob}`;

//--------Operators---------//

const productName = "Laptop";

const price = 999;

let quantity = 2;

const discount = 100;

const subtotal = price * quantity;

const finalPrice = subtotal - discount;

document.getElementById("product-name").textContent =
`Product: ${productName}`;

document.getElementById("product-price").textContent =
`Price: $${price}`;

document.getElementById("quantity").textContent =
`Quantity: ${quantity}`;

document.getElementById("subtotal").textContent =
`Subtotal: $${subtotal}`;

document.getElementById("discount").textContent =
`Discount: $${discount}`;

document.getElementById("final-price").textContent =
`Final Price: $${finalPrice}`;

//------------Conditions----------//

// Even or Odd Checker

document.getElementById("check-number")
.addEventListener("click", function(){

    // Get value from input box
    const number = document.getElementById("number-input").value;


    // Convert string into number
    const enteredNumber = Number(number);


    // Check if number is even or odd

    if(enteredNumber % 2 === 0){

        document.getElementById("result").textContent =
        `${enteredNumber} is an Even Number`;

    }
    else{

        document.getElementById("result").textContent =
        `${enteredNumber} is an Odd Number`;

    }

});

//------------Loops--------//

document.getElementById("print-loop")
.addEventListener("click", function () {

    const loopNumber = document.getElementById("loop-number").value;
    const enteredLoopNumber = Number(loopNumber);

    let output = "";

    for (let i = 1; i <= enteredLoopNumber; i++) {
        output += `${i} `;
    }

    document.getElementById("result-loop").textContent = output;

});

//-------------Functions with PERAMETERS-----------//

// Function with a parameter
function showMessage(name) {

    alert(`Welcome to the website, ${name}!`);

}

// Button click
document.getElementById("show-message-btn")
.addEventListener("click", function () {

    // Get the name from the input
    const userName = document.getElementById("user-name").value;

    // Call the function and pass the name
    showMessage(userName);

});


//-------------DOM (Document Object Model)-----------//

//--------Change Text
document.getElementById("change-title-btn")
.addEventListener("click", function () {

   document.getElementById("dom-title").textContent = "Welcome to the DOM Section!";

});

//---------Change Color
document.getElementById("change-color-btn")
.addEventListener("click", function () {

   document.getElementById("dom-color").style.color = "blue";;

});

//-------------Change Image 
document.getElementById("image-btn")
.addEventListener("click", function () {

    document.getElementById("profile-image").src =
    "./bulbon.jpeg";

});


