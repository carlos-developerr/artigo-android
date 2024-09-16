function menuHamburguer () {
    const menu = document.querySelector('#menu');
    const iconMenu = document.querySelector('#icon-menu');
    
    iconMenu.addEventListener('click', (event) => {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    })
}

menuHamburguer();
