async function loginHandler(event) {
  event.preventDefault();
  console.log("clicked");
  //input whatever element will contain the users info.
  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();
  if (email === req.session.username) {
    alert("This user is currently logged in");
    document.location.replace("/");
    return;
  }

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //put wherever the person will go after logging in
      initiateSale();
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#signup-username").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //wherever the user will go after creating an account
      initiateSale();
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector(".login-form").addEventListener("submit", loginHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
//add the event listeners that will call these functions
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupHandler);
document.querySelector("#login-form").addEventListener("submit", loginHandler);
