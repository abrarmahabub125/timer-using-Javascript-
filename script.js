let timeDisplay = document.getElementById("displayTime");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let [milliseconds, seconds, minutes,  hours] = [0,0,0,0];

let init;


start.addEventListener("click",() =>{
    init = setInterval(generateTimer, 10)
    start.disabled = true;
})

stop.addEventListener("click", () =>{
    clearInterval(init);
    start.disabled = false;

})

reset.addEventListener("click", () =>{
    start.disabled = false;
    milliseconds = 0;
    seconds = 0
    minutes = 0
    hours = 0
    clearInterval(init);
    timeDisplay.innerHTML = "00 : 00 : 00 : 000"
})


function generateTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++
            if (minutes == 60) {
                minutes = 0;
                hours++
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}