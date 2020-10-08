window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabsCont = document.querySelectorAll('.tabcontent'),
        tabsHeader = document.querySelector('.tabheader__items'),
        tabsItems = document.querySelectorAll('.tabheader__item');

    function hideContent(selectorContent, selectorTab, active) {
        selectorContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        selectorTab.forEach(tab => {
            tab.classList.remove(active);
        });
    }
    
    function showOneTab(selectorContent, selectorTab, active, num = 0) {
        selectorContent[num].classList.remove('hide');
        selectorContent[num].classList.add('show', 'fade');
        selectorTab[num].classList.add(active);
    }

    hideContent(tabsCont, tabsItems, 'tabheader__item_active');
    showOneTab(tabsCont, tabsItems, 'tabheader__item_active');
    switchTabs();

    function switchTabs() {
        tabsHeader.addEventListener('click', (e) => {
            tabsItems.forEach((item, i) => {
                if(e.target && (e.target == item || e.target.nodeParent == item)) {
                    hideContent(tabsCont, tabsItems, 'tabheader__item_active');
                    showOneTab(tabsCont, tabsItems, 'tabheader__item_active', i);
                }
            });
        })
    }

    //timer
    const deadline = '2020-10-10';

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

    
    function setClock(selector, endtime) {

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
    setClock('.timer', deadline);
    
    
});
