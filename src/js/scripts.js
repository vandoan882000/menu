function createMenu({
  width = 100,
  createMenuButton,
  createButtonBack
}) {
  /**
   * @type {HTMLElement}
   */
  const navEl = document.querySelector(".nav-mobile");
  /**
   * @type {HTMLUListElement}
   */
  const menuEl = navEl.querySelector(".menu-mobile");
  const listEl = menuEl.querySelectorAll(".menu-mobile__link");
  const buttonShowMenu = createMenuButton();
  function renderMenuButton() {
    navEl.appendChild(buttonShowMenu);
  }
  function handleButtonClick() {
    const iconMenu = buttonShowMenu.children[0];
    if( iconMenu.className == "fa-solid fa-bars") {
      menuEl.style.transform = "translateX(0)"
      iconMenu.className = "fas fa-times"
    }
    else
    {
      menuEl.style.transform = "translateX(100%)";
      iconMenu.className = "fa-solid fa-bars";
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
      const i = document.createElement("i");
      i.className = "fas fa-chevron-right";
      listElItem.insertAdjacentElement("beforeEnd", i);
      currentSubmenu.insertAdjacentElement("afterBegin", liButton);
      buttonBack.addEventListener("click",handleButtonBackClick);
      buttonBack.textContent = " Back to " + listElItem.textContent;
      const iconBack = document.createElement("i");
      iconBack.className = "fas fa-arrow-left";
      buttonBack.insertAdjacentElement("afterBegin", iconBack);
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
    buttonShowMenu.className = "btn-show";
    buttonShowMenu.id = "btn-show";
    const iconBar = document.createElement("i");
    iconBar.className = "fa-solid fa-bars"
    buttonShowMenu.appendChild(iconBar);
    return buttonShowMenu;
  },
  createButtonBack() {
    const buttonBack = document.createElement("button");
    buttonBack.textContent = "Back";
    buttonBack.className = "btn-back";
    return buttonBack;
  }
});

function sizeScreen() {
  const menu = document.getElementById("nav");
  /**
   * @type {HTMLElement}
   */
   const navEl = document.querySelector(".nav-mobile");
  const buttonMenu = document.getElementById("btn-show");
  function initMenu() {
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      menu.style.display = "none";
      navEl.style.transform = "translateX(0)"
    }
    else
    {
      buttonMenu.style.display = "none";
      menu.style.display = "flex";
      navEl.style.transform = "translateX(100%)"
    }
  }
  function resizeScreen(){
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      menu.style.display = "none";
      navEl.style.transform = "translateX(0)"
    }
    else
    {
      buttonMenu.style.display = "none";
      menu.style.display = "flex";
      navEl.style.transform = "translateX(100%)"
    }
  }
  function init() {
    initMenu();
    window.addEventListener('resize', resizeScreen );
    console.log(buttonMenu);
  }
  init();
}

sizeScreen();

