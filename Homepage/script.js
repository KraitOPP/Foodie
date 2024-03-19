document.addEventListener("DOMContentLoaded", function() {
    const menubtn = document.querySelector(".menu-icon-box");
    function menu_fn(){
        const menu=document.querySelector(".menu-icon-box");
        const menucontent=document.querySelector(".menu-content");
        const menuitems=document.querySelector(".menu-items");
        const l1=document.querySelector(".menu-line1")
        const l2=document.querySelector(".menu-line2")
        const l3=document.querySelector(".menu-line3");
        l1.classList.toggle("menu-close1");
        l2.classList.toggle("menu-close2");
        l3.classList.toggle("menu-close3");
        menu.classList.toggle("active");
        menuitems.classList.toggle("active");
        menucontent.classList.toggle("active");
    }
    menubtn.addEventListener("click", menu_fn);
});

function opensignin(){
    window.location.href = "https://kraitopp.github.io/Foodie/LoginSignUp/index.html";
}
function openmenupage(){
    window.location.href = "https://kraitopp.github.io/Foodie/MainPage/index.html";
}

const signIn=document.querySelector(".sign-in-box");
const signInMobile=document.querySelector(".sign-in-mobile");
const signInMobile2=document.querySelectorAll(".sign-in-mobile")[1];
const browsemenu=document.querySelector(".browse-menu");
const browsemenu2=document.querySelectorAll(".browse-menu")[1];

signIn.addEventListener("click", opensignin);
signInMobile.addEventListener("click", opensignin);
signInMobile2.addEventListener("click", opensignin);
browsemenu.addEventListener("click", openmenupage);
browsemenu2.addEventListener("click", openmenupage);
