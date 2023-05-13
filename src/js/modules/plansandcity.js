import $ from 'jquery';

$(() => {
   //Plans========================================================================================================================================================
   $('.plans-section__tab').on('click', onChangePlan);

   function onChangePlan() {
      if (!$(this).hasClass('_active')) {
         $('.plans-section__tab').removeClass('_active');
         $(this).addClass('_active');
         const $plan = $(this).attr('data-plan');
         changePrice($plan);
      }
   }

   function changePrice(id) {
      const $allPrice = $(`[data-price-${id}]`);
      $($allPrice).each((i, item) => {
         const startVal = $(item).text().slice(1);
         const endVal = $(item).attr(`data-price-${id}`);
         animatePrice(item, startVal, endVal);
      });
   }
   // Анимация прайса
   function animatePrice(el, start, end) {
      $({ val: start }).animate(
         { val: end },
         {
            duration: 500,
            easing: 'linear',
            step: function (val) {
               $(el).text(`$${Math.round(val)}`);
            },
         }
      );
   }
   //City========================================================================================================================================================
   const CITY = {
      INIT_HEIGHT: 80,
      INITED_CLASS: 'inited',
      OPEN_CLASS: 'open',
      BOX_CLASS: '.other-vendors__list-box',
      LIST_CLASS: '.other-vendors__list',
   };

   checkCityList();
   $(window).on('resize', checkCityList);

   function checkCityList() {
      const $height = $(CITY.LIST_CLASS)[0].offsetHeight;
      if (
         $height > CITY.INIT_HEIGHT &&
         !$(CITY.BOX_CLASS).hasClass(CITY.INITED_CLASS)
      ) {
         mountCityShowMore();
      }
      if (
         $height < CITY.INIT_HEIGHT &&
         $(CITY.BOX_CLASS).hasClass(CITY.INITED_CLASS)
      ) {
         unMountCityShowMore();
      }
   }

   function mountCityShowMore() {
      $(CITY.BOX_CLASS).addClass(`${CITY.INITED_CLASS}`);
      $(CITY.BOX_CLASS).on('click', toggleMoreCity);
      $(CITY.LIST_CLASS).css('max-height', `${CITY.INIT_HEIGHT}px`);
   }
   function unMountCityShowMore() {
      $(CITY.BOX_CLASS).removeClass(`${CITY.INITED_CLASS} ${CITY.OPEN_CLASS}`);
      $(CITY.BOX_CLASS).off('click', toggleMoreCity);
      $(CITY.LIST_CLASS).css('max-height', 'none');
   }

   function toggleMoreCity(e) {
      const $target = $(e.target);
      const $this = $(this);

      if (!$target.hasClass('other-vendors__button')) return;

      if ($(CITY.LIST_CLASS)[0].offsetHeight <= CITY.INIT_HEIGHT) {
         $this.addClass(CITY.OPEN_CLASS);
         $(CITY.LIST_CLASS).css('max-height', 'none');
         return;
      }
      if ($(CITY.LIST_CLASS)[0].offsetHeight > CITY.INIT_HEIGHT) {
         $(CITY.LIST_CLASS).css('max-height', `${CITY.INIT_HEIGHT}px`);
         $this.removeClass(CITY.OPEN_CLASS);
         return;
      }
   }
});
