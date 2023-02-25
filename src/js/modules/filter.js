!(function initFilter() {
   const moreFilterEl = document.querySelector('.more-filters')
   if (moreFilterEl) {
      moreFilterEl.addEventListener('click', (el) => {
         const target = el.target
         if (target.classList.contains('more-filters-head__item')) {
            moreFilterEl.classList.add('_filter-open')
         }
         if (target.classList.contains('more-filter-body') || target.classList.contains('more-filter-body__close-btn')) {
            moreFilterEl.classList.remove('_filter-open')
         }
         if (target.classList.contains('radio__input')) {
            const curBlock = target.closest('.more-filter-block')
            curBlock.querySelector('.more-filter-block__value').value = createResult(curBlock)
         }
      })
   }

   function createResult(block) {
      const allInput = Array.from(block.querySelectorAll('.radio__input')).filter((el) => el.checked)
      return `[${allInput.map((el) => el.value)}]`
   }
})()
