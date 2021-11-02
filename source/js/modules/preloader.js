const preloaderEl = document.querySelector('.preloader');
const contentEl = document.querySelector('.content');

const isTouchDevice = () => {
  let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = (query) => {
    return window.matchMedia(query).matches;
  };
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }
  let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

const preloader = () => {
  if (preloaderEl && contentEl) {
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Enter' && !preloaderEl.classList.contains('preloader--close') && !contentEl.classList.contains('content--active')) {
        preloaderEl.classList.add('preloader--close');
        contentEl.classList.add('content--active');
      }
    });

    document.addEventListener('touchstart', function () {
      if (!preloaderEl.classList.contains('preloader--close')) {
        preloaderEl.classList.add('preloader--close');
        contentEl.classList.add('content--active');
      }
    });
    if (preloaderEl) {
      if (isTouchDevice() === true) {
        preloaderEl.classList.add('preloader--touch');
        preloaderEl.classList.remove('preloader--no-touch');
      } else {
        preloaderEl.classList.remove('preloader--touch');
        preloaderEl.classList.add('preloader--no-touch');
      }
    }
  }
};

export {preloader};
