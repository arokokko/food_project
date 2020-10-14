const modal = () => {
    const triggers = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal'),
        close = modalWindow.querySelector('[data-close]');

    triggers.forEach(item => {
        item.addEventListener('click', openModal);
    });

    close.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        if(e.target == modalWindow) {
           closeModal();   
        }
    }); 

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    })
    
    //additional functions
    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
};

export default modal;
