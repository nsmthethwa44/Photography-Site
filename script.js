  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  // blog slider 
  var swiper = new Swiper(".myBlog", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // accordion 
  let accord = document.querySelectorAll(".accordion");
  accord.forEach((item) =>{
    item.onclick = () =>{
      accord.forEach(subAccord => {
        subAccord.classList.remove("active");
      })
      item.classList.add("active");
    }
  })

  // declare variables 
let header = document.querySelector(".header");
let closeBox = document.querySelector(".close");
let navbar = document.querySelector(".navbar");
let menuBox = document.querySelector(".menu");
let goUp = document.querySelector(".goUp");

window.onscroll = () =>{
  navbar.classList.remove("active");

    if (window.scrollY > 120){
        header.classList.add("active");
        goUp.classList.add("active");
    }else{
        header.classList.remove("active");
        goUp.classList.remove("active");
    }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menuBox.classList.remove("close")
  }
});

// show navbar onclick 
menuBox.onclick = () =>{
    navbar.classList.toggle("active");
    menuBox.classList.toggle("close")
  }
