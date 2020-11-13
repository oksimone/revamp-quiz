var revampTitle = document.querySelector("#revampTitle");
var revampDescription = document.querySelector("#revampDescription");
var timerContainer = document.querySelector("#timerContainer");
var question = document.querySelector("#description");
var timer = document.querySelector("#timer");
var timeDisplay = document.querySelector("#timeDisplay");
var beginbtn = document.querySelector("#beginBtn");
var submitScore = document.querySelector("#submitScore")
var answerClick;
var answers = document.querySelector("#answerContain");
var currentIndex = 0;
var score = 0;
var time = 60;
var highscores = [];
var mostRecentScores = JSON.parse(localStorage.getItem("userData"));


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
  }
];


beginbtn.addEventListener("click", begin)

// begin function
    function begin(){
      if (mostRecentScores !==null){
        highscores = mostRecentScores;
      }
      revampTitle.classList.add("d-none")
      revampDescription.classList.add("d-none")
      beginbtn.classList.add("d-none")
      timerContainer.classList.remove("d-none")
      answerClick = allQuestions[currentIndex]

      // insert function for displaying questions
      // insert countdown timer function
    }

    // submit score function

submitBtn.addEventListener("click", function(){
  var intitals = document.getElementById("intials").value
  // calling highscore page function
  endPage(intials, score)
});

// Timer
function countDown() {
  var timeInterval = setInterval(function () {
    timeDisplay.innerHTML = score;
    score --;

  }, 1000);
}

function endPage(inits, scores){
  var userData = {
    inits: inits,
    scores:scores
  }
  highscores.push(userData)

  localStorage.setItem("userData", JSON.stringify(highscores))
  location.href = "end.html"
}

// function writeQuestion() {
//   var currentQuestion = allQuestions[currentIndex];
//   const choiceContainer = document.querySelector("#questionContain");
//   questions.textContent = currentQuestion.question;
//   choiceContainer.innerHTML = "";
//   // const choices = document.querySelector("#choiceOne");

//   for (var i = 0; i < currentQuestion.choices.length; i++) {
//     var newAnswerBtn = document.createElement("button");
//     newAnswerBtn.setAttribute("value", currentQuestion.choices[i]);
//     newAnswerBtn.textContent = currentQuestion.choices[i];
//     // newAnswerBtn.setAttribute("style", "display: visible")
//     choiceContainer.appendChild(newAnswerBtn);
//     // onclick function for clicking the answer
//     newAnswerBtn.onclick = answerClick;
//     console.log(currentQuestion)
//   }
// }

// function answerClick() {
//   if (this.value !== allQuestions[currentIndex.answer]) {
//     secondsLeft = secondsLeft - 10;
//   }

//   currentIndex++;

//   if (currentIndex === allQuestions.length) {
//     console.log("end game");
//     window.location.href = "end.html";
//     timeLeftDisplay.innerHTML = secondsLeft;
//     endGame();


//   } else {
//     writeQuestion();
//   }
// }

// function enterIntitals (){
//   intialsInput =  document.querySelector("intials").value.trim()
//   var newScore = {
//       intials: intialsInput,
//       score: secondsLeft
//   }

//   const highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"))|| [];
//   highscoreArr.push(newScore)
//   localStorage.setItem("highscoreArr", JSON.stringify(highscoreArr))
  
// }


