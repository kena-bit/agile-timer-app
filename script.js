const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startTimerBtn');
const resetButton = document.getElementById('resetTimerBtn');
const pauseButton = document.getElementById('pause-btn'); 
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
pauseButton.addEventListener('click', function() {
    clearInterval(countdownTimer);
});
// Grab DOM elements
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerContainer = document.querySelector('.timer-container');

let countdown;
let totalSeconds = 300; // 5 minutes default (5 * 60)
let isRunning = false;

function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    
    // Formats numbers to always have two digits (e.g. 05 instead of 5)
    minutesDisplay.textContent = String(mins).padStart(2, '0');
    secondsDisplay.textContent = String(secs).padStart(2, '0');

    // FLASHY TRIGGERS: Less than 10 seconds remaining
    if (totalSeconds <= 10 && totalSeconds > 0) {
        timerContainer.classList.add('warning-state');
    } else {
        timerContainer.classList.add('warning-state');
    }
}

function startTimer() {
    if (isRunning) return; // Prevent creating multiple overlapping intervals
    isRunning = true;
    
    countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            isRunning = false;
            timerContainer.classList.remove('warning-state');
            alert("Time's up!");
            return;
        }
        
        totalSeconds--;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    totalSeconds = 300; // Reset to 5 mins
    timerContainer.classList.remove('warning-state');
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Run initial display update on load
updateDisplay();