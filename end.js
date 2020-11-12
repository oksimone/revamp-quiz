// submit initials
var submitBtn = document.querySelector("#submit");
var endGameContain = document.querySelector("#endGameContain");
var highscoreContain = document.querySelector("#highscoreContainer")

// highscore list with intials & scores
var highscoreList = document.querySelector("#highscoreList");
//
// const mostRecentScore = localStorage.getItem("mostRecentScore");

const highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"))|| [];


function endGame(){
    endGameContain.setAttribute("style", "display: block !important");
    highscoreContain.setAttribute("style", "display: none !important");

    if (initialsInput === ""){
        endGameContain.setAttribute("style", "display: none !important");
        highscoreContain.setAttribute("style", "display: block !important");
    }

    for(let i = 0; i < highscoreArr.length; i++){
        var newList = document.createElement("li")
        newList.textContent = highscoreArr.initials[i] + " - " + highscoreArr[i].score
        highscoreList.appendChild(newList)
    }


}




submitBtn.addEventListener("click", endGame)