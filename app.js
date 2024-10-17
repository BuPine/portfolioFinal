const btnHamburger = document.querySelector('.hamburger')
const menuPanel = document.querySelector('.menu-panel')
const menuLinks = document.querySelectorAll('.menu-panel a')
const frameImage = document.querySelector('#frame')
const images = ['1.jpeg','3.webp','2.jpg','4.jpg','5.webp','6.jpeg']


let currentImageindex = 0

frameImage.addEventListener('click', ()=>{
    currentImageindex++
    if(currentImageindex>=5){
        currentImageindex=0
    }
    frameImage.src ='images/' + images[currentImageindex]

})
btnHamburger.addEventListener('click', ()=>{
    menuPanel.classList.toggle('active')
})

document.addEventListener('click',(event)=>{
    if(!menuPanel.contains(event.target) &&!btnHamburger.contains(event.target)){
        menuPanel.classList.remove('active')
 }
})


menuLinks.forEach((link)=>{

    link.addEventListener('click',()=>{
        menuPanel.classList.remove('active')
    })

})