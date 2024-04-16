const fs = require('fs');


function write_team_a(){
    let name = document.getElementById('team-a-name').textContent;
    fs.writeFile('./team_a_name.txt', name, err=>{});
}

function read_team_a(){
    try{
        let data = fs.readFileSync('./team_a_name.txt', 'utf8');
        return data;
    }catch(err){
        return 'team A';
    }
}


function write_team_b(){
    let name = document.getElementById('team-b-name').textContent;
    fs.writeFile('./team_b_name.txt', name, err=>{});
}

function read_team_b(){
    try{
        let data = fs.readFileSync('./team_b_name.txt', 'utf8');
        return data;
    }catch(err){
        return 'team B';
    }
}


function write_team_a_score(score){
    let score_str = score.toString();
    fs.writeFile('./team_a_score.txt', score_str, err=>{});
}

function read_team_a_score(){
    try{
        let data = fs.readFileSync('./team_a_score.txt', 'utf8');
        return data;
    }catch(err){
        return 0;
    }
}

function write_team_b_score(score){
    let score_str = score.toString();
    fs.writeFile('./team_b_score.txt', score_str, err=>{});
}

function read_team_b_score(){
    try{
        let data = fs.readFileSync('./team_b_score.txt', 'utf8');
        return data;
    }catch(err){
        return 0;
    }
}

function write_team_a_foul(foul){
    fs.writeFile('./team_a_foul.txt', foul.toString(), err=>{});
}

function read_team_a_foul(){
    try{
        let data = fs.readFileSync('./team_a_foul.txt', 'utf8');
        return data;
    }catch(err){
        return 0;
    }
}

function write_team_b_foul(foul){
    fs.writeFile('./team_b_foul.txt', foul.toString(), err=>{});
}

function read_team_b_foul(){
    try{
        let data = fs.readFileSync('./team_b_foul.txt', 'utf8');
        return data;
    }catch(err){
        return 0;
    }
}

function write_time_limit(val){
    fs.writeFile('./time_limit.txt', val, err=>{});
}

function read_time_limit(){
    try{
        let data = fs.readFileSync('./time_limit.txt', 'utf8');
        return data;
    }catch(err){
        return 10;
    }
}