document.getElementById("main-button").onclick = function() {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
};

const links = document.querySelectorAll(".header__item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-")).scrollIntoView({behavior: "smooth"});
    }
}

const buttons = document.querySelectorAll(".products__item .button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

const prices = document.getElementsByClassName("products__bottom-left-price");

document.getElementById("change-currency").onclick = function(e) {
    const currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$" ) {
        newCurrency = "₽";
        coefficient = 90;
    } else if ( currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = "3";
    }
    e.target.innerText = newCurrency;

}