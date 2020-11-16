var revampTitle = document.querySelector("#revampTitle");
var revampDescription = document.querySelector("#revampDescription");
var timerContainer = document.querySelector("#timerContainer");
var endGameContainer = document.querySelector("#endGameContain")
var question = document.querySelector("#description");
var timer = document.querySelector("#timer");
var timeDisplay = document.querySelector("#timeDisplay");
var beginbtn = document.querySelector("#beginBtn");
var submitScore = document.querySelector("#submitScore")
var rightOrWrong = document.question("#rightOrWrong")
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


function writeQuestion() {
 question.textContent = allQuestions.question
  // allQuestions.choices
  // choiceContainer.innerHTML = "";

  for (var i = 0; i < allQuestions.choices.length; i++) {
  var newAnswerBtn = document.createElement("button");
  newAnswerBtn.setAttribute("value", currentQuestion.choices[i]);
  newAnswerBtn.textContent = currentQuestion.choices[i];
  answers.appendChild(newAnswerBtn);

    // newAnswerBtn.setAttribute("style", "display: visible")
    // onclick function for clicking the answer
    // newAnswerBtn.onclick = answerClick;
    // console.log(currentQuestion)

    newAnswerBtn.addEventListener("click", newQuestion)
  }
}

// function for a new question to appear

function newQuestion(e){
currentIndex++
  if (currentIndex < allQuestions.length) {
    answered(e.target.innerHTML === answerClick.answer)
    answers.innerHTML = ""

    if(currentIndex > allQuestions.length){
      answerClick = questions [currentIndex]
      newQuestion(answerClick)
    }else {
      currentIndex = 0
      newQuestion(answerClick)
    }

  } else {
    console.log("END GAME")
    endGame();
    // make function for end of game
  }
  
  
  

}


function alert(answered){
  if(answered){
    rightOrWrong.innerHTML = "Correct!"
  } else{
    rightOrWrong.innerHTML = "Wrong!"
    time = time - 15
    timer.innerHTML = time
  }
  setTimeout(function(){
    rightOrWrong.innerHTML = ""
  }, 1000)

  }
function endGame(){
  // deciding if i want to show the user their score when they enter their initials
  endGameContainer.classList.remove("d-none");
  timerContainer.classList.remove("d-none")
}




