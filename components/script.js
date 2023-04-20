$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.scroll').html('<p>Sorry! Non webkit users. :(</p>');
    }
});

const wrapper = document.querySelector('.wrapper');
const container= document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    container.classList.add('container-extra');
});

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    container.classList.remove('container-extra');
});

