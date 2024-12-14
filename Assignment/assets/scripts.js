let cartTotal = 0;
let cartItems = 0;

const prices = {
    'peanut butter': 20,
    'sandies': 30,
    'party press': 35,
    'chocolate chip': 25,
};

// Function to add items to the cart
function addToCart(item) {
    if (prices[item]) {
        cartTotal += prices[item];
        cartItems += 1;
        updateCart();
        alert(`Added ${item} to your cart. Total: ₹${cartTotal}`);
    } else {
        alert("Error: Item not found.");
    }
}

// Function to update the cart display
function updateCart() {
    const cartValueElement = document.querySelector('.hoverText');
    const cartItemsElement = document.getElementById('cartItems');
    cartValueElement.textContent = `₹${cartTotal}`;
    cartItemsElement.textContent = `Items: ${cartItems}`;
}

// Function for checkout
function checkout() {
    if (cartItems === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Checking out ${cartItems} items for ₹${cartTotal}. Thank you!`);
        cartTotal = 0;
        cartItems = 0;
        updateCart();
    }
}
// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
