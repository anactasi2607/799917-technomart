
var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us .modal-close");
var userName = document.querySelector(".user-name");
var form = document.querySelector(".write-us form");
var userMail = document.querySelector(".user-mail");
var comment = document.querySelector("[name=comment]");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");
var buyLinks = document.querySelectorAll(".buy");
var popupBuy = document.querySelector(".cart");
var goOn = document.querySelector(".white-button");
var closeBuy = document.querySelector(".cart .modal-close");
var basket = document.querySelector(".basket");
var marker = document.querySelectorAll(".marker");
var markerList = document.querySelector(".marker-list");

if (popup) {
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
}

if (mapPopup) {
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
}

if (popupBuy) {
  for (var i = 0; i < buyLinks.length; i++) {
    buyLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("modal-show");
    basket.classList.add("basket-not-empty");
    })
  };

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

  for (var i = 0; i < marker.length; i++) {
    marker[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    markerList.classList.add("marker-not-empty");
    })
  };
}
