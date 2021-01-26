async function displayCategoryName (event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch (`/api/classification/${id}`, {
        method: 'GET'
    });

    if (response.ok) {
        console.log(response);
        //document.querySelector('.classification-name').textContent = ``
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.shop-by-category').addEventListener('load', displayCategoryName);