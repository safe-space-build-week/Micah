//need click event for button to redirect to signup URL

const singUp = document.querySelector('.sign-up');
const navBar = document.querySelector('header');
const navBar2 = document.querySelector('.new-header-container'); //second nav bar, the one that appears @mobile
const body = document.querySelector('body');
const title = document.querySelector('.title');
const infoTabs = document.querySelector('.info-tabs');

singUp.addEventListener('click', (event) =>{
    document.location.href= "https://safespace-app.netlify.com/" ;
});

// add an event to change the mobile view 'new-header-container' to lower opacity on scroll
//opacity for navBar2
body.addEventListener('wheel', (event) => {
    //change the opacity for a limited time
    navBar2.style.opacity = '.5';

    //change it back to solid after a short time
    setTimeout(function () {
        navBar2.style.opacity = '1';
    }, 800)

})
//opacity for navBar
//Not sure I like this for the desktop view, sometimes clips behind content
// body.addEventListener('wheel', (event) => {
//     navBar.style.opacity = '.5';

//     //change it back to solid after a short time
//     setTimeout(function () {
//         navBar.style.opacity = '1';
//     }, 800)
// })
//fade the title in
TweenMax.from(".title" , 4 , {opacity: .1});
//fade the nav items in, but a little slower than title
TweenMax.from(".nav-item", 7, {opacity: 0});