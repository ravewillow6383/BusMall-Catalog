/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
var tbody = document.querySelector('tbody');

function clearCart() {
  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  

  // TODO: Iterate over the items in the cart
  for (var i in cart.items) {
    var trEl = document.createElement('tr');

    var dumpItem = document.createElement('button');
    dumpItem.type = 'button';
    dumpItem.textContent = 'X';
    dumpItem.id = i;
    trEl.appendChild(dumpItem);

    var quantity = document.createElement('td');
    quantity.textContent = cart.items[i].quantity;
    trEl.appendChild(quantity);

    var product = document.createElement('td');
    product.textContent = cart.items[i].product;
    trEl.appendChild(product);

    tbody.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(parseInt(event.target.id));
  cart.saveToLocalStorage();
  renderCart();

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();