const cardsMenu = () => {
    class Cards {
        constructor(src, alt, title, desrc, price, parentSelector, ...classes) {
            this.src = src,
            this.alt = alt, 
            this.title = title,
            this.descr = desrc,
            this.price = price,
            this.classes = classes,
            this.parent = document.querySelector(parentSelector),
            this.rate = 27,
            this.getUAH()
        }
        getUAH() {
            this.price = this.price * this.rate;
        }
        render() {
            const div = document.createElement('div');
            
            if(this.classes.length === 0) {
                this.classes = "menu__item";
                div.classList.add(this.classes);
            } else {
                this.classes.forEach(className => div.classList.add(className));
            }
            
            div.innerHTML = `
                <img src=${this.src} alt=${this.altlt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(div);
        }
    }

    const firstCard = new Cards(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        "menu__item"
    ).render();

    const secondCard = new Cards(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        ".menu .container",
        "menu__item"
    ).render();

    const thirdCard = new Cards(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        19,
        ".menu .container",
        "menu__item"
    ).render();
}

export default cardsMenu;