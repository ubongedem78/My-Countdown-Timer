const anniversaryDate = new Date('20 June, 2023');
const dayElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
function countdown(){
    const currentDate = new Date();

    const totalSeconds = Math.abs(anniversaryDate-currentDate)/1000;
    const noOfDays = Math.floor(Math.abs(totalSeconds/3600/24));
    const noOfHours = Math.floor(Math.abs(totalSeconds/3600) % 24);
    const noOfMinutes = Math.floor(Math.abs(totalSeconds/60) % 60);
    const noOfSeconds = Math.floor(Math.abs(totalSeconds)% 60);

    dayElement.innerHTML = formatTime(noOfDays);
    hoursElement.innerHTML = formatTime(noOfHours);
    minutesElement.innerHTML = formatTime(noOfMinutes);
    secondsElement.innerHTML = formatTime(noOfSeconds);
   
}

function formatTime(time){
    if(time<10){
        return `0${time}`;
    } return time;
}


countdown();
setInterval(countdown, 1000)