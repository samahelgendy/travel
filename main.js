let searchbtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formbtn = document.querySelector('#login-btn'); //
let loginform = document.querySelector('.login-form-container'); //
let formclose = document.querySelector('#form-close');
let menu =document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videobtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
searchbtn.classList.remove('fa-times'); 
searchBar.classList.remove('active');
menu.classList.remove('fa-times'); //خلت علامة البحث تظهر على شكل x
navbar.classList.remove('active');
loginform.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times'); //خلت علامة البحث تظهر على شكل x
    navbar.classList.toggle('active');
    });   //arrow function
    

searchbtn.addEventListener('click', () =>{
searchbtn.classList.toggle('fa-times'); //خلت علامة البحث تظهر على شكل x
searchBar.classList.toggle('active');
});   //arrow function


formbtn.addEventListener('click', (e) =>{
   
    loginform.classList.add('active');
    });
    
formclose.addEventListener('click', () =>{
    
    loginform.classList.remove('active');
    });

 

    // search part




    let search = document.getElementById("search-bar");
     search.addEventListener("keyup" , (e) =>{
        let searchValue = e.target.value.toLowerCase();
       
        const heads = document.querySelectorAll("h1.heading");
          heads.forEach( (head) =>{
            if(head.textContent.toLocaleLowerCase().includes(searchValue)){
                   head.parentNode.style.display ="block";
                   
            } else{
                head.parentNode.style.display ="none";
            }
          })
     })



    videobtn.forEach(btn =>{
        btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let samah = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = samah;
        });
    });
    var swiper = new Swiper(".review-slider", {
        spaceBetween:25,
        loop:true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            578: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView:2,
            },
            1024: {
                slidesPerView:3,
            },
        },
    });
    
    var swiper = new Swiper(".brand-slider", {
        spaceBetween:20,
        loop:true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        breakpoints:{
            450: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView:3,
            },
            991: {
                slidesPerView:4,
            },
            
            1200: {
                slidesPerView:5,
            },
        },
    });












