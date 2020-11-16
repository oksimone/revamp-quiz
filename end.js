
var startAgainBtn = document.querySelector("#backToStart");
var highscoreContain = document.querySelector("#highscoreContainer")
// highscore list with intials & scores
var highscoreList = document.querySelector("#highscoreList");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

var mostRecentScore = JSON.parse(localStorage.getItem("userData"))


function showHighScore(){
   
    if (mostRecentScores !== null ){
        scores.className = "scoresList"
        
        for(let i = 0; i < mostRecentScore.length; i++){
            var intials = mostRecentScore[i].inits;
            var score = mostRecentScore[i].scores;
            var scores = document.createElement("li")
            scores.innerHTML = intials + " " + score;
            highscoreList.appendChild(scores)
         
            highscoreList.appendChild(newList)
        }
     
    }

}
showHighScore();




startAgainBtn.addEventListener("click", function(){
    location.href = "index.html"
})