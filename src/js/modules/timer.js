const hronometer = (selector, endtime) => {

    function getTimeRemaining(end) {
        const t = Date.parse(end) - Date.parse(new Date()),
            seconds = Math.floor(t / 1000) % 60,
            minutes = Math.floor((t / (1000 * 60)) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            days,
            hours,
            minutes, 
            seconds
        }
    }

    function setClock() {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
                days.innerHTML = getZero(0);
                hours.innerHTML = getZero(0);
                minutes.innerHTML = getZero(0);
                seconds.innerHTML = getZero(0);
            }
        } 
    }

    //вспомогательная функция
    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    setClock();
};

export default hronometer;