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

const cartItems = [];

function addItem(productName) {
  cartItems.push(productName);
}

// Re-render cart list items
function updateCart() {
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

// Remove all items from cart
function clearCart() {
  cartItems.splice(0, cartItems.length);

  cartItemList.innerHTML = "";
  const pEl = document.createElement("p");
  pEl.innerText = "No items in cart.";
  cartItemList.appendChild(pEl);
}

// Checks for items, then "submits order"
function processOrder() {
  if (!cartItems.length) {
    alert("Cart is empty.");
    return;
  }
  // Process order
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
    addItem(product.name);
    updateCart();
    alert("Item added to the cart");
  });
});

btnClear.addEventListener("click", () => {
  clearCart();
  alert("Cart cleared.");
});
btnSubmit.addEventListener("click", () => {
  processOrder();
  clearCart();
  alert("Thank you for your order");
});
