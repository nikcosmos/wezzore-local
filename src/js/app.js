const colorInputListEl = document.querySelectorAll('[data-color]');

colorInputListEl.length &&
   colorInputListEl.forEach((item) => {
      item.addEventListener('input', (el) => onInputColor(el, item));
   });

function onInputColor(el, item) {
   const target = el.target;
   if (target.classList.contains('color-item__value-input')) {
      item.querySelector('.color-item__color-input').value = target.value;
   }
   if (target.classList.contains('color-item__color-input')) {
      item.querySelector('.color-item__value-input').value = target.value;
   }
}
