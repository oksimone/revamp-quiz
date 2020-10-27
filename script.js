var timeEl = document.getElementById("timer")

// will add more questions later
var questions = [
    {q: "fill in the blank. Hydro _____", 
    choices: ["Mug", "Cup", "Flask", "Flute"],
    answer:"Flask"

},
{
    question: "what is the color of a sunflower?",
    choices: ["yellow","red", "violet", "blue"],
    answer:"yellow"
},
{
    question: "the newest iPhone is missing which accessory?",
    choices: ["charger", "earphones", "the box", "the sticker"],
    answer: "charger"
},
{
    question: "when does daylight savings time end?",
    choices: ["october 31st", "november 3rd","november 1st", "october 30th"],
    answer: "november 1st"
}
];

var timer = 30;

function setTime(){
    var timerInterval = setInterval (function (){
        timer--;
        timeEl.textContent = timer;

        if(timer === 0){
            clearInterval(timerInterval);
            window.location.href = "https://twitter.com"
        }

    }, 1000
    )
}
setTime();






document.getElementById("beginBtn").addEventListener("click", begin);

function begin(){
    window.location.href = "questions.html"
}