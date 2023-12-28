// importing values from html to js 
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let clearBtn = document.getElementById('clearBtn');

// Assigning hours ,min and msec value as 0 
let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

//code for Start button
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

//code for Stop button
stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

//code for clear button
clearBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

/* timer function when msec become 100 then it will make it 0 and sec++ to start next iteration
      same for sec value , when sec is equal to 60 then ,it will start second value with 0 and min++
       */
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        } 
    }

    // if msec value is 7 then it will make 07 , same for sec and min
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    
    // Display timer in HTML  
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}
