var link = document.querySelector(".search");
var popup = document.querySelector(".popup-search");
var form = document.querySelector(".popup-form");
var adate = document.querySelector("[name=arrival-date]");
var ddate = document.querySelector("[name=departure-date]");
popup.classList.remove("popup-no-js");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
});
form.addEventListener("submit", function (evt) {
    if (!adate.value || !ddate.value) {
       evt.preventDefault();
       popup.classList.add("popup-error");
    }
});
