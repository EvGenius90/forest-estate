'use strict'

const image = document.querySelectorAll('.block-carousel__carousel__image')
const carousel = document.querySelector('.block-carousel__carousel')
const carouselActive = document.querySelector('.carousel-active')

let offset = 0
let num = 1

document.querySelector('.btn-right').addEventListener('click', _=>{
    ++num

    if(num <= image.length){
        image[num].classList.add('carousel-active')
        image[num - 1].classList.remove('carousel-active')
        image[num - 2].classList.add('ww')
        console.log(num)
    }
    else{
        num = image.length
    }
    console.log(num)
    // image[num].classList.add('carousel-active')
    // image[num - 1].classList.remove('carousel-active')
    // // image[num - 2].style.width = 0 + 'px'
    // image[num - 2].classList.add('ww')
    
})

document.querySelector('.btn-left').addEventListener('click', _=>{
    --num

        image[num].classList.add('carousel-active')
        image[num + 1].classList.remove('carousel-active')
        image[num - 1].classList.remove('ww')

    // image[num].classList.add('carousel-active')
    // image[num + 1].classList.remove('carousel-active')
    // // image[num + 3].style.width = 0 + 'px'
    // image[num - 1].classList.remove('ww')
    // image[num - 1].style.width = 336 + 'px'
})