

const sentences = [
    "The quick brown fox jumps over the lazy dog.",          // Easy
    "Typing speed tests are fun and challenging.",           // Easy-medium
    "Practice makes perfect when it comes to typing.",       // Medium
    "JavaScript is amazing for interactive web apps.",       // Medium
    "Complex sentences require more focus and precision.",   // Hard
    "Accuracy matters more than speed when learning code.", // Hard
    "Consistent practice improves both speed and accuracy."  // Medium-hard
];

// 2️⃣ Get HTML elements

const StartButton = document.getElementById("startButton"); // this is know when the button is clicked

const sentenceDisplay = document.getElementById("start"); // display a random sentence
const typingArea = document.getElementById("inputs"); // user typing
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const backspaceDisplay = document.getElementById("backspace");

let startTime;       // to store start time
let backspaceCount;  // to track backspaces

// here we are using let because we can change the data of the variable 
// if we use const we cant change


StartButton.addEventListener("click",() =>{

    

});
