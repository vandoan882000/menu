window.addEventListener('resize', resizeScreen );
const iconBar = document.getElementById("icon-bar");
const iconTime = document.getElementById("icon-time");
const menu = document.getElementById("nav");
const menuMobile = document.getElementById("nav-mobile");
(function initMenu() {
  if(window.innerWidth < 1000)
  {
    iconBar.style.display = "block";
    iconTime.style.display = "none";
    menuMobile.className = "nav-mobile";
    menu.style.display = "none";
  }
  else
  {
    iconBar.style.display = "none";
    iconTime.style.display = "none";
    menuMobile.className = "nav-mobile";
    menu.style.display = "flex";
  }
})();
function resizeScreen(){
  if(window.innerWidth < 1000)
  {
    iconBar.style.display = "block";
    iconTime.style.display = "none";
    menuMobile.className = "nav-mobile";
    menu.style.display = "none";
  }
  else
  {
    iconBar.style.display = "none";
    iconTime.style.display = "none";
    menuMobile.className = "nav-mobile";
    menu.style.display = "flex";
  }
}
function handleClickCloseMenu() {
  iconBar.style.display = "block";
  iconTime.style.display = "none";
  menuMobile.className = "nav-mobile";
}
iconBar.addEventListener("click", function click(){
  iconBar.style.display = "none";
  iconTime.style.display = "block";
  menuMobile.className = "nav-mobile--active";
});
iconTime.addEventListener("click", function click(){
  iconBar.style.display = "block";
  iconTime.style.display = "none";
  menuMobile.className = "nav-mobile";
});
const menuList = document.querySelectorAll(".menu-mobile__list");


function handleClickDropDown(li) {
  if(li.className == "menu-mobile__list"){
    li.className = li.className + "--active";
    console.log(li.className + "");
  }
  else
  {
    li.className = "menu-mobile__list";
  }
};
