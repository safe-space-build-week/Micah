//need click event for button to redirect to signup URL

const singUp = document.querySelector('.sign-up');
const navBar = document.querySelector('.new-header-container');
const body = document.querySelector('body');
const title = document.querySelector('.title');
const infoTabs = document.querySelector('.info-tabs');

singUp.addEventListener('click', (event) =>{
    document.location.href= "https://safespace-app.netlify.com/" ;
});

// add an event to change the mobile view 'new-header-container' to lower opacity on scroll

body.addEventListener('wheel', (event) => {
    //change the opacity for a limited time
    navBar.style.opacity = '.5';

    //change it back to solid after a short time
    setTimeout(function () {
        navBar.style.opacity = '1';
    }, 800)

})

//slide the title in
// title.addEventListener('click', (event) => {
//     TweenMax.to(".title", 2, {left: 500, ease:Back.easeOut});
//    console.log('title triggered')
// })
//     //  TweenMax.to(".title", 2, {left: 500});
// infoTabs.addEventListener('click', (event) =>{
//     TweenMax.from('.info-tabs', 2, {left:500});
// })