var edit = document.querySelector(".edit");
var username = localStorage.getItem("username");
var username1 = document.querySelector(".user");
var proname = document.querySelector(".proname");
var bioo = document.querySelector(".bioo");
var bio = localStorage.getItem("bio");
var display = localStorage.getItem("display");
var profileImage = localStorage.getItem("imagess");
var profilephoto = document.querySelector(".profile-photo");

function editprofile() {
  profilephoto.src = profileImage;
  profilephoto.style.display= "block";
  profilephoto.style.objectFit= "cover"
  username1.textContent = username;
  proname.textContent = display;
  bioo.textContent = bio;
}

editprofile();
