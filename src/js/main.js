window.addEventListener('DOMContentLoaded', () => {
    const tabsCont = document.querySelectorAll('.tabcontent'),
        tabsHeader = document.querySelector('.tabheader__items'),
        tabsItems = document.querySelectorAll('.tabheader__item');

    function hideContent(selectorContent, selectorTab, active) {
        selectorContent.forEach((item) => {
            item.style.display = 'none';
        });
        selectorTab.forEach(tab => {
            tab.classList.remove(active);
        });
    }
    
    function showOneTab(selectorContent, selectorTab, active, num) {
        selectorContent[num].style.display = 'block';
        selectorTab[num].classList.add(active);
    }

    hideContent(tabsCont, tabsItems, 'tabheader__item_active');
    showOneTab(tabsCont, tabsItems, 'tabheader__item_active', 0);
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
    
});
