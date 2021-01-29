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
    alert("Successfully added to cart!");
    document.location.replace('/shop');
    //create alert if they want to continue shopping or move to checkout
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".add-to-cart-btn")
  .addEventListener("click", newInstrumentSale);
//add event listener here;
