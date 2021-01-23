async function newInstrumentSale(event) {
  event.preventDefault();

  const instrument_id;
  //pull sale id from session
  const sale_id = req.session.sale_id;
  const response = await fetch("/api/shopping/", {
    method: "post",
    body: JSON.stringify({
      instrument_id,
      sale_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    //create alert if they want to continue shopping or move to checkout
    document.location.replace("/shopping");
  } else {
    alert(response.statusText);
  }
}

//add event listener here;
