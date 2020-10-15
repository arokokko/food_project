const modal = () => {
    const triggers = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal'),
        closeBtn = modalWindow.querySelector('[data-close]'),
        openModalByTime = setTimeout(openModal, 60000),
        scrollWidth = window.innerWidth - document.documentElement.clientWidth;

    let isModalOpened = false;    

    function openModalByScroll() {
        let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
            pageYOffset = Math.ceil(window.pageYOffset),
            clientHeight = Math.ceil(document.documentElement.clientHeight);
        
        if(!isModalOpened && (pageYOffset + clientHeight >= scrollHeight)) {
            openModal();
        }
    }
    window.addEventListener('scroll', openModalByScroll);
    

    triggers.forEach(item => {
        item.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

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
        document.body.style.marginRight = '';
    }

    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = scrollWidth + 'px';
        clearInterval(openModalByTime);
        isModalOpened = true;
    }
};

export default modal;
