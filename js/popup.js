
var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
var userName = popup.querySelector(".user-name");
var form = popup.querySelector("form");
var userMail = popup.querySelector(".user-mail");
var comment = popup.querySelector("[name=comment]");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var buyLink = document.querySelector(".buy");
var popupBuy = document.querySelector(".cart");
var goOn = document.querySelector(".white-button");
var closeBuy = popupBuy.querySelector(".modal-close");
var basket = document.querySelector(".basket");
var marker = document.querySelector(".marker");
var markerList = document.querySelector(".marker-list");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  userName.classList.remove("hint");
  userMail.classList.remove("hint");
});

form.addEventListener("submit", function (evt) {
   if (!userName.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    userName.classList.remove("hint");
    userName.classList.add("hint");
} 
    if (!userMail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    userMail.classList.remove("hint");
    userMail.classList.add("hint");

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
  {evt.preventDefault();
  mapPopup.classList.add("modal-show");}
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.remove("modal-error");
    }
  }
});

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.add("modal-show");
  basket.classList.add("basket-not-empty");
});


closeBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
});

goOn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBuy.classList.contains("modal-show")) {
      popupBuy.classList.remove("modal-show");
    }
  }
});

marker.addEventListener("click", function (evt) {
  evt.preventDefault();
  markerList.classList.add("marker-not-empty");
});