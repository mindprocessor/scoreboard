const fs = require('fs');


function write_team_a(){
    let name = document.getElementById('team-a-name').textContent;
    fs.writeFile('./team_a_name.txt', name, err=>{});
}


function write_team_b(){
    let name = document.getElementById('team-b-name').textContent;
    fs.writeFile('./team_b_name.txt', name, err=>{});
}