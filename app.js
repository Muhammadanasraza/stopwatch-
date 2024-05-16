//Initualize variables to keep track of minutes,
let min = 0;
let sec = 0;
let mili = 0;

//Get references to the HTML elements where the timer will be displayes,
let displayMin = document.getElementById('displayMin');
let displaySec = document.getElementById('displaySec');
let displayMili = document.getElementById('displayMili');

//Get references to the control buttons,
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

//function to update the HTML element with the current timer values,
function renderTimer(){
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMili.innerHTML = mili;
}
//Initially render the timer to display starting values (00:00:00)
renderTimer();

//function that gets called at regular intervals to uodate the timer
function timer(){
    mili ++;
    if(mili == 10){
        sec++;
        mili = 0;
        if (sec ==60  ){
            min ++;
            sec = 0;
        }
    }
    //update the display timer values
    renderTimer();
}


let interval;

//function to start the timer
function startTimer(){
    interval = setInterval(function(){
        timer()
    },100);
    startBtn.disabled = true;
}

//function to the stop timer
function stopTimer(){
    clearInterval(interval);
    startBtn.disabled = false;

}

//function to reset the timer

function resetTimer(){
     min = 0;
     sec = 0;
     mili = 0;

    stopTimer();
    renderTimer();
    

}


