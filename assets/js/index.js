const toggler_DOM = document.querySelector(".toggler");
const altText_DOM = document.querySelector(".alt-text");

toggler.addEventListener("click",function(event){
    document.body.classList.toggle("dark");
    altText_DOM.classList.toggle("alt-text-display");
})