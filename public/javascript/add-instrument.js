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

async function newInstrumentSale(event) {
  event.preventDefault();
  
  const price = document.querySelector('.single-price').innerText;
  
  var hasCart = getCookie("hasCart");

  if(hasCart != 1){
  const response = await fetch("/api/sale", {
    method: "post",
    body: JSON.stringify({
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
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
