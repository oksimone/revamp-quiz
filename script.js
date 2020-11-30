var revampTitle = document.querySelector("#revampTitle");
var revampDescription = document.querySelector("#revampDescription");
var timerContainer = document.querySelector(".timerContainer");
var endGameContainer = document.querySelector("#endGameContain");
var timer = document.querySelector("#timer");
var timeDisplay = document.querySelector("#timeDisplay");
var beginbtn = document.querySelector("#beginBtn");
var submitScore = document.getElementById("submitScore");
var rightOrWrong = document.querySelector("#rightOrWrong");
var answerClick;
var answers = document.querySelector("#answerContain");
var currentIndex = 0;
// var score = 0;
var time = 120;
var highscores = [];
var mostRecentScores = JSON.parse(localStorage.getItem("userData"));

var allQuestions = [
  {
    question: "Which character said this quote: 'We can stay up late, swapping manly stories, and in the morning, I'm making waffles!'",
    choices: ["shrek", "puss n boots", "donkey", "fiona"],
    answer: "donkey",
  },
  {
    question: "What animal did King Harold turn into in Shrek 2?",
    choices: ["pig", "frog", "duck", "bird"],
    answer: "frog",
  },
  {
    question: "Which Shrek film did Donkey say this line, 'Now I'm a flyin' talkin' donkey! You might seen a housefly. Maybe even a superfly. But I bet you ain't never seen a donkey fly!'",
    choices: ["Shrek", "Shrek 2", "Shrek the Third", "Shrek Forever After"],
    answer: "Shrek",
  },
  {
    question: "Who was the name of the Giant Gingerbread that appeared in Shrek 2?",
    choices: ["mongo", "cinderella", "gingy", "arty"],
    answer: "mongo",
  },
  {
    question: "Which character said this quote: 'Blue flower, red thorns, blue flower, red thorns. This would be so much easier if I wasn't colorblind!'",
    choices: ["lord farquad", "fiona", "gingy", "donkey"],
    answer: "donkey",
  },
  {
    question: "Which character said this quote: 'That'll do Donkey. That'll do'",
    choices: ["lord farquad", "shrek", "puss n boots", "prince harold"],
    answer: "shrek",
  },
  {
    question: "What potion did Shrek and Donkey take in Shrek 2?",
    choices: ["stool softener", "hex locks", "handsome", "happily ever after"],
    answer: "happily ever after",
  },
  {
    question: "Who was this bachelorette contestant that Mirror Man was describing in Shrek? 'Bachelorette number two is a cape-wearing girl from the land of fancy. Although she lives with seven other men, she's not easy. Just kiss her dead frozen lips and find out what live wire she is.'",
    choices: ["snow white", "cinderella", "princess fiona", "rapunzel"],
    answer: "snow white",
  },
  {
    question: "In Shrek, what does Princess Fiona turn into when the sun sets?",
    choices: ["dragon", "prince", "ogre", "wolf"],
    answer: "ogre",
  },
  {
    question: "Shrek goes on a journey to find which character to take the throne as a new king of Far Far Away?",
    choices: ["Lancelot", "Prince Charming", "Captain Hook", "Arthur"],
    answer: "Arthur",
  },
];

beginbtn.addEventListener("click", begin);

// begin function
function begin() {
  // console.log(beginbtn("clicked"))
  if (mostRecentScores !== null) {
    highscores = mostRecentScores;
  }
  revampTitle.classList.add("d-none");
  revampDescription.classList.add("d-none");
  beginbtn.classList.add("d-none");
  timerContainer.classList.remove("d-none");
  answerClick = allQuestions[currentIndex];
  
  // insert function for displaying questions
  // insert countdown timer function
  writeQuestion();
  countDown();
}
// submit score function

submitScore.addEventListener("click", function (event) {
  event.preventDefault()
  var initials = document.getElementById("initials").value;
  // calling highscore page function
  endPage(initials, time);
  location.href = "end.html"
});

// Timer
function countDown() {
  var timeInterval = setInterval(function () {
    timer.innerHTML = time;
    time--;
  }, 1000);
}

function endPage(inits, scores) {

  var userData = {
    inits: inits,
    scores: scores
  };
  highscores.push(userData);
  
  localStorage.setItem("userData", JSON.stringify(highscores));
  location.href = "end.html"
}


function writeQuestion() {
  var currentQuestion = allQuestions[currentIndex]
  var questionDescription = document.getElementById("description");
  questionDescription.textContent = currentQuestion.question;
  
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    
    var newAnswerBtn = document.createElement("button");
    newAnswerBtn.className = "btn btn-light btn-md"
    newAnswerBtn.setAttribute("style", "margin-right: 5px")
    newAnswerBtn.setAttribute("value", currentQuestion.choices[i]);
    newAnswerBtn.textContent = currentQuestion.choices[i];
    answers.appendChild(newAnswerBtn);

    newAnswerBtn.addEventListener("click", newQuestion);
  }
}

// function for a new question to appear

function newQuestion(e) {
  currentIndex++;
  if (currentIndex < allQuestions.length) {
    answered(e.target.innerText === answerClick.answer);
    answers.innerHTML = "";

    if (currentIndex < allQuestions.length) {
      answerClick = allQuestions[currentIndex];
      writeQuestion(answerClick);
    } else {
      currentIndex = 0;
      writeQuestion(answerClick);
    }
  } else {
    console.log("END GAME");
    endGame();
    // make function for end of game
  }
}

function answered(response) {
  if (response) {
    rightOrWrong.innerHTML = "Correct!";
  } else {
    rightOrWrong.innerHTML = "Wrong!";
    time = time -15;
    timer.innerHTML = time;
  }
  setTimeout(function () {
    rightOrWrong.innerHTML = "";

  }, 1000);

}
function endGame() {
  // deciding if i want to show the user their score when they enter their initials
  endGameContainer.classList.remove("d-none");
  timerContainer.classList.remove("d-none");
  timerContainer.classList.add("d-none");
}

  