// открыть модальное окно если одна кнопка
// document.getElementById("open-modal").addEventListener("click", function (evt) {
//   document.getElementById("my-modal").classList.add("open"), evt.preventDefault()
// });

// открыть модальное окно если много кнопок
var mas = document.getElementsByClassName("button");
console.log(mas)

for (var i = 0; i < mas.length; i++) {
  mas[i].addEventListener('click', function (evt) {
    document.getElementById("my-modal").classList.add("open"), evt.preventDefault()
  })
}

// закрыть модальное окно 
document.getElementById("close-modal").addEventListener("click", function (evt) {
  document.getElementById("my-modal").classList.remove("open"), evt.preventDefault()
});

// закрыть модальное окно при нажатии ESC
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
  }
});

// закрыть модальное окно при клике вне его области
document.querySelector("#my-modal .modal-wrap").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});