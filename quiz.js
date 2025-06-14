// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if any option was selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare user answer with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 5: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
