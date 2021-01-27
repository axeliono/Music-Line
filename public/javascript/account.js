async function loginHandler(event) {
  event.preventDefault();

  //input whatever element will contain the users info.
  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

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
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

//add the event listeners that will call these functions
