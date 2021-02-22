function startTimerFunction() {
    document.getElementById("score").disabled = false;
    document.getElementById("score").style.cursor = "pointer";
    var sec = 15;
    var timer = setInterval(function(){
        document.getElementById("countdownClock").innerHTML= sec + "s";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById("score").disabled = true;
            document.getElementById("score").style.cursor = "not-allowed";
            if(score > highScore) {
                alert('Congrats, you are the highest score. Think you can beat it?');
                document.getElementById("highScore").innerHTML= score;
                sec--;
            } else {
                alert('You are not the highest score. Try again.');
            }
        }
    }, 1000);
}

var score = 0;
var highScore = 0;
function scoreFunction() {
    score += 1;
    document.getElementById("playerClicks").innerHTML = "Player Score: " + score;
}

function resetFunction() {
window.location.reload();
}