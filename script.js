var img = document.querySelector(".post");
var i = document.querySelector(".ri-heart-fill");
var like = document.querySelector(".like");
var body = document.querySelector(".container2");
var check = 0;
var dislike = document.querySelector(".dislike");
var comment = document.querySelector(".comment");
var commentsec = document.querySelector(".comments-sec");
var cancel = document.querySelector(".cancel");
var container = document.querySelector(".container");
var commentarea = document.querySelector(".coment-area");
var entercmt = document.querySelector(".type-cmt");
var commentprofile = document.querySelector(".profilecmt");
var profileimg = document.querySelector(".comment-img");
var buttons = document.querySelector(".buttons");
var buttontwo = document.querySelector(".buttontwo");
var buttonone = document.querySelector(".buttonone");
var sharepart = document.querySelector(".share-part");
var share = document.querySelector(".share");
var cross = document.querySelector(".cross2");
var volumnup = document.querySelector(".ri-volume-up-line");
var volumndown = document.querySelector(".ri-volume-down-line");
var volumnmute = document.querySelector(".ri-volume-mute-line");
var range = document.querySelector(".range");
var volumn = document.querySelector(".volumn");
var post = document.querySelector(".post")
var audio = document.querySelector("audio")
var play = document.querySelector(".ri-play-line")
var pause = document.querySelector(".ri-pause-line")
var username = localStorage.getItem("username")
var display = localStorage.getItem("display")
var bio = localStorage.getItem("bio")
var profilephoto = localStorage.getItem("imagess")
var proname = document.querySelector(".proname")
var probio = document.querySelector(".prouser")
var proto = document.querySelector(".proto")

let liked = false;
let disliked = false;

function animateHeart() {
  i.style.transform = "translate(-50%, -50%) scale(1)";
  i.style.opacity = "1";
  setTimeout(() => {
    i.style.opacity = "0";
  }, 2000);
}

like.addEventListener("click", () => {
  liked = !liked;
  disliked = false;
  like.classList.toggle("active", liked); // use CSS for color & scale
  dislike.classList.remove("active");
  animateHeart();
});

// Double click on image
img.addEventListener("dblclick", () => {
  liked = true;
  disliked = false;
  like.classList.add("active");
  dislike.classList.remove("active");
  animateHeart();
});

// Dislike click
dislike.addEventListener("click", () => {
  disliked = !disliked;
  liked = false;
  dislike.classList.toggle("active", disliked);
  like.classList.remove("active");
});


comment.addEventListener("click", function () {
  container.style.transform = "translate(0)";
  commentsec.style.transform = "translate(0)";
});

cancel.addEventListener("click", function () {
  container.style.transform = "translate(70%)";
  commentsec.style.transform = "translate(250%)";
});

entercmt.addEventListener("click", function () {
  commentprofile.style.height = "100px";
  profileimg.style.marginBottom = "10px";
  entercmt.style.marginBottom = "10px";
  buttons.style.display = "flex";
});

entercmt.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let cmtname = document.createElement("div");
    var p = document.createElement("p");
    var newcmt = p.classList.add("newcmt");
    cmtname.appendChild(p);
    commentarea.appendChild(cmtname);
    p.textContent = entercmt.value;
    entercmt.value = "";
  }
});

buttontwo.addEventListener("click", function (event) {
  let cmtname = document.createElement("div");
  var p = document.createElement("p");
  var newcmt = p.classList.add("newcmt");
  cmtname.appendChild(p);
  commentarea.appendChild(cmtname);
  p.textContent = entercmt.value;
  entercmt.value = "";
});

buttonone.addEventListener("click", function () {
  buttons.style.display = "none";
  commentprofile.style.height = "50px";
  profileimg.style.marginBottom = "0";
  entercmt.style.marginBottom = "0";
});

share.addEventListener("click", function () {
  sharepart.style.display = "flex";
  body.style.display = "flex";
});

cross.addEventListener("click", function () {
  sharepart.style.display = "none";
  body.style.display = "none";
});

volumn.addEventListener("click", function () {
    range.style.display= "flex"
  if (range.value >= 0.5) {
    volumnup.style.display= "flex";
    volumnmute.style.display= "none";
    volumndown.style.display= "none"; 
  } else if (range.value < 1) {
    volumndown.style.display= "flex";
    volumnmute.style.display= "none";
    volumnup.style.display= "none"
  } else if (range.value <= 0) {
    volumnup.style.display= "none";
    volumndown.style.display= "none";
    volumnmute.style.display= "flex"
  }
});

post.addEventListener("click", function(){
    range.style.display= "none"
    if(audio.paused){
      audio.play()
      play.style.display= "flex"
      setTimeout(() => {
          play.style.display= "none"

      }, 2000);
    } else {
      audio.pause()
      pause.style.display= "flex"
      pause.style.opacity= "1"
      pause.style.transform= "scale(1)"
      setTimeout(() => {
          pause.style.display= "none"
          pause.style.opacity= "0"
          pause.style.transform= "scale(1)"
      }, 2000);
    }
})

function editprofile(){
  proname.textContent = display
  probio.textContent = bio
  proto.src = profilephoto;
  proto.style.display= "block";
  proto.style.objectFit= "cover"
}

editprofile()

range.addEventListener("input", function(){
    audio.volume = range.value
})
  
