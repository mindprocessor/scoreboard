const starting_minute = 1;
let timer = starting_minute * 60;
let timer_interval = null;
let timer_paused = true;

function startCountDown(){
    const clock_timer = document.getElementById('clock-timer');
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    clock_timer.innerHTML = `${minutes}:${seconds}`;

    if(timer <= 0){
        pauseTimer();
    }else{
        timer--;
    }
}

function resetTimer(){
    if(timer_paused){
        timer = starting_minute * 60;
        const clock_timer = document.getElementById('clock-timer');
        const minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        clock_timer.innerHTML = `${minutes}:${seconds}`;
        pauseTimer();
    }
}

function startTimer(){
    timer_paused = false;
    if(timer_interval == null){
        timer_interval = setInterval(startCountDown, 1000);
    }
}

function pauseTimer(){
    clearInterval(timer_interval);
    timer_interval = null;
    timer_paused = true;
}

function addMinuteTimer(){

}

function deductMinuteTimer(){

}

function addSecondTimer(){

}

function deductSecondTimer(){

}


function addScore(){

}

function deductScore(){

}


function addFoul(){

}

function deductFoul(){

}


function addPeriod(){

}

function deductPeriod(){

}   



// on init
function setTimer(){
    startCountDown();
}
setTimer();
