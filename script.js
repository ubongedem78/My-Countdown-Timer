const anniversaryDate = new Date('20 June, 2023');
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const currentDate = new Date();
    const totalSeconds = Math.abs(currentDate - anniversaryDate)/ 1000;

    const noOfDays = Math.floor(totalSeconds/3600/24);
    const noOfHours = Math.floor(totalSeconds/3600) % 24;
    const noOfMinutes = Math.floor(totalSeconds/60) % 60;
    const noOfSeconds = Math.floor(totalSeconds) % 60;
    
    dayEl.innerHTML = noOfDays;
    hoursEl.innerHTML = formatTime(noOfHours);
    minutesEl.innerHTML = formatTime(noOfMinutes);
    secondsEl.innerHTML = formatTime(noOfSeconds);

}

function formatTime(time){
    if(time<10){
        return `0${time}`;
    } 
    return time;
}

countdown();

setInterval(countdown, 1000)
