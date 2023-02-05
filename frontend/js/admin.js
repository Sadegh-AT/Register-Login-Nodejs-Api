const usersDiv = document.querySelector(".usres");
const DeleteBtn = document.querySelectorAll(".delete-btn");
const EditBtn = document.querySelectorAll(".edit-btn");
const BlackDiv = document.querySelector(".black-div");
const DeleteModal = document.querySelector(".delete-modal");
BlackDiv.addEventListener("click", HideDeleteModal);
window.addEventListener("load", function () {
  fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        UserCard(element.username, element.name, element.family);
      });
    });
});
function UserCard(username, name, family) {
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
                        <a class="delete-btn" onclick="ShowDeleteModel()"><i class="fa-solid fa-trash"></i></a>
                        <a class="edit-btn" onclick="Hello()"><i class="fa-solid fa-user-pen"></i></a>
                    </div>
                </div>

            </div>`;
  usersDiv.insertAdjacentHTML("afterbegin", card);
}

function ShowDeleteModel() {
  BlackDiv.classList.add("active");
  DeleteModal.classList.add("active");
}
function HideDeleteModal() {
  BlackDiv.classList.remove("active");
  DeleteModal.classList.remove("active");
}
