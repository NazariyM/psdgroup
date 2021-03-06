/**
 * Commonly used constants and functions.
 *
 * @module Helpers
 */

/**
 * Cache body DOM element.
 *
 * @constant
 * @type {jQuery}
 */
export const $body = $('body');

/**
 * Cache document.
 *
 * @constant
 * @type {jQuery}
 */
export const $document = $(document);

/**
 * Cache window.
 *
 * @constant
 * @type {jQuery}
 */
export const $window = $(window);

/**
 * Cache header.
 *
 * @constant
 * @type {jQuery}
 */
export const $header = $('header');

/**
 * Cache footer.
 *
 * @constant
 * @type {jQuery}
 */
export const $footer = $('footer');

/**
 * Elements for cross-browser window scroll.
 *
 * @constant
 * @type {jQuery}
 */
export const $scrolledElements = $('html, body');

/**
 * Window width.
 *
 * @constant
 * @type {Number}
 */
export const winWidth = $window.width();

/**
 * Match media device indicator.
 */
export class Resp {
  /**
   * Get window's current width.
   *
   * @get
   * @static
   * @return {Number}
   */
  static get currWidth() {
    return window.innerWidth;
  }

  /**
   * Detect touch events.
   *
   * @get
   * @static
   * @return {Boolean}
   */
  static get isTouch() {
    return 'ontouchstart' in window;
  }

  /**
   * Detect desktop device.
   *
   * @get
   * @static
   * @return {Boolean}
   */
  static get isDesk() {
    return window.matchMedia('(min-width: 1200px)').matches;
  }

  /**
   * Detect tablet device.
   *
   * @get
   * @static
   * @return {Boolean}
   */
  static get isTablet() {
    return window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches;
  }

  /**
   * Detect mobile device.
   *
   * @get
   * @static
   * @return {Boolean}
   */
  static get isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  }

  /**
   * Detect mobile device.
   *
   * @get
   * @static
   * @return {Boolean}
   */
  static get isNotMobile() {
    return window.matchMedia('(min-width: 767px)').matches;
  }
}

/**
 * Detect current page.
 *
 * @constant
 * @type {String}
 */
export const currentPage = $body.find('main').data('page');

/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */
export const css = {
  overflow: 'is-overflow',
  menuActive: 'menu-active',
  active: 'is-active',
  fill: 'is-fill',
  fixed: 'is-fixed',
  enabled: 'is-enabled',
  disabled: 'is-disabled',
  image: 'has-image'
};

/**
 * Check specified item to be target of the event.
 *
 * @param {Object} e - Event object.
 * @param {jQuery} item - Item to compare with.
 * @returns {Boolean} - Indicate whether clicked target is the specified item or no.
 */
export const checkClosest = (e, item) => $(e.target).closest(item).length > 0;

/**
 * Generate string of random letters.
 *
 * @param {Number} length
 */
export const randomString = (length = 10) => Math.random().toString(36).substr(2, length > 10 ? length : 10);

/**
 * Toggle class on specified element on click.
 *
 * @param {jQuery} clickHandler
 * @param {jQuery} element
 */
export const toggleClass = (clickHandler, element) => {
  clickHandler.on('click tap', () => element.toggleClass(css.active));
};

/**
 * Check if element is in viewport.
 *
 * @param {jQuery} $element
 * @param {Boolean} [fullyInView = false] - element should be fully in viewport?
 * @param {Number} [offsetTop = 0]
 * @returns {Boolean}
 */
export const isScrolledIntoView = ($element, offsetTop = 0, fullyInView = false) => {
  const pageTop = $window.scrollTop();
  const pageBottom = pageTop + $window.height();
  const elementTop = $element.offset().top;
  const elementBottom = elementTop + $element.height();

  if (fullyInView === true) {
    return ((pageTop < elementTop) && (pageBottom > elementBottom));
  }
  return (((elementTop + offsetTop) <= pageBottom) && (elementBottom >= pageTop));
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
export const debounce = (func, context, wait, immediate) => {
  let timeout;

  return () => {
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Throttle function.
 *
 * @param {Function} fn
 * @param {Number} [threshold]
 * @param {Object} [scope]
 * @returns {Function}
 */
export function throttle(fn, threshold = 250, scope) {
  let last,
    deferTimer;

  return function() {
    const context = scope || this;

    let now = +new Date(),
      args = arguments;
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/**
 * Toggle text
 *
 * @param {Object} el
 */
export const changeText = (el) => {
  $(el).text($(el).text() === $(el).data('default-text') ? $(el).data('change-text') : $(el).data('default-text'));
};

/**
 * Create html for svg icon
 *
 * @param {String} name
 * @returns {String}
 */
export const svgIcon = name => `
  <svg class="icon icon-${name}">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${name}"></use>
  </svg>`;

// export const svgIcon = (name) => {
//   return `
//   <svg class="icon icon-${name}">
//       <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${name}"></use>
//     </svg>`;
// };
// const iconLeft = svgIcon('arrow-left');
// const iconRight = svgIcon('arrow-right');