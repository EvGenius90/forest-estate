'use strict'

const image = document.querySelectorAll('.block-carousel__carousel__image')
const cicrle = document.querySelectorAll('.indicators__circle')

let offset = 0
let num = 1

document.querySelector('.btn-right').addEventListener('click', _=>{
    ++num

    // cicrle[num - 1].classList.remove('circle-active')

    if(num < image.length){
        image[num - 1].classList.remove('carousel-active')
        image[num].classList.add('carousel-active')
        image[num - 2].classList.add('ww')

        cicrle[num - 2].classList.remove('circle-active')
        cicrle[num - 2].classList.add('circle-average-active')
        cicrle[num - 1].classList.remove('circle-average-active')
        cicrle[num - 1].classList.add('circle-active')
        cicrle[num].classList.add('circle-average-active')
        cicrle[num - 3].classList.remove('circle-average-active')
        console.log(cicrle[num])
    }

    if(num >= image.length){
        --num
    }
    
})

document.querySelector('.btn-left').addEventListener('click', _=>{
    --num

        if(num >= 1){
            image[num].classList.add('carousel-active')
            image[num + 1].classList.remove('carousel-active')
            image[num - 1].classList.remove('ww')
        }

        if(num <= 0){
            ++num
        }
        
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

    if(count >= sliderImg.length){
        --count
    }
})

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
