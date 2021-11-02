const contentEl = document.querySelector('.content');
const asideEl = document.querySelector('.content__aside');

const slideContent = () => {
  if (contentEl && asideEl) {
    contentEl.addEventListener('click', function () {
      if (!asideEl.classList.contains('content__aside--active')) {
        asideEl.classList.add('content__aside--active');
      } else {
        asideEl.classList.remove('content__aside--active');
      }
    });
  }
};

export {slideContent};
