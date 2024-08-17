
let cart = []
let totalPrice = 0;

function addToCart(id, name, price) {
    //Check if the product is already in the cart const existingProduct = cart.find(item => item.id ===id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        //Add new product to the cart.push({id,name,price,quantity:1})
    }
    updateCart();
}

function updateCart() {
    // Clear previous items const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ";

    //Calculate total price totalPrice = 0;

    //Display cart items 
    cart.forEach(item =>{
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}-$${item.price} x ${item.quantity}`;
    cartItems.appendChild(listItem);

    //Calculate total
    totalPrice += item.price * item.quantity;
});

//Update total price in the DOM
document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    if(cart.length ===0){
        alert('Your cart is empyy!');
    }else{
        alert(`thank you for your purchase!Total:$${totalPrice}`);
        //Clear the cart
        cart = [];
        updateCart();
    }
}
    
