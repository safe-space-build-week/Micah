

const singUp = document.querySelector('.sign-up');
const navBar = document.querySelector('.new-header-container'); //second nav bar, the one that appears @mobile
// const body = document.querySelector('body');
const tabItems = document.querySelector('.tabs-items');

//click event for button to redirect to signup URL
singUp.addEventListener('click', (event) =>{
    document.location.href= "https://safespace-app.netlify.com/" ;
});

// add an event to change the mobile view 'new-header-container' to lower opacity on scroll
//opacity for navBar2
// body.addEventListener('wheel', (event) => {
//     //change the opacity for a limited time
//     navBar.style.opacity = '.5';

//     //change it back to solid after a short time
//     setTimeout(function () {
//         navBar.style.opacity = '1';
//     }, 800)

// })


//alter background color for tabItems
tabItems.addEventListener('mouseenter', (event) => {
    tabItems.style.background = '#98ff98'; 
})
tabItems.addEventListener('mouseleave', (event) => {
    tabItems.style.background = '#f5fffa'; 
})

