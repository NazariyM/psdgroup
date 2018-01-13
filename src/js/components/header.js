import {$body, $window, $header, throttle, Resp} from '../modules/dev/helpers';

(function () {
  const toggleHeaderScroll = throttle(() => {
    toggleHeader();
  }, 0, this);

  function toggleHeader() {
    if ($window.scrollTop() > 0) {
      $header.addClass('is-fixed');
    } else {
      $header.removeClass('is-fixed');
    }
  }

  if (Resp.isNotMobile) $window.on('scroll', toggleHeaderScroll);
}());

(function () {
  const $nav = $('.js-nav');
  const $navBtn = $('.js-nav-btn');

  $navBtn.on('click', function (e) {
    const $this = $(this);
    $header.toggleClass('is-active');
    $this.toggleClass('is-open');
    $body.toggleClass('is-locked');
    $nav.toggleClass('is-open');
  });

  $window.on('resize', () => {
    $header.removeClass('is-active');
    $navBtn.removeClass('is-open');
    $nav.removeClass('is-open');
  });
}());