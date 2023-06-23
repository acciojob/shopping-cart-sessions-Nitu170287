// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cart = []
// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list")
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
 cart = JSON.parse(sessionStorage.getItem("cart"))
	cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
	//console.log(productId)
	let selectedItem = products.find(ele => ele.id==productId)
	cart.push(selectedItem)
	sessionStorage.setItem("cart",JSON.stringify(cart))
}


// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {}

// Initial render
renderProducts();
renderCart();
 
document.querySelectorAll(".add-to-cart-btn").forEach((btn)=>{
	btn.addEventListener("click",(event)=>{
let itemId = event.target.getAttribute("data-id")
		addToCart(itemId )
})
})
	
	
