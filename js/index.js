let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let openBtns = document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let closeBtns = document.querySelectorAll('[data-close]')



openBtns.forEach(btn => {
    btn.onclick = () => {
    modal.style.display ="flex"
    modal_bg.style.display ="block" 
    
    
    setTimeout(() => {
        modal.style.opacity ="1"
        modal_bg.style.opacity ="1" 
        modal.style.scale ="1" 
    }, 100);
    }
})

closeBtns.forEach(btn => {
    btn.onclick = () => {
        modal.style.opacity ="0"
        modal_bg.style.opacity ="0" 
        modal.style.scale =".2" 
        setTimeout(() => {
        modal.style.display ="none"
        modal_bg.style.display ="none" 

        }, 100)
    }
})

let slideIndex = 1

function showSlides(n) {
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }

    slides.forEach(slide => slide.classList.add('hide'))

    console.log(n);
    slides[slideIndex -1].classList.remove('hide')
    slides[slideIndex -1].classList.add('fade')
}
showSlides(slideIndex)

next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

