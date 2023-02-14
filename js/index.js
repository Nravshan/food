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

let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')

function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})



//  
// kkal
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g') 

        userData.gender = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
})


actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act') 

        let {active, gender, weight, height, age} = userData

        active = activeCount

        if(gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age

            resultView.innerHTML = Math.round(res * active)
        }

    }
})
 
let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

let currentYear = new Date ().getFullYear ();
console.log(currentYear);

let newYear = new Date (`1 Jan ${currentYear + 1 } 00:00:00`);
console.log(newYear);

function countdownTimer() {
    let todayDate = Date.now();
    console.log(todayDate);

    const gap = newYear - todayDate;
    console.log(gap);
    let d = Math.floor(gap / 1000 / 60 / 60 / 24);
    let h = Math.floor((gap / 1000 / 60 / 60 )% 24);
    let m = Math.floor((gap / 1000 / 60) % 60 );
    let s = Math.floor((gap / 1000 ) % 60 );

    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML =  h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(countdownTimer,1000)

