const display = document.getElementById('display');
const timeDiv = document.querySelector('.time-div');

let presentDayForCircle, presentHourForCircle , presentMinForCircle, presentSecForCircle;
let daysLeft, minsLeft, hoursLeft, secsLeft;


const mainCountdownFunc = function(){

    const countdownToDate = new Date("March 5, 2022 23:59:59");
    const present = new Date();

    let timeBetween = countdownToDate.getTime() - present.getTime();


    presentDayForCircle = present.getDate();
    presentHourForCircle = present.getHours();
    presentMinForCircle = present.getMinutes();
    presentSecForCircle = present.getSeconds();


    

     daysLeft = Math.floor(timeBetween /(1000*60*60*24)) ;
     hoursLeft = Math.floor((timeBetween % (1000*24*60*60)) / (1000*60*60));
     minsLeft = Math.floor((timeBetween % (1000*60*60)) / (1000*60));
     secsLeft = Math.floor((timeBetween % (1000*60)) / (1000));


   let daysLeft__2 = daysLeft;
   let hoursLeft__2 = hoursLeft;
   let minsLeft__2 = minsLeft;
   let secsLeft__2 = secsLeft;


   if(daysLeft > 99){

       document.querySelector('.day--div h2').style.left = '33%';
   }



    if(daysLeft < 10){
        daysLeft__2 = `0` + daysLeft;
    }
    if(hoursLeft < 10){
        hoursLeft__2 = `0` + hoursLeft;
    }

    if(minsLeft < 10){
        minsLeft__2 = `0` + minsLeft;
    }

    if(secsLeft < 10){
        secsLeft__2 = `0` + secsLeft;
    }


    document.querySelector('.day--div h2').textContent = daysLeft__2;
    document.querySelector('.hour--div h2').textContent = hoursLeft__2;
    document.querySelector('.minute--div h2').textContent = minsLeft__2;
    document.querySelector('.second--div h2').textContent = secsLeft__2;
}

mainCountdownFunc();
setInterval(mainCountdownFunc, 1000);




let progressDay = document.querySelector('.progress-day-svg');
let progressHour = document.querySelector('.progress-hour-svg');
let progressMinute = document.querySelector('.progress-minute-svg');
let progressSecond = document.querySelector('.progress-second-svg');

let progressCircle = document.querySelector('.progress');
let radius = progressCircle.r.baseVal.value;

console.log(radius);

//circumference = 2 * pi * r
let circumference = radius * 2 * Math.PI;
progressDay.style.strokeDasharray = circumference;
progressHour.style.strokeDasharray = circumference;
progressMinute.style.strokeDasharray = circumference;
progressSecond.style.strokeDasharray = circumference;

console.log(circumference);
// scale 0 - 60
let showProgress = function(){
    // let percentSec = objectSecs;

    if(daysLeft >= 365){
        progressDay.style.strokeDashoffset = 0;
    }
    if(daysLeft < 365){
        progressDay.style.strokeDashoffset = circumference - ((daysLeft/365) * circumference );
    }

   
   progressHour.style.strokeDashoffset = circumference - ((hoursLeft/24) * circumference);
   progressMinute.style.strokeDashoffset = circumference - ((minsLeft/60) * circumference);
   progressSecond.style.strokeDashoffset = circumference - ((secsLeft/60) * circumference);
}


showProgress();

setInterval(showProgress, 1000);



