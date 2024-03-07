// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function fixImageAnimation(){
    const elemContainer = document.querySelector('.elem-container');
    const fixed_image = document.querySelector('#fix-image');
    elemContainer.addEventListener('mouseenter',()=>{
        fixed_image.style.display = "block";
    })

    elemContainer.addEventListener('mouseleave',()=>{
        fixed_image.style.display = "none";
    })

    const all_elems = document.querySelectorAll(".elem");
    all_elems.forEach((ele)=>{
        ele.addEventListener('mouseenter',()=>{
            let image = ele.getAttribute('data-img')
            fixed_image.style.backgroundImage = `url(${image})`
        })
    })
}


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}
fixImageAnimation()
swiperAnimation()