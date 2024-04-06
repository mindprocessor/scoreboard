const fs = require('fs');


function write_team_a(){
    let name = document.getElementById('team-a-name').textContent;
    fs.writeFile('./team_a_name.txt', name, err=>{});
}


function write_team_b(){
    let name = document.getElementById('team-b-name').textContent;
    fs.writeFile('./team_b_name.txt', name, err=>{});
}


function write_team_a_score(score){
    let score_str = score.toString();
    fs.writeFile('./team_a_score.txt', score_str, err=>{});
}

function write_team_b_score(score){
    let score_str = score.toString();
    fs.writeFile('./team_b_score.txt', score_str, err=>{});
}

function write_team_a_foul(foul){
    fs.writeFile('./team_a_foul.txt', foul, err=>{});
}

function write_team_b_foul(foul){
    fs.writeFile('./team_b_foul.txt', foul, err=>{});
}