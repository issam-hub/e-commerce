let nav = document.querySelector("header .left-side nav");
let burger = document.querySelector("header .left-side .burger");
let exit = document.querySelector("header nav i");

// show the nav in case of burger got clicked
burger.onclick = function () {
    nav.className = "show";
};
// hide the nav in case of exit got clicked
exit.onclick = function () {
    nav.classList.remove("show");
};

let avatar = document.querySelector("header .right-side .avatar");

// on click, put a border on the avatar
avatar.onclick = function () {
    avatar.classList.toggle("border-avatar");
};
// in case if we clicked on landing, remove the border from the avatar
document.querySelector(".landing").onclick = function () {
    avatar.classList.remove("border-avatar");
};

let mainImage = document.querySelector(".landing .gallery .active-main");
let miniImages = document.querySelectorAll(".landing .gallery .other .image");
let prev = document.querySelector(".landing .gallery .prev");
let next = document.querySelector(".landing .gallery .next");

miniImages.forEach((image) => {
    image.addEventListener("click", function (e) {
        // when we click on a certain image from that miniImages, remove the "active" look from all of them
        miniImages.forEach((image) => {
            image.classList.remove("active");
        });
        // put the active look on the image that we clicked on
        e.currentTarget.classList.add("active");
        // change the mainImage on the image that we clicked on, using custom attribute
        mainImage.src = e.currentTarget.dataset.img;
    });
});
// make a variable of that hold the index of the first image
let i = 1;

next.onclick = function () {
    // in case of that, change the mainImage to the next one
    i++;
    // check if the image index has breaked the limit
    if (i > 4) {
        // in that case return the index to the initial value
        i = 1;
    }
    // change the mainImage by its index
    mainImage.src = `images/image-product-${i}.jpg`;
};

// same thing as next but in reversed way
prev.onclick = function () {
    i--;
    if (i < 1) {
        i = 4;
    }
    mainImage.src = `images/image-product-${i}.jpg`;
};

let cart = document.querySelector("header .right-side .cart");
let plus = document.querySelector(".landing .amount .plus");
let minus = document.querySelector(".landing .amount .minus");
let amount = document.querySelector(".landing .amount span");
let cartContent = document.querySelector("header .cart .cart-content");
let product = document.querySelector("header .cart-content .product");
let productAmount = document.querySelector("header .product .price p");
let totalPrice = document.querySelector("header .product .price h4");
let checkout = document.querySelector("header .cart-content .check");
let empty = document.querySelector("header .cart .cart-content > p");
let deleting = document.querySelector("header .cart-content .product .delete");
let add = document.querySelector(".landing .actions .add");

// create a span to add the amount of orders to the cart
let span = document.createElement("span");

cart.onclick = function () {
    // display the cart tab
    cartContent.classList.toggle("display");
};

add.onclick = function () {
    // make the order and add it to the cart
    makeOrder();
};
plus.onclick = function () {
    // incrementing the amount of order
    amount.textContent = Number(amount.textContent) + 1;
    // add the number of orders in the cart
    cart.append(span);
    // make the number of orders equam to the amount
    span.textContent = amount.textContent;
    // put the amount in the cart
    productAmount.textContent = `$125.00 x ${span.textContent}`;
    // do some math to calculate the total price
    totalPrice.textContent = `$${125.0 * Number(span.textContent)}.00`;
};
// same as plus but in reversed way
minus.onclick = function () {
    amount.textContent = Number(amount.textContent) - 1;
    span.textContent = amount.textContent;
    productAmount.textContent = `$125.00 x ${span.textContent}`;
    totalPrice.textContent = `$${125.0 * Number(span.textContent)}.00`;
    // in case of there is no order, empty the cart
    if (Number(amount.textContent) < 1) {
        makeItEmpty();
    }
};
deleting.onclick = function () {
    // in case of the order is cancelled, empty the cart
    makeItEmpty();
};

function makeItEmpty() {
    // return the amount to its initial value means 0
    amount.textContent = "0";
    // remove the number of orders from the cart
    cart.removeChild(span);
    // displaying that the cart is empty
    empty.style.display = "block";
    // hide the product order and the checkout button
    product.style.display = "none";
    checkout.style.display = "none";
}
function makeOrder() {
    // hiding that the cart is empty
    empty.style.display = "none";
    // display the product order
    product.style.display = "flex";
    // display the checkout button
    checkout.style.display = "block";
}
