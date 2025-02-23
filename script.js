let time = 0;
let isRunning = false;
let laps = [];
let interval;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}

startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.textContent = "Start";
    } else {
        interval = setInterval(() => {
            time += 10;
            display.textContent = formatTime(time);
        }, 10);
        startStopBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    time = 0;
    isRunning = false;
    laps = [];
    display.textContent = "00:00:00";
    lapsContainer.innerHTML = "";
    startStopBtn.textContent = "Start";
});

lapBtn.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = time;
        laps.push(lapTime);
        const lapElement = document.createElement("li");
        lapElement.textContent = `Lap ${laps.length}: ${formatTime(lapTime)}`;
        lapsContainer.appendChild(lapElement);
    }
});
