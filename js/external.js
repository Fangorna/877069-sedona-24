var link = document.querySelector(".search");
        var popup = document.querySelector(".popup-search");
            popup.classList.remove("popup-no-js");
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.toggle("popup-show");
        });