//fade the title in
TweenMax.from(".title" , 4 , {opacity: .1});
//fade the nav items in, but a little slower than title
TweenMax.from(".nav-item", 7, {opacity: 0});
//fade in tabs
TweenMax.from(".info-tabs", 2, {opacity: 0});


const body = document.querySelector('body');
// add an event to change the mobile view 'new-header-container' to lower opacity on scroll
//moved this to animations becasue .signUp is causing errors on about page
body.addEventListener('wheel', (event) => {
    //change the opacity for a limited time
    navBar.style.opacity = '.5';

    //change it back to solid after a short time
    setTimeout(function () {
        navBar.style.opacity = '1';
    }, 800)

})