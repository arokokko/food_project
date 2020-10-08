import tabs from './modules/tabs';
import hronometer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    
    tabs();
    
    const deadline = '2020-10-07';
    hronometer('.timer', deadline);

});
