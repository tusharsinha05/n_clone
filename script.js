const faq = document.querySelector('#faq');
const box1 = document.querySelector('#box1');
const cross = document.querySelector(".cross");
const login = document.querySelector('.login');
const sign = document.querySelector('.n-btn1');

var hero = document.querySelector('.hero');
faq.addEventListener('click', function(){
    box1.classList.toggle('load');
    cross.classList.toggle('cross1')
})

sign.addEventListener('click',function(){
    login.classList.add('pop');
    hero.classList.add('over1');
})

const close = document.querySelector('.close');
close.addEventListener('click',function(){
    login.classList.remove('pop');
    hero.classList.remove('over1');
})

