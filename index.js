import 'what-input'

let file = location.pathname.split("/").pop();

var link = document.createElement("link");
link.href = file.substr(0, file.lastIndexOf(".")) + ".css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName("head")[0].appendChild(link);

let indeterminates = document.querySelectorAll("[data-indeterminate]");
[].forEach.call(indeterminates, function (item) {
  item.indeterminate = true;
});

let modalTriggers = document.querySelectorAll('.modalTrigger');
let modalClose = document.querySelectorAll('.modalClose');

[].forEach.call(modalClose, function (item) {
  item.addEventListener('click', function () {
    item.closest('dialog').close();
  });
});

[].forEach.call(modalTriggers, function (item) {
  item.addEventListener('click', function () {
    let modal = document.querySelector('[data-modal-name="' + item.getAttribute("data-modal") + '"]');
    modal.showModal();
  });
});
