let cart = [];
let total = 0;

function addToCart(product, price){

cart.push({product,price});
total += price;

updateCart();

}

function updateCart(){

let cartList = document.getElementById("cart");
cartList.innerHTML = "";

cart.forEach(item => {

let li = document.createElement("li");
li.textContent = item.product + " - UGX " + item.price;

cartList.appendChild(li);

});

document.getElementById("total").textContent = total;

}

function sendOrder(){

if(cart.length === 0){
alert("Your order is empty");
return;
}

let message = "Hello Kuunda Bakery, I'd like to order:%0A%0A";

cart.forEach(item => {
message += item.product + " - UGX " + item.price + "%0A";
});

message += "%0ATotal: UGX " + total;

let phone = "256752566630";

let url = `https://wa.me/${phone}?text=${message}`;

window.open(url);

}