
class Clock {
    
    constructor(timer) {
        this.time = document.querySelector(timer);
    }
    
    switchTimeFormat () {
        this.time.addEventListener('click', () =>{
            this.showFullTime = !this.showFullTime;
        });
    }
}

class ShowMeFullTime extends Clock{
    constructor(timer) {
        super(timer)
        this.showFullTime = true;
    }
    render() { 
        this.now = new Date();
        this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
        this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
        this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
        this.time.innerHTML = this.showFullTime ? `${this.hours}:${this.minutes}:${this.seconds}`: `${this.hours}:${this.minutes}`;
       
    }
    
}
class ShowMeShortTime extends Clock{
    constructor(timer) {
        super(timer)
        this.showFullTime = !true;
    }
    render() { 
        this.now = new Date();
        this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
        this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
        this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
        this.time.innerHTML = !this.showFullTime ? `${this.hours}:${this.minutes}`: `${this.hours}:${this.minutes}:${this.seconds}`;
       
    }
}
      
let clockFull = new ShowMeFullTime('.full-time');
setInterval(() =>
    clockFull.render()
, 100);
clockFull.switchTimeFormat()

let clockShort = new ShowMeShortTime('.short-time');
setInterval(() =>
    clockShort.render()
, 100);

clockShort.switchTimeFormat()
