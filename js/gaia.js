document.addEventListener("DOMContentLoaded", () => {
    let lightbox = new SimpleLightbox('[data-lightbox="gallery"]', {
    captions: true,          
    captionsData: 'title',     
    captionDelay: 250         
  });
});


const smoothScroll = () => {
    const scrollBtn = document.querySelector('.scroll-btn');
        
    scrollBtn.addEventListener("click", (event) => {
        window.scrollTo({
            left: 0,
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });

        setTimeout(() => {
            scrollBtn.blur()
        }, 0);
    })
}

document.addEventListener('DOMContentLoaded', smoothScroll);   


const JoinBtn = document.querySelector(".btn-join-us");

JoinBtn.addEventListener("click", (event) => {
    JoinBtn.blur()
})