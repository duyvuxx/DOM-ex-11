const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $(".success");
const warningBtn = $(".warn");
const errorBtn = $(".err");

const listNoti = $(".noti");

successBtn.addEventListener("click", function (e) {
  listNoti.insertAdjacentHTML(
    "beforeend",
    `<li class="noti-items win">
    <i class="fas fa-check-circle"></i>
    <span>This is a success^^</span>
    <div class="border"></div>
  </li>`
  );

  const win = $$(".win");

  win.forEach((val) => {
    setTimeout(function () {
      val.remove();
    }, 5100);
  });
});

warningBtn.addEventListener("click", function (e) {
  listNoti.insertAdjacentHTML(
    "beforeend",
    `<li class="noti-items confuse">
    <i class="fas fa-exclamation-circle"></i>
    <span>This is a warning!</span>
    <div class="border"></div>
  </li>`
  );

  const confuse = $$(".confuse");

  confuse.forEach((val) => {
    setTimeout(function () {
      val.remove();
    }, 5100);
  });
});

errorBtn.addEventListener("click", function (e) {
  listNoti.insertAdjacentHTML(
    "beforeend",
    `<li class="noti-items lose">
    <i class="fas fa-exclamation-triangle"></i>
    <span>This is a error!!</span>
    <div class="border"></div>
  </li>`
  );

  const lose = $$(".lose");

  lose.forEach((val) => {
    setTimeout(function () {
      val.remove();
    }, 5100);
  });
});
