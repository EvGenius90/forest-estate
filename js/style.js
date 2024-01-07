'use strict'

const image = document.querySelectorAll('.block-carousel__carousel__image')
const cicrle = document.querySelectorAll('.indicators__circle')

let offset = 0
let num = 1

// показывает следующую фотографию при клике враво
document.querySelector('.btn-right').addEventListener('click', _=>{
    ++num

    if(num < image.length){

        image[num - 1].classList.remove('carousel-active')
        image[num].classList.add('carousel-active')
        image[num - 2].classList.add('ww')

        // cicrle[num - 2].classList.remove('circle-active')
        // cicrle[num - 2].classList.add('circle-average-active')
        // cicrle[num - 1].classList.remove('circle-average-active')
        // cicrle[num - 1].classList.add('circle-active')
        // cicrle[num].classList.add('circle-average-active')
        // cicrle[num - 3].classList.remove('circle-average-active')

    }

    if(num >= image.length){

        --num

    }
    
})

// показывает предыдущую фотографию при клике влево
document.querySelector('.btn-left').addEventListener('click', _=>{
    --num

        if(num >= 0){

            image[num].classList.add('carousel-active')
            image[num + 1].classList.remove('carousel-active')
            image[num - 1].classList.remove('ww')
            

            cicrle[num + 1].classList.remove('circle-average-active')
            cicrle[num].classList.remove('circle-active')
            cicrle[num - 1].classList.remove('circle-average-active')
            cicrle[num - 1].classList.add('circle-active')
            cicrle[num].classList.add('circle-average-active')
            cicrle[num - 2].classList.add('circle-average-active')

        }

        if(num < 0){

            ++num

        }
        
})

// меняется анимация крестика при клике на него
document.addEventListener('click', function(e){

    if(e.target.classList == "block-price__close" || e.target.classList == "block-price__close__horizontal" || e.target.classList == "block-price__close__vertical"){
        
        const cl = e.target.closest('.block-price__heading')
        const desc = cl.querySelector('.desc')
        const priceClose = cl.querySelector('.block-price__close')

        desc.classList.toggle('desc__height')

        if(desc.classList.contains('desc__height')){
            priceClose.style.transform = `
                rotate(30deg)
                `
        }

        else{
            priceClose.style.transform = `
                rotate(0deg)
                `
        }
        
    }
    
})

// показывает следующую фотографию при клике враво
const sliderImg = document.querySelectorAll('.block-image')
let count = 1

document.querySelector('.wrap__navigation__right').addEventListener('click', _=>{
    
    ++count

    if(count < sliderImg.length){

        sliderImg[count - 1].classList.remove('img-active')
        sliderImg[count - 2].classList.add('ee')
        sliderImg[count].classList.add('img-active')

    }

    if(count >= sliderImg.length){

        --count

    }

})

// показывает предыдущую фотографию при клике влево
document.querySelector('.wrap__navigation__left').addEventListener('click', _=>{
    --count

    if(count >= 1){

        sliderImg[count].classList.add('img-active')
        sliderImg[count + 1].classList.remove('img-active')
        sliderImg[count - 1].classList.remove('ee')
    }

    if(count <= 0){

        ++count

    }

})

// показывает popup окно
const popupFon = document.querySelector('.popup-fon')
const winBtn = document.querySelectorAll('.win-btn')

for(let i of winBtn){

    i.addEventListener('click', _=>{

        popupFon.classList.add('popup-active')
        document.body.style.overflow = 'hidden'
        
    })

}

// при клике на фон popup окна, закрывается окно
document.addEventListener('click', e=>{

    if(e.target.classList.contains('popup-fon')){

        popupFon.classList.remove('popup-active')
        document.body.style.overflow = ''

    }

})

const selectHead = document.querySelector('.select__head')
const selectList = document.querySelector('.select__list')

selectHead.addEventListener('click', _=>{

    selectHead.classList.toggle('open')
    selectList.classList.toggle('bl')
    
})

const btnBooking = document.querySelectorAll('.btn-booking')
const bookingPopup = document.querySelector('.booking-popup-fon')
const selectItem = document.querySelectorAll('.select__item')

// при клике на кнопку "забронировать", открывается popup окно
for(let i of btnBooking){

    i.addEventListener('click', e=>{

        bookingPopup.classList.add('booking-popup-active')
        document.body.style.overflow = 'hidden'

    })

}

// при клике на слово из списка в popup окне, выводится слово на которое
// нажили и закрывается список.
// и так же удаестя класс "open", что бы радиус бордера нормализовался
for(let i of selectItem){

    i.addEventListener('click', e=>{

        selectHead.textContent = e.target.textContent
        selectList.classList.remove('bl')
        selectHead.classList.remove('open')

    })

}

// при клике на фон закрывается popup окно
document.addEventListener('click', e=>{

    if(e.target.classList.contains('booking-popup-fon')){

        bookingPopup.classList.remove('booking-popup-active')
        document.body.style.overflow = ''

    }

})


// клик по бургеру
const headerNavigation = document.querySelector('.header__navigation')

document.querySelector('.burger').addEventListener('click', _=>{

    headerNavigation.classList.toggle('header-navigation-active')
    document.querySelector('.header__phone').classList.toggle('header__phone-active')
    document.querySelector('.burger-socials').classList.toggle('burger-socials-active')

    if(headerNavigation.classList.contains('header-navigation-active')){

        document.body.style.overflow = 'hidden'

    }
    else{

        document.body.style.overflow = ''

    }

})