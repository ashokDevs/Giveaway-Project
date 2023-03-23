const MONTHS=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    
]
const WEEKS=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


const endsOnDateTxt=document.querySelector(".endsOn");
const items=document.querySelectorAll("li");
let ended=false;
const endsOnDate= new Date(2023,2,23,20,32);

let endsOnYear=endsOnDate.getFullYear();
let endsOnMonth=endsOnDate.getUTCMonth();
endsOnMonth=MONTHS[endsOnMonth];
let endsOnDay=endsOnDate.getDate();
let endsOnHours=endsOnDate.getHours();
let endsOnMinutes=endsOnDate.getMinutes();


endsOnDateTxt.textContent=`Giveaway ends on : ${endsOnHours}:${endsOnMinutes}am ${endsOnDay}/${endsOnMonth}/${endsOnYear} `


const futureTime=endsOnDate.getTime();

function GetRemainingTime(){
    
    let oneDay=24*60*60*1000;
    let oneHour=60*60*1000;
    let oneMinute=60*1000;
    const today=new Date();
    let remianingTime=(futureTime-today.getTime());


    let days=Math.floor(remianingTime/oneDay);
    let hours=Math.floor((remianingTime%oneDay) /(oneHour));
    let minutes=Math.floor((remianingTime%oneHour) /(oneMinute));
    let seconds=Math.floor((remianingTime%oneMinute) /(1000));
    
    const array=[days,hours,minutes,seconds]
   
    for(let i=1;i<array.length;i++){
        if(array[i]<10){
            array[i]=`0${array[i]}`
        }
    }
    items.forEach(function(item,index){
        item.textContent=array[index];
    })
    
    if(days==0 && hours==0 && minutes==0 && seconds==0){
        clearInterval(timerId);
        
        endsOnDateTxt.textContent=`Giveaway Has Ended!`
    }
    
}
var timerId=setInterval(GetRemainingTime,1000);

    




