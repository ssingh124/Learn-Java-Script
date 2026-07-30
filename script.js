console.log("JavaScript Loaded!");

document.getElementById("btn").addEventListener("click", function () {

    alert("Welcome to the website.");

});
document.getElementById("byebtn").addEventListener("click", function () {

    alert("Goodbye! See you tomorrow.");

});


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