const item = document.querySelectorAll(["data-anime"])

const animeScroll = () => {
    const windowTop = window.pageYOffset
    
    item.forEach(Element =>{
        if(windowTop > Element.offsetTop){
            Element.classList.add('animate');
        }
    });

};

animeScroll();