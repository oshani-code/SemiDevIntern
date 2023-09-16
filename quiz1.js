const questions = [
    {
        question: "Capital of Turkey,starts with A ?",
        options: ["Konya", "Aydin", "Ankara", "Burdur"],
        correctAnswer: "Ankara"
    },
    
    {
        question: "After which animals are the Canary Islands named,starts with D",
        options: ["Duck", "Rabbit", "Dogs", "Dolphin"],
        correctAnswer: "Dogs"
    },

    {
        question: "How many months have 31 days",
        options: ["6", "7", "4", "8"],
        correctAnswer: "7"
    },

    {
        question: "In which city was the Titanic built, starts with B",
        options: ["Auckland", "Belfast", "Bath", "Bradford"],
        correctAnswer: "Belfast"
    },

    {
        question: "The world's largest office building",
        options: ["CCTV Headquarters", "Surat Diamond Bourse", "SAS i-tower", "Pentagon"],
        correctAnswer: "Surat Diamond Bourse"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionContainer.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
});

displayQuestion();
