//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action = "increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener(`click`, () => {
      counterValue -= 1;
      value.textContent = counterValue;
})

incrementBtn.addEventListener(`click`, () => {
      counterValue += 1;
      value.textContent = counterValue;

})