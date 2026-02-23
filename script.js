
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 
  
  
let score = 0;

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const timerDisplay = document.getElementById("timer");
const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let isAnswerSelected = false;

const questions = [
  {
    question: "What is the chemical formula for table salt?",
    answers: ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    correct: "NaCl"
  },
  
  {
    question: "Which programming language is primarily used for styling web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
  },
  {
    question: "Who composed the Kenyan national anthem?",
    answers: [
      "Graham Hyslop and Kenyan Music Committee",
      "Fadhili Williams",
      "Thomas Mboya",
      "Daudi Kabaka"
    ],
    correct: "Graham Hyslop and Kenyan Music Committee"
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    answers: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    correct: "Cerebellum"
  },

  {
    question: "Which country has won the most FIFA World Cups?",
    answers: ["Germany", "Italy", "Argentina", "Brazil"],
    correct: "Brazil"
  },

  {
    question: "What vitamin is produced when the skin is exposed to sunlight?",
    answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correct: "Vitamin D"
  },

  {
    question: "What is the unit of electric current?",
    answers: ["Ampere", "Volt", "Ohm", "Watt"],
    correct: "Ampere"
  },

  {
    question: "What is the boiling point of water in Celsius?",
    answers: [ "90°C", "100°C", "80°C", "120°C"],
    correct: "100°C"
  },
  
  {
    question: "Which day is celebrated as Madaraka Day in Kenya?",
    answers: [ "October 20th", "December 12th", "May 1st", "June 1st"],
    correct: "June 1st"
  },
   
  {
    question: "Which Kenyan city is known as the 'Green City in the Sun'?",
    answers: [ "Nakuru", "Eldoret", "Nairobi", "Kisumu"],
    correct: "Nairobi"
  }
];


startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizContainer.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
    shuffleArray(questions); // Shuffle questions
  showQuestion();
});

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  currentQuestion.answers.forEach((answer, index) => {
    const btn = answerButtons[index];
    btn.textContent = answer;
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up!";
      answerButtons.forEach(btn => btn.disabled = true);
      showAnswerBtn.style.display = "inline-block";
      isAnswerSelected = true;
    }
  }, 1000);
}

answerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isAnswerSelected) return;
    isAnswerSelected = true;
    clearInterval(timer);

    const selectedAnswer = btn.innerText;
    const correctAnswer = questions[currentQuestionIndex].correct;

    // Disable all buttons
    answerButtons.forEach(button => {
      button.disabled = true;
    });

    // Only highlight the clicked one
    if (selectedAnswer === correctAnswer) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("wrong");
    }

    nextBtn.style.display = "inline-block";
  });
});


nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
});

showAnswerBtn.addEventListener("click", () => {
  if (!isAnswerSelected) return;
  const correctAnswer = questions[currentQuestionIndex].correct;
  answerButtons.forEach(btn => {
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });
  showAnswerBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
});

function resetState() {
  answerButtons.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
  showAnswerBtn.style.display = "none";
  isAnswerSelected = false;
}

function showFinalScore() {
  quizContainer.innerHTML = `
    <div class="result-screen">
      <h2>Quiz Completed!</h2>
      <p>You scored <strong>${score}</strong> out of <strong>${questions.length}</strong></p>
      <button id="restart-btn">Play Again</button>
    </div>
  `;

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    location.reload(); // Reload to restart
  });
}