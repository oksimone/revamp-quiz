var currentIndex = 0;
var allQuestions = 0;
let secondsLeft = 45;


document.addEventListener("DOMContentLoaded", () => {
  const beginbtn = document.querySelector("#beginBtn");

  beginbtn.addEventListener("click", begin);
});

function begin() {
  window.location.href = "questions.html";
 
}

// Timer
function countDown() {
  const timeLeftDisplay = document.querySelector("#timer");
  setInterval(function () {
    if (secondsLeft <= 0) {
      clearInterval(secondsLeft);
      window.location.href = "end.html";
      endGame();
    }

    timeLeftDisplay.innerHTML = secondsLeft;
    secondsLeft -= 1;
  }, 1000);
}

let url = window.location.href;

window.onload = function () {
  if (url.indexOf("questions.html") !== -1) {
    countDown();
    writeQuestion();
  }
};

// questions
var allQuestions = [
  {
    question: "fill in the blank, Hydro _____",
    choices: ["cup", "mug", "flask", "flute"],
    answer: "flask",
  },
  {
    question: "the sky is what color?",
    choices: ["blue", "pink", "white", "depends on the day"],
    answer: "depends on the day",
  },
  {
    question: "what color is coffee?",
    choices: ["black", "yellow", "tan", "beige"],
    answer: "black",
  },
  {
    question:"how many licks does it take to get to the center of a tootsie pop?",
    choices: ["four", "twenty", "the world may never know", "ten"],
    answer: "the world may never know",
  },
];

function writeQuestion() {
  var questions = document.querySelector("#description");
  var currentQuestion = allQuestions[currentIndex];
  const choiceContainer = document.querySelector("#questionContain");
  questions.textContent = currentQuestion.question;
  choiceContainer.innerHTML = "";
  // const choices = document.querySelector("#choiceOne");

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var newAnswerBtn = document.createElement("button");
    newAnswerBtn.setAttribute("value", currentQuestion.choices[i]);
    newAnswerBtn.textContent = currentQuestion.choices[i];
    // newAnswerBtn.setAttribute("style", "display: visible")
    choiceContainer.appendChild(newAnswerBtn);
    // onclick function for clicking the answer
    newAnswerBtn.onclick = answerClick;
    console.log(currentQuestion)
  }
}

function answerClick() {
  if (this.value !== allQuestions[currentIndex.answer]) {
    secondsLeft = secondsLeft - 10;
  }

  currentIndex++;

  if (currentIndex === allQuestions.length) {
    console.log("end game");
    window.location.href = "end.html";
    timeLeftDisplay.innerHTML = secondsLeft;
    endGame();


  } else {
    writeQuestion();
  }
}

function enterIntitals (){
  intialsInput =  document.querySelector("intials").value.trim()
  var newScore = {
      intials: intialsInput,
      score: secondsLeft
  }

  const highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"))|| [];
  highscoreArr.push(newScore)
  localStorage.setItem("highscoreArr", JSON.stringify(highscoreArr))
  
}


