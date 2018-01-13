/**
 * Website's common scripts.
 *
 * @module Common
 */

import { Selectric } from './selectInit';
import CTabs from './c-tabs';
import './slider';
import './header';
import './noTouch';
import './publicAPI';
import './maps';
import './animations';
import './blockToggle';
import { $scrolledElements } from '../modules/dev/helpers';
import particles from 'particles.js';
import Popup from 'vintage-popup';
import objectFitImages from 'object-fit-images';
import fancybox from '@fancyapps/fancybox';
import PageResize from './pageResize';
import Dot from './initDot';

const Flatpickr = require('flatpickr');
const Russian = require('flatpickr/dist/l10n/ru.js').ru;

export class Common {
  static init() {
    objectFitImages();
    PageResize.init();
    Dot.init();
    Selectric.init();
  }
}

export default Common.init();

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** canvas particles */
(function() {
  const grayParticles = $('#js-gray-particles').length;

  if (grayParticles) {
    particlesJS.load('js-gray-particles', 'static/particles/gray-particles.json');
  }
}());

/** scren scroll down */
function scrollDown(el, offset) {
  el.on('click', function() {
    const $that = $(this);
    const $section = $that.closest('section').next().offset().top - offset;
    $scrolledElements.animate({ scrollTop: $section }, 700);
    $that.fadeOut(500);
  });
}

const $btnMouse = $('.anim-mouse');
scrollDown($btnMouse, 230);

(function() {
  const $scrollToSection = $('.js-scroll-next');
  $scrollToSection.on('click', function() {
    const $that = $(this);
    const $hiddenBlock = $that.closest('section').next('[data-item="hidden"]');
    $hiddenBlock.slideDown(500);
    const $section = $that.closest('section').next().offset().top - 144;
    $scrolledElements.animate({ scrollTop: $section }, 700);
  });
})();

/** display hidden items */
const $showBtn = $('.js-show-btn');
$showBtn.on('click', function(ev) {
  ev.preventDefault();
  const $that = $(this);
  const $siblingsItems = $that.siblings('[data-item="hidden"]');
  const $scrollItem = $siblingsItems.first();
  $siblingsItems.slideDown();
  $scrolledElements.animate({ scrollTop: $scrollItem.offset().top - 159 }, 700);
  $that.fadeOut();
});

/** calendars */
const dateInput = '.js-date';
const calendar = '.js-calendar';
new Flatpickr(dateInput, {
  locale: Russian
});
new Flatpickr(calendar, {
  locale: Russian,
  inline: true
});

/** image zoom */
$('[data-fancybox]').fancybox();

/** pop-ups */
const $popup = $('[data-popup-target]');
Popup.expose($);
$popup.popup();