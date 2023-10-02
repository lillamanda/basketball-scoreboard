

let homeScore = 0; 
let guestScore = 0;
let homeScoreBoard = document.getElementById("homeScore");
let guestScoreBoard = document.getElementById("guestScore");

const button = document.getElementsByClassName('scoreBtn');

for(let i = 0; i<button.length; i++){
    button[i].addEventListener('click', function(e){
            
        let points = parseInt(e.target.id.match(/\d/)); 

        if(e.target.id.includes("home")){
            homeScore += points; 
            homeScoreBoard.textContent = homeScore;
        }if(e.target.id.includes("guest")){
            guestScore += points;
            guestScoreBoard.textContent = guestScore;
        }else{
            console.log("error, team not defined")
        }
    });
}





// function add(points, team){
    
//     console.log("button clicked")

//     if(team == "home"){
//         homeScore += points;
//         homeScoreBoard.textContent = homeScore;
//     }
//     if(team == "guest"){
//         guestScore += points;
//         guestScoreBoard.textContent = guestScore;
//     }
//     else{
//         console.log("Error, scoring team not defined");
//     }
// }
