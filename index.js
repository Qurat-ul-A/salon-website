let slideIndex = 0;

function showSlide(index){
    const slides =document.querySelectorAll('.slide')
    const dots=document.querySelectorAll('.dot');

    if(index >= slides.length){
        slideIndex =0;
    }else if(index < 0){
        slideIndex =slides.length -1;
    }

    slides.forEach((slide)=>{
        slide.style.display = 'none'
    });
    dots.forEach((dot)=>{
        dot.classList.remove('active')
    });

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}

// creat dot for each slide 
const slides =document.querySelectorAll('.slide');
const dotsContainer =document.querySelector('.dots')

slides.forEach((slide,index)=>{
    const dot =document.createElement('span')
    dot.classList.add('dot');
    dot.addEventListener('click',()=>{
        showSlide(index)
        slideIndex=index;
    })
    dotsContainer.appendChild(dot);
});

// initially show first slide 

showSlide(slideIndex);

// for toggle navbar 
const burger=document.querySelector('.burger')
const navbarItems=document.querySelector('.navbar')
const nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})