function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function newInstrumentSale(event) {
  event.preventDefault();

  const price = document.querySelector(".single-price").innerText;

  var hasCart = getCookie("hasCart");

  if (hasCart != 1) {
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
      document.cookie = "hasCart=1";
      //create alert if they want to continue shopping or move to checkout
    } else {
      alert(response.statusText);
    }
  }

  if ((hasCart = 1)) {
    console.log("already has cart");
    // const response = await fetch('/api/users/myCart',{
    //   method: "get",
    //   headers: {
    //   "Content-Type": "application/json",
    //   },
    // });
    // if (response.ok) {
    //   console.log(JSON.stringify(response));
    // } else {
    //   alert(response.statusText);
  }
}

document
  .querySelector(".add-to-cart-btn")
  .addEventListener("click", newInstrumentSale);
//add event listener here;
