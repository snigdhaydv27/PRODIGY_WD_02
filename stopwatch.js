let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let lapCounter = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const laps = document.getElementById('laps');

function startStop() {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1000);
        startStopBtn.textContent = "Stop";
        startStopBtn.style.backgroundColor = "#f44336";
        isRunning = true;
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = "Start";
        startStopBtn.style.backgroundColor = "#4CAF50";
        isRunning = false;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    startStopBtn.style.backgroundColor = "#4CAF50";
    isRunning = false;
    difference = 0;
    laps.innerHTML = "";
    lapCounter = 0;
}

function lap() {
    if (isRunning) {
        lapCounter++;
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCounter}: ${display.textContent}`;
        laps.appendChild(lapTime);
    }
}
