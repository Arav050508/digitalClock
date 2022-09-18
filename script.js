const hourSpan = document.getElementById("hour"); 
const minuteSpan = document.getElementById("minute"); 
const secondSpan = document.getElementById("seconds"); 
const amorpmSpan = document.getElementById("amorpm");

function changeTime() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm;

    hourSpan.textContent = hour;
    minuteSpan.textContent = minutes;
    secondSpan.textContent = seconds;
    
    if(hour <= 12) {
        amorpm = "AM";
    } else {
        amorpm = "PM";
    }

    amorpmSpan.textContent = amorpm;
}

changeTime();
setInterval(changeTime, 1000);