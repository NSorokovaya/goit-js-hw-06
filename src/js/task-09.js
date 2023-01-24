function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и
// выводит значение цвета в span.color.

const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const color = document.querySelector('span.color')


changeButton.addEventListener('click', (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  color.textContent = color;
})