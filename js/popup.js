
var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
var userName = popup.querySelector(".user-name");
var form = popup.querySelector("form");
var userMail = popup.querySelector(".user-mail");
var comment = popup.querySelector("[name=comment]");
var isStorageSupport = true;
var storage = ".userName";
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("userMail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userMail.focus();
  } else {
    userName.focus();
  }
  
  if (storage) {
    userMail.value = storage;
    comment.focus();
  } else {
    userMail.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
   if (!userName.value || !userMail.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
} else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
}
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
