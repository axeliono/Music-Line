// function to delete item from cart

async function deleteItemHandler (event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

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
       let prices = document.querySelectorAll('.price');
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

document.querySelector('.remove').addEventListener('click', deleteItemHandler);