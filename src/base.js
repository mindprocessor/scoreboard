const { trim } = require("jquery");

const starting_minute = 5;
const starting_shot_clock = 24;
let timer = starting_minute * 60;
let timer_interval = null;
let timer_paused = true;
let shot_clock_interval = null;
let shot_clock_timer = starting_shot_clock;

let isHotKeyActive = false;

let period = 1;
let score_a = 0;
let score_b = 0;

let foul_a = 0;
let foul_b = 0;

const period_el = document.getElementById('period-count');
const score_a_el = document.getElementById('team-a-score');
const score_b_el = document.getElementById('team-b-score');
const foul_a_el = document.getElementById('team-a-foul');
const foul_b_el = document.getElementById('team-b-foul');
const clock_timer = document.getElementById('clock-timer');
const shot_clock_el = document.getElementById('shot-clock');

function startCountDown(){
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
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;    
    clock_timer.innerHTML = `${minutes}:${seconds}`;
}

function resetTimer(){
    if(timer_paused){
        timer = starting_minute * 60;
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


function addScore(team){
    if(team == 'a'){
        score_a++;
        score_a_el.innerHTML = score_a;
    }
    if(team == 'b'){
        score_b++;
        score_b_el.innerHTML = score_b;
    }

}

function deductScore(team){
    if(team == 'a'){
        score_a--;
        score_a_el.innerHTML = score_a;
    }
    if(team == 'b'){
        score_b--;
        score_b_el.innerHTML = score_a;
    }
}


function addFoul(team){
    if(team == 'a'){
        foul_a++;
        foul_a_el.innerHTML = foul_a;
    }
    if(team == 'b'){
        foul_b++;
        foul_b_el.innerHTML = foul_b;
    }

}

function deductFoul(team){
    if(team == 'a'){
        if(foul_a > 0){
            foul_a--;
            foul_a_el.innerHTML = foul_a;
        }
    }
    if(team == 'b'){
        if(foul_b > 0){
            foul_b--;
            foul_b_el.innerHTML = foul_b;
        }
    }
}


function addPeriod(){
    period++;
    period_el.innerHTML = period;
}

function deductPeriod(){
    if(period > 1){
        period--;
        period_el.innerHTML = period;
    }
}   


function startShotClockTimer(){
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

function setDefaults(){
    score_a_el.innerHTML = score_a;
    score_b_el.innerHTML = score_b;

    foul_a_el.innerHTML = foul_a;
    foul_b_el.innerHTML = foul_b;

    period_el.innerHTML = period;
}

//for keybinding
function handleKeyPress(event){
    if(isHotKeyActive == true){
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
}


function hotKeyIndicator(){
    const hotkey_el = document.getElementById('hotkey-indicator');
    if(isHotKeyActive == true){
        hotkey_el.innerHTML = 'HOT KEY: ACTIVE';
    }else{
        hotkey_el.innerHTML = 'HOT KEY: DISABLED';
    }
}

function toggleHotKey(){
    if(isHotKeyActive == true){
        isHotKeyActive = false;
    }else{
        isHotKeyActive = true;
    }
    hotKeyIndicator();
}


setTimer();
setDefaults();
hotKeyIndicator();

window.addEventListener('keydown', handleKeyPress, false);

