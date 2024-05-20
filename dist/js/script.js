// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.scrollY > fixNav){
        header.classList.add('navBar-fixed');
    }else{
        header.classList.remove('navBar-fixed');
    }
}
