'use strict'

const image = document.querySelectorAll('.block-carousel__carousel__image')
const carousel = document.querySelector('.block-carousel__carousel')
const carouselActive = document.querySelector('.carousel-active')

// let offset = 0
let num = 1

document.querySelector('.btn-right').addEventListener('click', _=>{
    ++num

    // if(num <= image.length){
        image[num].classList.add('carousel-active')
        image[num - 1].classList.remove('carousel-active')
        image[num - 2].classList.add('ww')
    // }
    // else{
    //     num = image.length
    // }
    // console.log(num)
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
})



// document.addEventListener('click', function(r){
//     if(r.target == '.info'){
//         console.log('great')
//     }
// })

// document.addEventListener('click', function(e){
//     if(e.target('.block-price__close')){
//         // const sa = e.target.closest('.info')
//         console.log('good')
//     }
//     // console.log(e.target)
    
//     // if(e.target.closest == '.info'){
//     //     console.log(ggg)
//     // }
// })

// for(let i of priceClose){

//     i.addEventListener('click', e=>{

//         const cl = e.target.closest('.block-price__heading')
//         const desc = cl.querySelector('.desc')

//         desc.classList.toggle('desc__height')
        
//         if(desc.classList.contains('desc__height')){
//             e.target.style.transform = `
//                 rotate(30deg)
//                 `
//         }
//         else{
//             e.target.style.transform = `
//                 rotate(0deg)
//                 `
//         }
        
        
//     })

// }

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


// document.addEventListener('click', function(q){
//     // можно и так
//     if(q.target.classList.contains("benefits__title")){
//         console.log('asd')
//     }
//     // и так
//     if(q.target.classList == "benefits__title"){
//         console.log('asd')
//     }
    
// })

const sliderImg = document.querySelectorAll('.block-image')

let count = 1

document.querySelector('.wrap__navigation__right').addEventListener('click', _=>{
    
    ++count

    if(count < sliderImg.length){

        sliderImg[count - 1].classList.remove('img-active')
        sliderImg[count - 2].classList.add('ee')
        sliderImg[count].classList.add('img-active')

    }

})

document.querySelector('.wrap__navigation__left').addEventListener('click', _=>{
    --count

    if(count >= 0){

        sliderImg[count].classList.add('img-active')
        sliderImg[count + 1].classList.remove('img-active')
        sliderImg[count - 1].classList.remove('ee')
        
    }

})
