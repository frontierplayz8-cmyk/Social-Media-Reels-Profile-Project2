var choosefile = document.querySelector(".choose-file");
var choosen = document.querySelector(".image");
var save = document.querySelector(".save");
var username = document.querySelector(".username1");
var display = document.querySelector(".display1");
var bio = document.querySelector(".bio1");
var backarr = document.querySelector("i")



window.addEventListener("load", function() {
  const savedUsername = localStorage.getItem("username");
  const savedDisplay = localStorage.getItem("display");
  const savedBio = localStorage.getItem("bio");
  const savedImage = localStorage.getItem("profileImage");

  if (savedUsername)
     username.value = savedUsername;
  if (savedDisplay) 
     display.value = savedDisplay;
  if (savedBio)
     bio.value = savedBio;
  if (savedImage) {
    choosen.src = savedImage;
    choosen.style.display = "block";
  }
});

choosefile.addEventListener("change", function(){
  let file = this.files[0]
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      choosen.src = e.target.result
      choosen.style.display= "block"
      localStorage.setItem("imagess", e.target.result)
    }
    reader.readAsDataURL(file)
  }
})


save.addEventListener("click", function(){
  localStorage.setItem("imagess", e.target.result)
  localStorage.setItem("username", username.value);
  localStorage.setItem("bio", bio.value);
  localStorage.setItem("display", display.value);
  alert("Profile saved!");
});

username.addEventListener("input", function(){
  if (!username.value.startwith("@")){
    username.value = "@" + username.value.replace(/@/g, "");
  }
})