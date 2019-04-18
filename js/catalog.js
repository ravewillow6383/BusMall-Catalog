/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.value = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  var selectedItem = document.getElementById('items').value;

  var desiredQuantity = document.getElementById('quantity').value;

  cart.addItem(selectedItem, desiredQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
// FOR REAL TODO LATER - GET NUMBER ON CART PAGE
var counter = 0;
function updateCounter() {
  counter += parseInt(document.getElementById('quantity').value);
  var spanEl = document.getElementById('itemCount');
  spanEl.textContent = counter;
}

function updateCartPreview() {
  var previewList = document.getElementById('cartContents');
  var liEl = document.createElement('li');
  liEl.style.listStyle = 'none';
  liEl.textContent = `${document.getElementById('items').value}: ${document.getElementById('quantity').value}`;
  previewList.appendChild(liEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
