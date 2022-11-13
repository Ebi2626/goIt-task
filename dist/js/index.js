const MENU_BREAKPOINT=768,MENU_OPENED_CLASS="header__nav--open",MENU_COMPLETED_CLASS="header__nav--completed",DELAYED_TYPES={ADD:"ADD",REMOVE:"REMOVE"};function manageClasswithDelay(element,action_type,css_class,duration=0){switch(action_type){case DELAYED_TYPES.ADD:setTimeout((()=>{element.classList.add(css_class)}),duration);break;case DELAYED_TYPES.REMOVE:setTimeout((()=>{element.classList.remove(css_class)}),duration);break;default:console.error("Wrong action type: ",action_type)}}window.addEventListener("DOMContentLoaded",(()=>{const toggleButton=document.querySelector("#toggle"),menu=document.querySelector("#menu"),menuElements=Array.from(document.querySelectorAll(".header__navListItemLink"));menuElements.push(toggleButton),menuElements.forEach((el=>{el.addEventListener("click",(()=>{menu.classList.contains(MENU_OPENED_CLASS)?(manageClasswithDelay(menu,DELAYED_TYPES.REMOVE,MENU_COMPLETED_CLASS),manageClasswithDelay(menu,DELAYED_TYPES.REMOVE,MENU_OPENED_CLASS,500)):(manageClasswithDelay(menu,DELAYED_TYPES.ADD,MENU_OPENED_CLASS),manageClasswithDelay(menu,DELAYED_TYPES.ADD,MENU_COMPLETED_CLASS,10))}))}))})),window.addEventListener("resize",(()=>{const windowWidth=window.innerWidth,menu=document.querySelector("#menu");windowWidth>768&&(menu.classList.contains(MENU_OPENED_CLASS)&&manageClasswithDelay(menu,DELAYED_TYPES.REMOVE,MENU_OPENED_CLASS),menu.classList.contains(MENU_COMPLETED_CLASS)&&manageClasswithDelay(menu,DELAYED_TYPES.REMOVE,MENU_COMPLETED_CLASS))}));