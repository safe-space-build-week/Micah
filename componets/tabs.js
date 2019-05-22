class TabLink {
    constructor(element) {
      // Assign element to have value passed in
       this.element = element;
      
      // assign the data-tab attribute to this.data
      this.data = element.dataset.tab;
      
      //using itemElement, assign the things that have that data-tab to itemElement
       this.itemElement = document.querySelector(`.tabs-item[data-tab ='${this.data}']`);
        // console.log(this.itemElement, 'itemElement');
      
      // Create new instance of TabItem class
       this.tabItem = new TabItem(this.itemElement);
      
      // Event listener to call select() on click
        this.element.addEventListener('click', () => this.select());
    };
  
    select() {
      // Store all elements with the class .tabs-link inside links
       const links = document.querySelectorAll('.tabs-link');
  
      // Remove the 'tabs-link-selected' class from each element in links
      Array.from(links).forEach((item) => {
        item.classList.remove('tabs-link-selected') // might want to toggle isntead, idk
      });
  
      // Add class .tabs-link-selected to element
       this.element.classList.add('tabs-link-selected');
      
      // Call select() on the new tabItem obj
      this.tabItem.select();
    }
  
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the element that is passed in
       this.element = element;
    }
  
    select() {
      // Store all elements with class '.tabs-item' inside of const items
      const items = document.querySelectorAll('.tabs-item');  
  
      // remove class 'tabs-items-selected' from each element in items
      items.forEach((item) => {
        item.classList.remove('tabs-item-selected');
        
      })
      // Add class 'tabs-item-selected' to passed in element
      this.element.classList.add('tabs-item-selected');
    }
  }
  

  //store all elements with .tabs-link inside of links
  let links = document.querySelectorAll('.tabs-link');
  
  //for each item in links, create a new TabLink obj
  links.forEach(item => {
    const tabLink = new TabLink(item);
  })