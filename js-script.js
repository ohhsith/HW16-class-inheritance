class Clock {
    constructor(timer) {
        this.time = timer;
    }
    render() { 
        let now = new Date();
        let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds(); 
        let milliseconds = now.getMilliseconds()< 100 ? '0' + now.getMilliseconds() : now.getMilliseconds();
        this.time.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
}

class ShowMeFullTime extends Clock{
    render() { 
        let now = new Date();
        let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds(); 
        this.time.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    
}
class ShowMeShortTime extends Clock{
    render() { 
        let now = new Date();
        let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        this.time.innerHTML = `${hours}:${minutes}`;
    }
}
// находим в доме таймер, присваем переменной
let timer = document.querySelector('.time')

let clockFull = new ShowMeFullTime(timer);

let clockShort = new ShowMeShortTime(timer);

// готовим базу для тоггла
let isFullTimeFormat = true;
// тоггл
timer.addEventListener('click', function() {
    isFullTimeFormat = !isFullTimeFormat;
});

setInterval(()=>{
    if(isFullTimeFormat){
        clockFull.render()
    } else {
        clockShort.render()
    } 100
}, 100)

