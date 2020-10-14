<<<<<<< HEAD
const tabs = () => {
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
}

export default tabs;
=======
    const tabs = () => {
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
    }

export default tabs;
    
>>>>>>> bf8b52b21ee739111e5722e2f1ede51ef37e2fb6
