
function DropdownMenu(){
  const dropdownItems = document.querySelectorAll(".courses-program-item");
  let activeIndex = null;
  
  dropdownItems.forEach((elem) =>
    elem.addEventListener("click", toggleDropdownMenu)
  );
  
  function toggleDropdownMenu(e) {
    const menu = e.currentTarget.querySelector(".dropdown-list-box");
    const isAdded = menu.classList.toggle("d-none");
    if (activeIndex && activeIndex !== menu) {
      activeIndex.classList.add("d-none");
    }
    if (!isAdded) {
      activeIndex = menu;
    }
  }
}
function animDropBtn(){
  const dropdownItems = document.querySelectorAll(".courses-program-item");
  let activeIndex = null;
  
  dropdownItems.forEach((elem) =>
    elem.addEventListener("click", toggleDropdownMenu)
  );
  
  function toggleDropdownMenu(e) {
    const menu = e.currentTarget.querySelector(".dropdown-link-box__icon");
    const isAdded = menu.classList.toggle("active");
    if (activeIndex && activeIndex !== menu) {
      activeIndex.classList.add("active");
    }
    if (!isAdded) {
      activeIndex = menu;
    }
  }
}
DropdownMenu()
animDropBtn()