import Swiper, {
  Keyboard, Manipulation, Navigation, Pagination
} from 'swiper';


new Swiper('.slider', {
  modules: [Keyboard, Manipulation, Navigation, Pagination],

  // Навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Пагинация
  pagination: {
    el: '.swiper-pagination',

    //! Буллеты
    type: 'bullets',

    //! Кликабельные буллеты
    clickable: true,

    //! Динамические буллеты
    dynamicBullets: true,

    //! Кастомные буллеты
    // renderBullet: function (index, className) {
    // 	return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  },

  // Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    UpDown: true,
  },

  // Горизонтальный слайдер
  direction: 'horizontal',

  // Вертикальный слайдер
  // direction: 'vertical',

  // Перетаскивание на ПК
  simulateTouch: true,

  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: false,

  // Автовысота
  autoHeight: true,

  // Количество слайдов для показа
  slidesPerView: 1,

  // Отключение функционала если мало слайдов
  watchOverflow: true,

  // Отступ между слайдами
  // spaceBetween: 30,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: false,

  // Стартовый слайд.
  initialSlide: 0,

  // Кол-во рядов
  slidesPerColumn: 1,

  // Бесконечная прокрутка
  // Стоит отключать scrollbar
  // Не будет работать с slidesPerColumn > 1
  // Если slidesPerGroup = auto, то нужно добавить loopedSlides > 0
  loop: false,

  // Кол-во дублирующих слайдов
  loopedSlides: 0,

  // Обновить свайпер
  // при изменении элементов слайдера
  observer: true,

  // Обновить свайпер
  // при изменении родительских
  // элементов слайдера
  observeParents: true,

  // Обновить свайпер
  // при изменении дочерних
  // элементов слайда
  observeSlideChildren: true,


  // Брейк поинты
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 3,
  //   }
  // },
});
