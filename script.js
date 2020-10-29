document.addEventListener("DOMContentLoaded", () => {
    const beginbtn = document.querySelector("#beginBtn");
  
    beginbtn.addEventListener("click", begin);
    
  });
  
  function begin(){
      window.location.href = "questions.html"
  }
  
    function countDown() {
      const timeLeftDisplay = document.querySelector("#timer");
      let secondsLeft = 45;
      setInterval(function () {
        if (secondsLeft <= 0) {
          clearInterval(secondsLeft);
          window.location.href = "highscores.html";
        }
        timeLeftDisplay.innerHTML = secondsLeft;
        secondsLeft -= 1;
      }, 1000);
    }
  
    let url = window.location.href;
    
    window.onload = function () {
      if (url.indexOf("questions.html") !== -1) {
        countDown();
      }
    };
  
