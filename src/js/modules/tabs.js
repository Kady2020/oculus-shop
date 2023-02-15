"use strict"

const tabItem = document.querySelectorAll('.btn__item');
const tabContent = document.querySelectorAll('.content__item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('btn__item_active');
  });

  tabContent.forEach(function (item) {
    item.classList.remove('content__item_active');
  });

  tabTarget.classList.add('btn__item_active');
  document.querySelector(`#${button}`).classList.add('content__item_active')
};
