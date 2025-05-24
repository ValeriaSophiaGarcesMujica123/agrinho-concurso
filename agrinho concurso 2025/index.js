const saibaMais = document.getElementById("section-one");
const main = document.getElementById("main");
const linksAcess = document.getElementById("links-acess");
const body = document.getElementById("body");
linksAcess.addEventListener("click", function(e) {

   saibaMais.classList.add("closeAndHide");
   main.style.display = 'unset';
   body.style.backgroundColor = 'white';

});

const logo = document.getElementById("logo");
const nav = document.getElementById("nav");

logo.addEventListener("click", function(e) {

    nav.classList.toggle("closeAndHide");

});

console.log(window.innerWidth);


const heroImage = document.getElementById("heroImage");
const heroImageTwo = document.getElementById ("heroImageTwo")

window.addEventListener('resize', function(e) {
const numbers = window.innerWidth;
if (numbers < 883) {
    heroImage.classList.add("closeAndHide");
    heroImageTwo.classList.remove("closeAndHide");

} else {

    heroImage.classList.remove("closeAndHide");
    heroImageTwo.classList.add("closeAndHide");
    console.log("hello world");
}

});
window.dispatchEvent(new Event('resize'));