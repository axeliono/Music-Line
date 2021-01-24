async function newInstrumentSale(event) {
  event.preventDefault();

  const instrument_id;
  const sale_id;
  //first create sale that will
  const response = await fetch("/api/sale", {
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
    //move to adding instrue
  } else {
    alert(response.statusText);
  }
}

//add event listener here;
