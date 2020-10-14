const timer = (endtime, selector) => {

    function getRemainingTime() {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor(total / (1000 * 60 * 60) % 24),
            minutes = Math.floor(total / (1000 * 60) % 60),
            seconds = Math.floor(total / 1000 % 60);
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        }
    } 

    setTime();

    function setTime() {
        const hronometer = document.querySelector(selector),
            days = hronometer.querySelector('#days'),
            hours = hronometer.querySelector('#hours'),
            minutes = hronometer.querySelector('#minutes'),
            seconds = hronometer.querySelector('#seconds'),
            commonTime = getRemainingTime(),
            timerId = setInterval(setTime, 1000);

        days.innerHTML = addZero(commonTime.days);
        hours.innerHTML = addZero(commonTime.hours);
        minutes.innerHTML = addZero(commonTime.minutes);
        seconds.innerHTML = addZero(commonTime.seconds);

        if(commonTime.total <= 0) {
            clearInterval(timerId);
            days.innerHTML = addZero(0);
            hours.innerHTML = addZero(0);
            minutes.innerHTML = addZero(0);
            seconds.innerHTML = addZero(0);
        }
    }

    //additional function
    function addZero(num) {
        if(num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
}

export default timer;