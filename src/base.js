const starting_minute = 5;
const starting_shot_clock = 24;
let timer = starting_minute * 60;
let timer_interval = null;
let timer_paused = true;
let shot_clock_interval = null;
let shot_clock_timer = starting_shot_clock;

function startCountDown(){
    const clock_timer = document.getElementById('clock-timer');
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    if(timer <= 0){
        pauseTimer();
    }else{
        timer--;
    }
    
    clock_timer.innerHTML = `${minutes}:${seconds}`;
}
function refreshTimer(){
    const clock_timer = document.getElementById('clock-timer');
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;    
    clock_timer.innerHTML = `${minutes}:${seconds}`;
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
    timer +=60;
    refreshTimer();
}

function deductMinuteTimer(){
    timer -=60;
    refreshTimer();
}

function addSecondTimer(){
    timer++;
    refreshTimer();
}

function deductSecondTimer(){
    timer--;
    refreshTimer();
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


function startShotClockTimer(){
    const shot_clock_el = document.getElementById('shot-clock');
    shot_clock_el.innerHTML = `${shot_clock_timer}`;
    
    if(shot_clock_timer <= 0){
        pauseShotClock();
    }else{
        shot_clock_timer--;
    }
}

function startShotClock(){
    shot_clock_timer = starting_shot_clock;
    if(shot_clock_interval == null){
        shot_clock_interval = setInterval(startShotClockTimer, 1000);
    }
}

function pauseShotClock(){
    clearInterval(shot_clock_interval);
    shot_clock_interval = null;
}



// on init
function setTimer(){
    startCountDown();
}

//for keybinding
function handleKeyPress(event){
    if(event.code == 'Space'){
        startShotClock();
    }
    if(event.code == 'KeyB'){
        pauseShotClock();
    }

    if(event.code == 'KeyS'){
        startTimer();
    }
    if(event.code == 'KeyP'){
        pauseTimer();
    }
}

setTimer();

window.addEventListener('keydown', handleKeyPress, false);
window.addEventListener('mousedown', function(e){
    e.preventDefault();
}, false);
