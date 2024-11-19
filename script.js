document.getElementById("yesButton").addEventListener("click", function () {
  const gif = document.getElementById("gif");
  gif.src = "./video/cat-cute.gif"; // Убедитесь, что этот путь корректен
  showGif();
});

document.getElementById("noButton").addEventListener("click", function () {
  const gif = document.getElementById("gif");
  gif.src = "./video/jeff.gif"; // Убедитесь, что этот путь корректен
  showGif();
});

function showGif() {
  document.querySelector(".container").style.display = "none"; // Скрываем контейнер с текстом и кнопками
  const gif = document.getElementById("gif");
  gif.classList.remove("hidden"); // Показываем GIF
}
