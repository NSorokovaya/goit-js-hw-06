function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и
// выводит значение цвета в span.color.

const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


changeButton.addEventListener('click', event => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});