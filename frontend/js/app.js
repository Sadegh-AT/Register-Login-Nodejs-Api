const form = document.querySelector(".form");
const name = document.querySelector("#name");
const family = document.querySelector("#family");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let newUser = {
    name: name.value,
    family: family.value,
    username: username.value,
    password: password.value,
  };

  fetch("http://localhost:3000/api/users/new-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => console.log(res));
});
