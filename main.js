const hbMenu = document.querySelector('.header-right > a');
console.log(hbMenu);

const menu = document.querySelector('.hamburger-menu')
console.log(menu);

hbMenu.addEventListener('click',function(){
  // all'evento click deve comparire il menu
  menu.classList.add("active");
});

const hbClose = document.querySelector('.hamburger-menu > a');
console.log(hbClose);

hbClose.addEventListener('click',function(){
  // all'evento click deve scomparire il menu
  menu.classList.remove("active");
});