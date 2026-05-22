const openBtn = document.getElementById("openBtn");
const book = document.querySelector(".book");

openBtn.addEventListener("click", () => {
    book.classList.toggle("open");
});