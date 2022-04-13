let startingMinutes = 25;
let time = startingMinutes * 60;
let coutdownEl = document.getElementById("time");
let check;
let start = document.getElementById("start")
let stop = document.getElementById("stop")

start.addEventListener("click", function(){
    startingMinutes = 25;
    time = startingMinutes * 60;

    check = setInterval(updateCountdown, 1000);
})

function updateCountdown(){
    if(time < 0){
        document.getElementById("sound").play()
        clearInterval(check)
    }
    else{
        let minutes = Math.floor(time/ 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds
        coutdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}

stop.addEventListener("click", function(){
    clearInterval(check)
})