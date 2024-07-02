const startStopButton=document.getElementById('startStop')
const resetButton = document.getElementById('reset');
const stopwatchDisplay = document.getElementById('stopwatch');
let running=false;
let seconds = 0;
let interval;

function time(seconds)
{
    const hrs=Math.floor(seconds/3600);
    const mins=Math.floor(((seconds % 3600))/60);
    const secs=seconds%60;
    return[hrs.toString().padStart(2,'0'),
        mins.toString().padStart(2,'0'),
        secs.toString().padStart(2,'0')].join(':')
}


function updateStopwatch(){
    seconds++;
    stopwatchDisplay.textContent=time(seconds);
}

startStopButton.addEventListener('click',()=>
{
    if(running==false){
        interval=setInterval(updateStopwatch,1000);
        startStopButton.textContent='Stop';
    }
    else {
         clearInterval(interval);
         startStopButton.textContent='Start';
    }
    running = !running;
})
resetButton.addEventListener('click',()=>
{
    clearInterval(interval);
    running=false;
    startStopButton.textContent="Start";
    seconds=0;
    stopwatchDisplay.textContent="00:00:00";
})