let menuBtn = document.getElementById('show_btn');
let closeBtn = document.getElementById('close_icon');
let menuContainer = document.getElementById('menu_container');
menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);

function showMenu() {
    menuContainer.style.left = '0';
}

function hideMenu() {
    menuContainer.style.left = '-100vw';
}