const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const productEls = document.getElementsByClassName("product-card");
const cartItemList = document.getElementById("cart-items");
const btnClear = document.getElementById("btn-clear");
const btnSubmit = document.getElementById("btn-submit");

// Convert products into a useful array of data
const productList = [];
for (let product of productEls) {
  const pChildren = product.children[1].children;
  const productName = pChildren[0].innerText;
  const productPrice = pChildren[1].innerText.slice(1);
  const productBtn = pChildren[2];

  productList.push({ name: productName, price: productPrice, btn: productBtn });
}

// Load cart from sessionStorage
function getCartItems() {
  const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  return cartItems;
}

// Write cart to sessionStorage
function setCartItems(cartItems) {
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Delete cart from sessionStorage
function removeCartItems() {
  sessionStorage.removeItem("cartItems");
}

// Add new item to cart and update sessionStorage
function addItemToCart(productName) {
  const cartItems = getCartItems();
  cartItems.push(productName);
  setCartItems(cartItems);
  alert("Item added to the cart");
}

// Re-render cart list items
function updateCart() {
  const cartItems = getCartItems();
  cartItemList.innerHTML = "";

  if (!cartItems.length) {
    const pEl = document.createElement("p");
    pEl.innerText = "No items in cart.";
    cartItemList.appendChild(pEl);
    return;
  }

  for (let item of cartItems) {
    const itemEl = document.createElement("li");
    itemEl.innerText = item;
    cartItemList.appendChild(itemEl);
  }
}

// Delete sessionStorage and render empty cart
function removeItemsFromCart() {
  const cartItems = getCartItems();
  if (!cartItems.length) {
    return 0;
  }

  removeCartItems();
  cartItemList.innerHTML = "";

  const pEl = document.createElement("p");
  pEl.innerText = "No items in cart.";
  cartItemList.appendChild(pEl);
  return 1;
}

// Empty cart and notify user
function clearCart() {
  const statusCode = removeItemsFromCart();
  alert(statusCode ? "Cart cleared." : "Cart is empty.");
}

// Submit cart and notify user
function processCart() {
  const statusCode = removeItemsFromCart();
  alert(statusCode ? "Thank you for your order." : "Cart is empty.");
}

/* --- Event Listeners --- */

// Open modal
openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Product buttons
productList.forEach((product) => {
  product.btn.addEventListener("click", () => {
    addItemToCart(product.name);
    updateCart();
  });
});

// Clear Cart
btnClear.addEventListener("click", () => {
  clearCart();
});

// Process Order
btnSubmit.addEventListener("click", () => {
  processCart();
});

// On Load
updateCart();