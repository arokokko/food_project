import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cardsMenu from './modules/cardsMenu';

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    timer('2020-10-20', '.timer');
    modal();
    cardsMenu();
    
});
