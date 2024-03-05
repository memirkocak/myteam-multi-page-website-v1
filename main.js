let btnBurger = document.querySelector('#btn-burger');
let menu = document.querySelector('#divmenu');
let closebtn = document.querySelector('#close');

btnBurger.addEventListener('click',()=>{
    menu.style.display = 'block';
});

closebtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
});