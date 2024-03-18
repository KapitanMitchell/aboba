let slider = document.querySelector(".slider")
let buttonLeft = document.querySelector(".arrow__left")
let buttonRight = document.querySelector(".arrow__right")
let sliderSlide = document.querySelectorAll(".slider__slide")
let sliderLi = document.querySelectorAll(".slider-dots-li")
let checkIndex = 0

let bgColors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"]
function autoPlaySlide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
}
function goToSlide(index){
    checkIndex = index
    autoPlaySlide(checkIndex)
    document.body.style.background = bgColors[index]
}


function goNextSlide() {
    checkIndex = (checkIndex + 1) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

function goPrevSlide() {
    checkIndex = (checkIndex - 1 + sliderSlide.length) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

for(let i = 0; i < sliderLi.length; i++){
        sliderLi[i].addEventListener("click" , function(){
        goToSlide(i)
    })
}


