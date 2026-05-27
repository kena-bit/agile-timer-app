const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startTimerBtn');
const resetButton = document.getElementById('resetTimerBtn');

let timeLeft = 60;
let countdownTimer;

startButton.addEventListener('click', function() {
    // This alert will tell us if the button click event is firing
    alert("Button was clicked!"); 
    
    clearInterval(countdownTimer);
    timeLeft = 60;
    
    countdownTimer = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            timerDisplay.textContent = "Time's Up! 🚨";
        }
    }, 1000);
}); 

resetButton.addEventListener('click', function() {
    clearInterval(countdownTimer);
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
});