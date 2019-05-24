

const singUp = document.querySelector('.sign-up');
const navBar = document.querySelector('.new-header-container'); //second nav bar, the one that appears @mobile
// const body = document.querySelector('body');
const tabItems = document.querySelector('.tabs-items');

//click event for button to redirect to signup URL
singUp.addEventListener('click', (event) =>{
    document.location.href= "https://safespace-app.netlify.com/" ;
});

//alter background color for tabItems
tabItems.addEventListener('mouseenter', (event) => {
    tabItems.style.background = '#98ff98'; 
})
tabItems.addEventListener('mouseleave', (event) => {
    tabItems.style.background = '#f5fffa'; 
})

