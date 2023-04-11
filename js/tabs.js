let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsItem = document.querySelectorAll('.tabs__item');
let tabsMap = document.querySelectorAll('.tabs__map');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs__btn--active') });
    e.currentTarget.classList.add('tabs__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs__item--active') });
    document.querySelector(`[data-point="${path}"]`).classList.add('tabs__item--active');

    tabsMap.forEach(function (element) { element.classList.remove('tabs__map--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__map--active');
  });
});
