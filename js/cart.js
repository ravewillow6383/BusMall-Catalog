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
  while (tbody.lastchild) {
    tbody.removeChild(tbody.lastChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for(var i in cart.items) {
    var trElement = document.createElement('tr');

    var disposeItem = document.createElement('button');
    disposeItem.type = 'button';
    disposeItem.textContent = 'X';
    disposeItem.id = i;
    trElement.appendChild(disposeItem);
    // TODO: Find the table bod
    var quantity = document.createElement('td');
    quantity.textContent = cart.Items[i].quantity;
    trElement.appendChild(quantity);

    var product = document.createElement('td');
    product.textContentn= cart.items[i].product;
    trElement.appendChild(product);

    tbody.appendChild(trElement);
  }
}

function removeItemFromCart(event) {

  cart.removeItem(parseInt(event.target.id));
  cart.saveToLocalStprage();
  renderCart();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


}
// This will initialize the page and draw the cart on screen
renderCart();
