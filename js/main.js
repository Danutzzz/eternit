AOS.init();

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.style.opacity = "1"; 
    } else {
        header.style.opacity = "0";
    }
});

function Click() {
    const menu = document.getElementById("Nav_links");
    if (window.innerWidth <= 550) 
        {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }
}

window.addEventListener("scroll", function() {
    const menu = document.getElementById("Nav_links");
    if (window.innerWidth <= 550 && menu.style.display === "flex" && window.scrollY > 10) {
        menu.style.display = "none"; 
    }
});
