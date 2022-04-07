const hbMenu = document.querySelector('.header-right > a');
console.log(hbMenu);

const menu = document.querySelector('.hamburger-menu')
console.log(menu);

hbMenu.addEventListener('click',function(){
  // all'evento click deve comparire oppure scomparire tutto il menu in absolute
  menu.classList.add("active");
});