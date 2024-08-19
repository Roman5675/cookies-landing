document.getElementById("main-button").onclick = function() {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
};

const links = document.querySelectorAll(".header__item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-")).scrollIntoView({behavior: "smooth"});
    }
}