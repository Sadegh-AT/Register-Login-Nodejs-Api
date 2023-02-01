const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  fetch("http://localhost:3000/api/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
});
