var userName = prompt("Adınızı giriniz:");
const myName = document.getElementById('myName');
var timer = setInterval(showTime,1000);
myName.innerText = userName;


function showTime(){
    const clockDiv = document.getElementById('myClock');
    let today = new Date()
    let todayName = today.getDay();
    
    switch(todayName){
        case 1:
            todayName = "Pazartesi";
            break;
        case 2:
            todayName = "Salı";
            break;
        case 3:
            todayName = "Çarşamba";
            break;
        case 4:
            todayName = "Perşembe";
            break;
        case 5:
            todayName = "Cuma";
            break;
        case 6:
            todayName = "Cumartesi";
            break;
        case 7:
            todayName = "Pazar";
            break;
    }
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();

    if(hour<10){
        hour = "0" + hour;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(second<10){
        second = "0" + second;
    }
    clockDiv.innerHTML = `<span>${hour}:${minutes}:${second} ${todayName}</span>`;
    
}

showTime();