const counterEl = document.querySelector('[data-find="counterValue"]');
const addButton = document.querySelector('[data-id="addButton"]');
const resetButton = document.querySelector('[data-id="resetButton"]');

const COUNTER_INITIAL_VALUE = 0; 

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addButton.addEventListener('click', function(){
  counter = counter + parseInt(addButton.dataset.run);
  counterEl.innerText = counter;
});

resetButton.addEventListener('click',function(){
  counter = COUNTER_INITIAL_VALUE;
  counterEl.innerText = counter;
})

// data - селектор, его атрибуты(пример data-find. find-атрибут) хранят данные, которые не отображаются, но могут быть использованы для хранения инфы в js
// dataset - свойство которое получает данные из data-атрибутов. преобразует атрибуты в свойства объекта