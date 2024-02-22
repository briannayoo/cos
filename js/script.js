// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const slideCount = slides.length;
// let currentIdx = 0;
// let timer;

// function showSlide(idx){
//   for(let slide of slides){
//     slide.classList.remove('active');
//   }
//   slides[idx].classList.add('active');
//   currentIdx = idx;
// }
// showSlide(0);
// nextBtn.addEventListener('click',()=>{
//   let nextIdx = (currentIdx + 1) % slideCount;
//   showSlide(nextIdx);
// })
// prevBtn.addEventListener('click',()=>{
//   let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
//   showSlide(nextIdx);
// })



// function randomSlide(){
//   timer = setInterval(()=>{
//     let nextIdx = Math.floor(Math.random()*4);
//     showSlide(nextIdx);
//   }, 3000);
// }
// randomSlide();
const mainMenu = document.querySelectorAll('#list > li');

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
console.log(headerHeight);
for(let mm of mainMenu){
	mm.addEventListener('mouseover',()=>{
		let smHeight = mm.querySelector('ul').offsetHeight;
		let totalHeight = smHeight + headerHeight;
		header.style.height = `${totalHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${headerHeight}px`;
	});
}






const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = document.querySelector('.slidecontainer');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const gap = 20;
const slideCount = slides.length;
let currentIdx = 0;
let timer;

let slideWidth = slideWrapper.offsetWidth;
    for(var i = 0;i<slideCount;i++){
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.appendChild(cloneSlide);
  }
  for(var i = slideCount -1; i>=0 ; i--){
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.prepend(cloneSlide);
  }
const newslidesCount = document.querySelectorAll('.slide').length;
console.log(newslidesCount);

slideContainer.style.width = `${slideWidth*newslidesCount +gap*newslidesCount-1}px`;

function showSlide(idx){
  for(let slide of slides){
    slide.classList.remove('active');
  }
  
  slideContainer.style.left = `${(slideWidth + gap) * -idx}px`;

  currentIdx = idx;

  if(currentIdx == slideCount || currentIdx == -slideCount){
    setTimeout(function(){
        slideContainer.classList.remove('animated');
        slideContainer.style.left = '0px';
        currentIdx = 0;
    },500);
    setTimeout(function(){
      slideContainer.classList.add('animated');
    },600);
  }  

}
showSlide(0);

function setSlide(){
  let ulMoveAmt = `${-(slideCount * slideWidth + gap*slideCount)}px`;

  slideContainer.style.transform = `translateX(${ulMoveAmt})`;
  slideContainer.classList.add('animated');
}
setSlide();


nextBtn.addEventListener('click',()=>{
  showSlide(currentIdx + 1);

})
prevBtn.addEventListener('click',()=>{
  showSlide(currentIdx -1);
})
