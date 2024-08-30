let cardColumn = document.getElementsByClassName("column");
console.log(cardColumn);
cardColumn = Array.from(cardColumn);

console.log(Array.isArray(cardColumn));

let cardContent = document.querySelector(".card-content");
let parentClass = cardContent.parentElement.className;

let btnPrev = document.querySelector(".btn-p");
let btnNext = document.querySelector(".btn-n");

btnNext.addEventListener("click", function next() {
  const cardContent = document.querySelector(".card-content");
  const currentColumn = cardContent.parentElement;

  const nextColumn = currentColumn.nextElementSibling;

  if (nextColumn) {
    nextColumn.appendChild(cardContent);
  }
});

btnPrev.addEventListener("click", function previous() {
  const cardContent = document.querySelector(".card-content");
  const currentColumn = cardContent.parentElement;
  const previousColumn = currentColumn.previousElementSibling;

  if (previousColumn) {
    previousColumn.appendChild(cardContent);
  }
});
