class Menu {
    constructor(menuElement){
        this.menuElement = menuElement;

        this.button = this.menuElement.querySelector('.dropdown-button');

        this.menuContent = this.menuElement.querySelector('.menu-content');

        //event to display content of menu
        this.button.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu(){
        this.menuContent.classList.toggle('dropdown-hidden');
    }





}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Menu(dropdown));