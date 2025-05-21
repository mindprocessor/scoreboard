let starting_minute = read_time_limit();
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
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    if(timer <= 0){
        pauseTimer();
    }else{
        timer--;
    }

    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    
    clock_timer.innerHTML = `${minutes}:${seconds}`;
}
function refreshTimer(){
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;   

    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    clock_timer.innerHTML = `${minutes}:${seconds}`;
}

function resetTimer(){
    if(timer_paused){
        starting_minute = read_time_limit();
        timer = starting_minute * 60;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        if(seconds < 10){
            seconds = `0${seconds}`;
        }
        
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
    if(timer > 0){
        timer -=60;
        if(timer < 0){
            timer = 0;
        }
        refreshTimer();
    }
}

function addSecondTimer(){
    timer++;
    refreshTimer();
}

function deductSecondTimer(){
    timer--;
    if(timer < 0){
        timer = 0;
    }
    refreshTimer();
}


function addScore(team){
    if(team === 'a'){
        score_a++;
        score_a_el.innerHTML = score_a;
        write_team_a_score(score_a);
    }
    if(team === 'b'){
        score_b++;
        score_b_el.innerHTML = score_b;
        write_team_b_score(score_b);
    }

}

function deductScore(team){
    if(team === 'a'){
        score_a--;
        score_a_el.innerHTML = score_a;
        write_team_a_score(score_a);
    }
    if(team === 'b'){
        score_b--;
        score_b_el.innerHTML = score_b;
        write_team_b_score(score_b);
    }
}

function resetScore(team){
    if(team === 'a'){
        score_a = 0;
        score_a_el.innerHTML = score_a;
        write_team_a_score(score_a);
    }
    if(team === 'b'){
        score_b = 0;
        score_b_el.innerHTML = score_b;
        write_team_b_score(score_b);
    }
}


function addFoul(team){
    if(team === 'a'){
        foul_a++;
        foul_a_el.innerHTML = foul_a;
        write_team_a_foul(foul_a);
    }
    if(team === 'b'){
        foul_b++;
        foul_b_el.innerHTML = foul_b;
        write_team_b_foul(foul_b);
    }

}

function deductFoul(team){
    if(team === 'a'){
        if(foul_a > 0){
            foul_a--;
            foul_a_el.innerHTML = foul_a;
            write_team_a_foul(foul_a);
        }
    }
    if(team === 'b'){
        if(foul_b > 0){
            foul_b--;
            foul_b_el.innerHTML = foul_b;
            write_team_b_foul(foul_b);
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

function continueShotClock(){
    if(shot_clock_interval == null){
        shot_clock_interval = setInterval(startShotClockTimer, 1000);
    }
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
        if(event.code == 'KeyC'){
            continueShotClock();
        }

        if(event.code == 'Enter'){
            startTimer();
        }
        if(event.code == 'KeyP'){
            pauseTimer();
        }
    }
}


function updateTimeLimit(val){
    write_time_limit(val);
}


function hotKeyIndicator(){
    const hotkey_el = document.getElementById('hotkey-indicator');
    const hotkey_label_el = document.getElementById('hotkey-label');
    if(isHotKeyActive == true){
        hotkey_el.innerHTML = 'HOT KEY: ACTIVE';
        hotkey_label_el.innerHTML = '| ENTER - Start Timer | P - Pause Timer | SpaceBar - Start/Reset Shot clock | B - Pause shot clock | C - Continue shot clock |';
    }else{
        hotkey_el.innerHTML = 'HOT KEY: DISABLED';
        hotkey_label_el.innerHTML = '';
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


function setValues(){
    starting_minute = read_time_limit();
    
    score_a = read_team_a_score();
    score_b = read_team_b_score();

    foul_a = read_team_a_foul();
    foul_b = read_team_b_foul();

    document.getElementById('team-a-name').innerHTML = read_team_a();
    document.getElementById('team-b-name').innerHTML = read_team_b();

    document.getElementById('time-limit').value = read_time_limit();
}

setValues();

setTimer();
setDefaults();
hotKeyIndicator();

window.addEventListener('keydown', handleKeyPress, false);

