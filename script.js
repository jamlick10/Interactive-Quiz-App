
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
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markdown Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "What is the capital city of Kenya?",
    answers: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
    correct: "Nairobi"
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which footballer is nicknamed 'The Egyptian King'?",
    answers: ["Mohamed Salah", "Trezeguet", "Amr Zaki", "Ahmed Hegazi"],
    correct: "Mohamed Salah"
  },
  {
    question: "Which blood cells help fight infections?",
    answers: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
    correct: "White blood cells"
  },
  {
    question: "Which year did Kenya gain independence?",
    answers: ["1963", "1960", "1964", "1965"],
    correct: "1963"
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    correct: "NaCl"
  },
  {
    question: "Who was Kenya's first vice president?",
    answers: ["Jaramogi Oginga Odinga", "Tom Mboya", "Daniel Moi", "George Saitoti"],
    correct: "Jaramogi Oginga Odinga"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: "Mars"
  },
  {
    question: "What does URL stand for?",
    answers: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Routing Language",
      "User Resource Login"
    ],
    correct: "Uniform Resource Locator"
  },
  {
    question: "Which programming language is primarily used for styling web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
  },
  {
    question: "Which planet has the most moons?",
    answers: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correct: "Saturn"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Osmium", "Iron"],
    correct: "Oxygen"
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
    question: "How many counties are there in Kenya?",
    answers: ["47", "48", "46", "50"],
    correct: "47"
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    answers: ["Qatar", "Russia", "USA", "Brazil"],
    correct: "Qatar"
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    answers: ["Brazil", "Germany", "Italy", "Argentina"],
    correct: "Brazil"
  },
  {
    question: "Who won the Ballon d'Or in 2023?",
    answers: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Cristiano Ronaldo"],
    correct: "Lionel Messi"
  },
  {
    question: "Which Kenyan river is the longest?",
    answers: ["Tana River", "Athi River", "Yala River", "Nzoia River"],
    correct: "Tana River"
  },
  {
    question: "What vitamin is produced when the skin is exposed to sunlight?",
    answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correct: "Vitamin D"
  },
  {
    question: "Who is the author of 'River Between'?",
    answers: ["Ngũgĩ wa Thiong'o", "Meja Mwangi", "Chinua Achebe", "Grace Ogot"],
    correct: "Ngũgĩ wa Thiong'o"
  },
  {
    question: "What is the national language of Kenya?",
    answers: ["Kiswahili", "English", "Luhya", "Kikuyu"],
    correct: "Kiswahili"
  },
  {
    question: "Which tag is used for JavaScript?",
    answers: ["<javascript>", "<script>", "<js>", "<code>"],
    correct: "<script>"
  },
  {
    question: "How many players start a football match per team?",
    answers: ["9", "10", "11", "12"],
    correct: "11"
  },
  {
    question: "Which Kenyan club is nicknamed 'K’Ogalo'?",
    answers: ["Gor Mahia", "AFC Leopards", "Tusker FC", "Sofapaka"],
    correct: "Gor Mahia"
  },
  {
    question: "Which town is famous for flamingos in Kenya?",
    answers: ["Nakuru", "Naivasha", "Kisumu", "Eldoret"],
    correct: "Nakuru"
  },
  {
    question: "What is the unit of electric current?",
    answers: ["Ampere", "Volt", "Ohm", "Watt"],
    correct: "Ampere"
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: ["100°C", "90°C", "80°C", "120°C"],
    correct: "100°C"
  },
  {
    question: "Which day is celebrated as Madaraka Day in Kenya?",
    answers: ["June 1st", "October 20th", "December 12th", "May 1st"],
    correct: "June 1st"
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Skin", "Liver", "Heart", "Brain"],
    correct: "Skin"
  },
  {
    question: "Which organ pumps blood throughout the body?",
    answers: ["Heart", "Lungs", "Kidneys", "Liver"],
    correct: "Heart"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    correct: "Nitrogen"
  },
  {
    question: "Which Kenyan city is known as the 'Green City in the Sun'?",
    answers: ["Nairobi", "Nakuru", "Eldoret", "Kisumu"],
    correct: "Nairobi"
  },
  {
  question: "Which vitamin is produced when the human skin is exposed to sunlight?",
  answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  correct: "Vitamin D"
},
  {
    question: "What device is used to measure temperature?",
    answers: ["Thermometer", "Barometer", "Altimeter", "Manometer"],
    correct: "Thermometer"
  },
  {
    question: "What was the Mau Mau uprising?",
    answers: [
      "Kenyan independence rebellion",
      "Religious movement",
      "Tribal conflict",
      "Colonial tax protest"
    ],
    correct: "Kenyan independence rebellion"
  },
  {
    question: "Who was the second  vice president of Kenya?",
    answers: ["Daniel arap Moi", "Mwai Kibaki", "Uhuru Kenyatta", "Raila Odinga"],
    correct: "Daniel arap Moi"
  },
  {
    question: "Which natural wonder is shared between Kenya and Tanzania?",
    answers: ["Mount Kilimanjaro", "Lake Victoria", "Lake Nakuru", "Ngorongoro Crater"],
    correct: "Mount Kilimanjaro"
  },
  {
    question: "What is the main component of the sun?",
    answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
    correct: "Hydrogen"
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

    answerButtons.forEach(button => {
      button.disabled = true;
      if (button.innerText === correctAnswer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
    });

    if (selectedAnswer === correctAnswer) {
      score++;
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