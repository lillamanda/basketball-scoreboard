

// Indicate whether a game is started or not 
let gameStarted = false;

let errorMsg = document.getElementById("errorMsg");

// Set scores
let homeScore = 0; 
let guestScore = 0;
let homeScoreBoard = document.getElementById("homeScore");
let guestScoreBoard = document.getElementById("guestScore");

const button = document.getElementsByClassName("scoreBtn");

for(let i = 0; i<button.length; i++){
    button[i].addEventListener("click", function(e){
        if(gameStarted === true){
            let points = parseInt(e.target.id.match(/\d/)); 

            if(e.target.id.includes("home")){
                homeScore += points; 
                homeScoreBoard.textContent = homeScore;
                determineLeader();
            }else if(e.target.id.includes("guest")){
                guestScore += points;
                guestScoreBoard.textContent = guestScore;
                determineLeader();
            }else{
                console.log("error, team not defined")
            }
        }else{
            errorMsg.textContent = "Game is not started, points cannot be accumulated";
        }

    });
}

function determineLeader(){
    if (homeScore>guestScore){
        homeScoreBoard.style.color = "var(--win-color)";
        guestScoreBoard.style.color = "var(--loss-color)";
    }else if(guestScore>homeScore){
        homeScoreBoard.style.color = "var(--loss-color)";
        guestScoreBoard.style.color = "var(--win-color)";
    }else{
        homeScoreBoard.style.color = "var(--loss-color)";
        guestScoreBoard.style.color = "var(--loss-color)";
    } 
};

// Timer
let hour = 0; 
let minute = 0; 
let second = 0; 

let time; 

document.getElementById("startBtn").addEventListener("click", function(){startGame();});
document.getElementById("pauseBtn").addEventListener("click", function(){pause();});
document.getElementById("resetBtn").addEventListener("click", function(){reset();});


function startGame(){
    errorMsg.textContent = "";
    gameStarted = true;
    console.log("startGame() activated")
    //Need to clear interval, so that the time does not speed up if start is clicked multiple times
    clearInterval(time);
    // Can't put timer() with the () inside the setInterval()-function
    time = setInterval(timer, 1000)
}

function pause(){
    clearInterval(time);
    gameStarted = false;
}

function timer(){
    //this if-statement adds to seconds as well as tests it
    if((second+=1) == 60){
        second = 0;
        minute++; 
    }
    if(minute == 60){
        minute = 0; 
        hour++; 
    }
    document.getElementById("hour").textContent = returnTime(hour);
    document.getElementById("minute").textContent = returnTime(minute);
    document.getElementById("second").textContent = returnTime(second);
}


// returns a cleaner number value with 0 before the number if it's single-digits
function returnTime(input){
    // ternary operator "?" shortcut for an if-else statement. 
    // ? takes three operands: (condition to test) ? (value if true) : (value if false)
    return input > 9 ? input : ("0" + input);
}


function reset(){
    pause();
    hour = 0;
    minute = 0; 
    second = 0; 
    document.getElementById("hour").textContent = "00"; 
    document.getElementById("minute").textContent = "00"; 
    document.getElementById("second").textContent = "00"; 

    homeScore = 0;
    guestScore = 0;
    homeScoreBoard.textContent = homeScore;
    guestScoreBoard.textContent = guestScore;
    determineLeader();
}
