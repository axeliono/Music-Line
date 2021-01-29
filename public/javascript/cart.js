let removeItemBtn = document.querySelector('.remove');

// function to delete item from cart

async function deleteItemHandler (event) {
    event.preventDefault();

    const id = this.getAttribute("item");
    console.log(id);

    const response = await fetch(`/api/shopping/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

window.addEventListener('load', (event) => {
    let sum = 0;
    let subtotal = 0;
    let prices = document.querySelectorAll('.enter-price');
    for(i=0; i<prices.length; i++) {
        sum += (parseInt(prices[i].innerText));
    }
    
    subtotal = (sum * 1.0825);
    let subDollar = subtotal.toFixed(2);
    let total = document.querySelector('.summary-total');
    let subt = document.querySelector('.summary-subtotal');

    total.innerHTML = '$ ' + sum;
    subt.innerHTML = '$ ' + subDollar;
});

removeItemBtn.addEventListener('click', deleteItemHandler);