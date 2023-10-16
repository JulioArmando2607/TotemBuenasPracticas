// scripts.js
function redirectToIndex() {
    window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var cards = document.querySelectorAll(".card");
    var modalImg = document.querySelector(".modal-image");
    var loader = document.getElementById("imageLoader");
    var span = document.getElementsByClassName("close")[0];

    cards.forEach(function (card) {
        card.onclick = function () {
            var imgSrc = this.getAttribute("data-modal-image");
            modal.style.display = "block";
            loader.style.display = "block";
            modalImg.src = imgSrc;

            modalImg.onload = function () {
                loader.style.display = "none";
            }
        }
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
