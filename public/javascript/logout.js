async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD

document.querySelector(".btn-logout").addEventListener("click", logout());
=======
//add event listener
document.querySelector(".toLogout").addEventListener("click", logout);
>>>>>>> develop
