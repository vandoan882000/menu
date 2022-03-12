function createMenu({
  createMenuButton,
  createButtonBack
}) {
  const navEl = document.querySelector(".nav-mobile");
  const menuEl = navEl.querySelector(".menu-mobile");
  const listEl = menuEl.querySelectorAll(".menu-mobile__link");
  const buttonShowMenu = createMenuButton();
  function renderMenuButton() {
    navEl.appendChild(buttonShowMenu);
  }
  function handleButtonClick() {
    if(buttonShowMenu.className == "btn-show") {
      menuEl.style.transform = "translateX(0)"
      buttonShowMenu.className = "btn-hide";
      buttonShowMenu.textContent = "Ẩn menu"
    }
    else
    {
      menuEl.style.transform = "translateX(100%)"
      buttonShowMenu.className = "btn-show";
      buttonShowMenu.textContent = "Hiện menu"
    }

  }
  function handleButton() {
    buttonShowMenu.addEventListener("click", handleButtonClick);
  }
  function handleButtonBackClick(event) {
    event.preventDefault();
    const currentButtonBack = event.currentTarget;
    const currentSubmenu = currentButtonBack.parentNode.parentNode;
    currentSubmenu.style.transform = "translateX(1000px)";
  }

  function renderListElClick(event) {
    const currentLi = event.currentTarget;
    const currentSubmenu = currentLi.nextElementSibling;
    if(currentSubmenu) {
      event.preventDefault();
      currentSubmenu.style.transform = "translateX(0)";
    }
  }
  function renderListEl(listElItem) {
    listElItem.addEventListener("click",renderListElClick);
    const liButton = document.createElement("li");
    const buttonBack = createButtonBack();
    liButton.appendChild(buttonBack);
    const currentSubmenu = listElItem.nextElementSibling;
    if(currentSubmenu) {
      currentSubmenu.insertAdjacentElement("afterBegin", liButton);
      buttonBack.addEventListener("click",handleButtonBackClick);
      buttonBack.textContent = "Back to " + listElItem.textContent;
    }
    if(listElItem.nextElementSibling) {
      const i = document.createElement("i");
      i.className = "fas fa-chevron-right";
      listElItem.appendChild(i);
    }

  }
  function init() {
    renderMenuButton();
    handleButton();
    listEl.forEach(renderListEl);
  }

  init();
}

createMenu({
  createMenuButton() {
    const buttonShowMenu = document.createElement("button");
    buttonShowMenu.textContent = "Hiện menu";
    buttonShowMenu.className = "btn-show"
    return buttonShowMenu;
  },
  createButtonBack() {
    const buttonBack = document.createElement("button");
    buttonBack.textContent = "Back";
    return buttonBack;
  }
});




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
// function handleClickCloseMenu() {
//   iconBar.style.display = "block";
//   iconTime.style.display = "none";
//   menuMobile.className = "nav-mobile";
// }
// iconBar.addEventListener("click", function click(){
//   iconBar.style.display = "none";
//   iconTime.style.display = "block";
//   menuMobile.className = "nav-mobile--active";
// });
// iconTime.addEventListener("click", function click(){
//   iconBar.style.display = "block";
//   iconTime.style.display = "none";
//   menuMobile.className = "nav-mobile";
// });

// // function handleClickDropDown(li) {
// //   if(li.className == "menu-mobile__list"){
// //     li.className = li.className + "--active";
// //     console.log(li.className + "");
// //   }
// //   else
// //   {
// //     li.className = "menu-mobile__list";
// //   }
// // };
