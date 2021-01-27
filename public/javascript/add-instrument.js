<<<<<<< HEAD
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function getNewestSale(){
  const response = await fetch("/api/sale", {
    method: "GET", 
    })
    return response;
}

async function addToCart(){
  const instrument = document.querySelector('.single-name').innerText;

  const response = await fetch("/api/shopping", {
    method: "post",
    body: JSON.stringify({
      instrument,
    })
  });
  if (response.ok) { 
    document.location.replace('/shopping-cart'); 
  } else {
    alert(response.statusText);
  }
}

=======
>>>>>>> develop
async function newInstrumentSale(event) {
  event.preventDefault();

  const instrument_id = document
    .querySelector(".add-to-cart-btn")
    .getAttribute("instrument");
  console.log(instrument_id);

  const saleInfo = await (await fetch("/api/session")).json();
  console.log(saleInfo);
  const sale_id = saleInfo.sale;
  console.log(sale_id);
  const response = await fetch("/api/shopping", {
    method: "post",
    body: JSON.stringify({
      sale_id,
      instrument_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
<<<<<<< HEAD
    console.log(response);
    document.cookie = "hasCart=1"
    var x = getNewestSale();
    console.log(x);
    addToCart();
  } else {
    alert(response.statusText);
  }
  }
  
  if(hasCart=1){
    console.log('already has cart');
    addToCart();
  }
}

document.querySelector('.add-to-cart-btn').addEventListener('click', newInstrumentSale);
=======
    alert("successfully added to cart");
    //create alert if they want to continue shopping or move to checkout
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".add-to-cart-btn")
  .addEventListener("click", newInstrumentSale);
//add event listener here;
>>>>>>> develop
