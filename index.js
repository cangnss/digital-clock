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
    clockDiv.innerHTML = `<span>${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${todayName}</span>`;
}

showTime();