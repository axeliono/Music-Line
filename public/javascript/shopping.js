async function displayShoppingCart(event) {
    event.preventDefault();
  
    const response = await fetch("/api/shopping/myCart", {
      method: "GET" 
    });
    if (response.ok) {
      document.location.replace('/shopping-cart');
    } else {
        document.location.replace('/');
      alert(response.statusText);
    }
}
  
document.querySelector('.fa-shopping-cart').addEventListener('click', displayShoppingCart);