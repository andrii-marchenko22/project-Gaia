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



const dot = document.createElement('div');
dot.classList.add('cursor-dot');
document.body.appendChild(dot);

document.addEventListener('mousemove', (event) => {
  dot.style.top = `${event.clientY}px`;
  dot.style.left = `${event.clientX}px`;
});