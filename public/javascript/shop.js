// function to click on card to be taken to that single-instrument
// page view by id
async function instrumentCardHandler (event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/instrument/${id}`, {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace('/single-instrument');
    } else {
        alert(response.statusText);
    }
    // get ID from name of instrument
    // reload document to single page matching id
}

document.querySelector('.card').addEventListener('click', instrumentCardHandler);


// function for clicking add to cart button which will 
// add instrument to shopping cart display

// get ID of instrument from browser
// fetch to add instrument to shopping cart page
// and to shopping cart model? 


// function to load instruments by category on the shop-category
// page when a category is clicked from nav toggle


// function to view signup/login page when account icon is clicked


// function to view shopping cart when cart icon is clicked


// function to add up total price of shopping cart to display
// the total summary at bottom of shopping cart


// function to view order checkout/complete page when the complete
// order button is clicked in shopping cart page view

