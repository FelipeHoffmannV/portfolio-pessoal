let btnMenu = document.querySelector('#btn-menu')
let menuNav = document.querySelector('#nav-menu')
let iconMenu = document.querySelector('#icon-menu')


iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('fa-x')
    iconMenu.classList.toggle('fa-bars')
    btnMenu.classList.toggle('change-btn')
    menuNav.classList.toggle('close')
})


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".projeto");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    let currentIndex = 0; 
    let autoPlayTimer; 

    function updateCarousel() {
        cards.forEach(card => {
            card.classList.remove("active", "prev", "next");
        });

        const total = cards.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        cards[currentIndex].classList.add("active");
        cards[prevIndex].classList.add("prev");
        cards[nextIndex].classList.add("next");

        startAutoPlay(); 
    }

    
    function startAutoPlay() {
        stopAutoPlay(); 
        autoPlayTimer = setTimeout(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }, 7000); 
    }

   
    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearTimeout(autoPlayTimer); 
        }
    }

    nextBtn.addEventListener("click", () => {
        stopAutoPlay(); 
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoPlay(); 
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    updateCarousel();
});

const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const dadosForm = new FormData(form);
    const dadosObj = Object.fromEntries(dadosForm.entries());

    window.alert('Mensagem enviada com sucesso!')

    form.reset()
})
