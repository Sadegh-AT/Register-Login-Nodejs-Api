const form = document.querySelector(".form");
const name = document.querySelector("#name");
const family = document.querySelector("#family");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateInput(name, family, username, password)) {
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
    })
      .then((res) => res.text())
      .then((data) => {
        if (data != "true") {
          SeterrorStyle(name);
          SeterrorStyle(family);
          SeterrorStyle(username);
          SeterrorStyle(password);
        } else {
          RemoveAllErrorStyle(name);
          RemoveAllErrorStyle(family);
          RemoveAllErrorStyle(username);
          RemoveAllErrorStyle(password);
          clearInput();
        }
      });
  }
});

function validateInput(name, family, username, password) {
  name.value = name.value.trim();
  family.value = family.value.trim();
  username.value = username.value.trim();
  password.value = password.value.trim();

  let inputs = [name, family, username, password];

  inputs.forEach((input) => {
    if (input.value == "") {
      SeterrorStyle(input);
      RemoveErrorStyle(input);
    }
  });
  if (
    name.value != "" &&
    family.value != "" &&
    username.value != "" &&
    password.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}

function clearInput() {
  name.value = "";
  family.value = "";
  username.value = "";
  password.value = "";
}

function SeterrorStyle(input) {
  input.classList.add("error");
}

function RemoveErrorStyle(input) {
  input.addEventListener("input", () => {
    input.classList.remove("error");
  });
}
function RemoveAllErrorStyle(input) {
  input.classList.remove("error");
}
