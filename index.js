

let homeScore; 
let guestScore;
let homeScoreBoard = document.getElementById("homeScore");
let guestScoreBoard = document.getElementById("guestScore");

function add1(points, team){
    console.log("button clicked")
    if(team === "home"){
        homeScore += points;
        homeScoreBoard.textContent = homeScore;
    }
    if(team === "guest"){
        guestScore += points;
        guestScoreBoard.textContent = guestScore;
    }
    else{
        console.log("Error, scoring team not defined");
    }
}
