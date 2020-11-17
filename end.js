
var startAgainBtn = document.querySelector("#backToStart");
var clearScoresBtn = document.querySelector("#clearBtn")
var highscoreContain = document.querySelector("#highscoreContainer")
// highscore list with intials & scores
var highscoreList = document.querySelector("#highscoreList");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

var mostRecentScore = JSON.parse(localStorage.getItem("userData"))


function showHighScore(){
   
    if (mostRecentScore !== null ){
        // scores.className = "scoresList"
        
        for(let i = 0; i < mostRecentScore.length; i++){
            var initials = mostRecentScore[i].inits;
            var score = mostRecentScore[i].scores;
            var scores = document.createElement("li")
            scores.innerHTML = initials + " " + score;
            highscoreList.appendChild(scores)
         
            // highscoreList.appendChild(newList)
        }
     
    }

}
showHighScore();


startAgainBtn.addEventListener("click", function(){
    location.href = "index.html"
})

clearScoresBtn.addEventListener("click", function(){
    highscoreList.innerHTML = "";
    window.localStorage.clear()
})