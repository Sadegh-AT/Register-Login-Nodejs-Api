const usersDiv = document.querySelector(".usres");
const DeleteBtn = document.querySelectorAll(".delete-btn");
const EditBtn = document.querySelectorAll(".edit-btn");
const BlackDiv = document.querySelector(".black-div");
const DeleteModal = document.querySelector(".delete-modal");
const EditModal = document.querySelector(".edit-modal");
const name = document.querySelector("#name");
const family = document.querySelector("#family");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form");
var userId = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  editUser();
});

BlackDiv.addEventListener("click", HideDeleteModal);
BlackDiv.addEventListener("click", HideEditModal);
window.addEventListener("load", () => {
  GetRequest();
});
function UserCard(username, name, family, id) {
  let card = `<div class="user-card">
                <div class="profile">
                    <img src="../image/profile-icon-design-free-vector.jpg" alt="">
                </div>
                <div class="right">
                    <div class="info">
                        <h4 class="info-username">${username}</h4>
                        <h6 class="info-date">${name}<span> </span>${family}</h6>
                    </div>
                    <div class="buttons">
                        <a class="delete-btn" onclick="ShowDeleteModel(${id})"><i class="fa-solid fa-trash"></i></a>
                        <a class="edit-btn" onclick="ShowEditModel(${id})"><i class="fa-solid fa-user-pen"></i></a>
                    </div>
                </div>

            </div>`;
  usersDiv.insertAdjacentHTML("afterbegin", card);
}

// ---DeleteModal---
function ShowDeleteModel(id) {
  userId = id;
  BlackDiv.classList.add("active");
  DeleteModal.classList.add("active");
}
function HideDeleteModal() {
  BlackDiv.classList.remove("active");
  DeleteModal.classList.remove("active");
}

// ---EditModal---
function ShowEditModel(id) {
  userId = id;

  fetch(`http://localhost:3000/api/users/get-user/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      BlackDiv.classList.add("active");
      EditModal.classList.add("active");
      name.value = data[0].name;
      family.value = data[0].family;
      username.value = data[0].username;
      password.value = data[0].password;
    });
}
function HideEditModal() {
  BlackDiv.classList.remove("active");
  EditModal.classList.remove("active");
}

function removeUser() {
  fetch(`http://localhost:3000/api/users/remove/${userId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      HideDeleteModal();
      GetRequest();
    });
}

function GetRequest() {
  usersDiv.innerHTML = "";
  fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        UserCard(element.username, element.name, element.family, element.id);
      });
    });
}
function editUser() {
  let newUser = {
    name: name.value,
    family: family.value,
    username: username.value,
    password: password.value,
  };
  fetch(`http://localhost:3000/api/users/edit/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      HideEditModal();
      GetRequest();
    });
}
