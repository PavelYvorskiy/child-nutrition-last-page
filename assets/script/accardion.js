class Accordion {
    constructor(items, activeClass, activeItem) {
      this.items       = items
      this.activeClass = activeClass
      this.activeItem  = activeItem
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.add(this.activeClass)
      }
    }
  
    changeActiveItem(newItemIndex) {
      if (newItemIndex === this.activeItem) {
        return
      }
      if (typeof this.activeItem === 'number') {
        this.items[this.activeItem].classList.remove(this.activeClass)
      }
      this.activeItem = newItemIndex
      this.items[this.activeItem].classList.add(this.activeClass)
    }
  }
  function accordionHandler() {
    const handlerItem = (itemIndex) => {
      return () => {
        btnAccordionItem.changeActiveItem(itemIndex);
        visibleAccordionItem.changeActiveItem(itemIndex);
      };
    };
    const btnActiveItem = document.querySelectorAll(
      ".desktop-list-item"
    );
    const visibleActiveItem = document.querySelectorAll(
      ".desktop-content-block-item"
    );
  
    const btnAccordionItem = new Accordion(btnActiveItem, "active", 0);
    const visibleAccordionItem = new Accordion(visibleActiveItem, "active", 0);
  
    btnActiveItem.forEach((item, index) => {
      item.addEventListener("click", handlerItem(index));
    });
  }
  
  const visibleContent = document.querySelector(".visibleContent");
  if (visibleContent) {
    accordionHandler();
  }
