document.querySelector('#call-projects').addEventListener('click', (ev) => {
  scrollTo('.projects');
})

document.querySelector('#call-about').addEventListener('click', (ev) => {
  scrollTo('.about');
})

document.querySelector('#call-contact').addEventListener('click', (ev) => {
  scrollTo('.contact');
})

function scrollTo(selector) {
  const el = document.querySelector(selector);
  const container = document.querySelector('.container');
  container.scrollTo({
    top: el.offsetTop,
    behavior: 'smooth'
  })
  document.querySelector(`${selector} .bg-text`).classList.add('animate__animated', 'animate__shakeX')
}


// document.querySelector('.container').addEventListener('scroll', (ev) => {
//   if (isScrolledIntoView('.projects .bg-text')) {
//     document.querySelector('.projects .bg-text').classList.add('animate__flipInX', 'visible');
//   } else {
//     document.querySelector('.projects .bg-text').classList.remove('animate__flipInX', 'visible')
//   }

//   if (isScrolledIntoView('.about .bg-text')) {
//     document.querySelector('.about .bg-text').classList.add('animate__flipInX', 'visible');
//   } else {
//     document.querySelector('.about .bg-text').classList.remove('animate__flipInX', 'visible');
//   }
// })

// function isScrolledIntoView(selector) {
//   const el = document.querySelector(selector);
//   const container = document.querySelector('.container');
//   const bounding = el.getBoundingClientRect();

//   return bounding.top >= 0 &&
//     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
// }