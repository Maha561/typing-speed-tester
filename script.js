

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

    const randomIndex = Math.floor(Math.random()*sentences.length);
    const randomSentence = sentences[randomIndex];
    /*

    1. sentences.length

This gives the total number of sentences in the array.

In your case, sentences.length = 7.

2. Math.random()

Generates a random number between 0 (inclusive) and 1 (exclusive).
Example: 0.2345, 0.6789, etc.

3. Math.random() * sentences.length

Multiplies that random number by the length of the array (7).

Now the result is a number between 0 and 7 (not including 7).
Example: 3.45, 5.89, etc.

4. Math.floor(...)

Math.floor() removes the decimal part (rounds down).

So 3.45 → 3, 5.89 → 5.

This ensures we get a valid array index (0–6 for 7 sentences).

5. const randomSentence = sentences[randomIndex];

Finally, this picks a sentence from the array using that random index.

Example: If randomIndex = 2, then randomSentence = "Practice makes perfect when it comes to typing."

    */

   // Show the sentence
    sentenceDisplay.textContent = randomSentence;

     typingArea.disabled = false;
     typingArea.value="";
     typingArea.focus();

     //.focus() automatically places the cursor inside the textarea.

      // Reset results
    wpmDisplay.textContent = "word per time :";
    accuracyDisplay.textContent = "accuracy :";
    backspaceDisplay.textContent = "backspace :";

     // Start the timer
    startTime = new Date().getTime();

    // Reset backspace count
    backspaceCount = 0;



    

});
