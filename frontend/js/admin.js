const usersDiv = document.querySelector(".usres");
const DeleteBtn = document.querySelectorAll(".delete-btn");
const EditBtn = document.querySelectorAll(".edit-btn");
const BlackDiv = document.querySelector(".black-div");
const DeleteModal = document.querySelector(".delete-modal");
var userId = null;
BlackDiv.addEventListener("click", HideDeleteModal);
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
                        <a class="edit-btn" onclick="Hello()"><i class="fa-solid fa-user-pen"></i></a>
                    </div>
                </div>

            </div>`;
  usersDiv.insertAdjacentHTML("afterbegin", card);
}

function ShowDeleteModel(id) {
  userId = id;
  BlackDiv.classList.add("active");
  DeleteModal.classList.add("active");
}
function HideDeleteModal() {
  BlackDiv.classList.remove("active");
  DeleteModal.classList.remove("active");
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
