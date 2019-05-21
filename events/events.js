//need click event for button to redirect to signup URL

const singUp = document.querySelector('.sign-up');
const navBar = document.querySelector('.new-header-container');
const body = document.querySelector('body');
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