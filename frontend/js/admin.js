const usersDiv = document.querySelector(".usres");
const DeleteBtn = document.querySelectorAll(".delete-btn");
const EditBtn = document.querySelectorAll(".edit-btn");

window.addEventListener("load", function () {
  fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        UserCard(element.username, element.RegisterDate);
      });
    });
});
function UserCard(username, date) {
  let card = `<div class="user-card">
                <div class="profile">
                    <img src="../image/profile-icon-design-free-vector.jpg" alt="">
                </div>
                <div class="right">
                    <div class="info">
                        <h4 class="info-username">${username}</h4>
                        <h6 class="info-date">${date}</h6>
                    </div>
                    <div class="buttons">
                        <a class="delete-btn" onclick="Hello()"><i class="fa-solid fa-trash"></i></a>
                        <a class="edit-btn" onclick="Hello()"><i class="fa-solid fa-user-pen"></i></a>
                    </div>
                </div>

            </div>`;
  usersDiv.insertAdjacentHTML("afterbegin", card);
}

function()