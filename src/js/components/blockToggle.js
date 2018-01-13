blockToggle();

function blockToggle() {
  const $togglingBlock = $('.js-toggle-block');

  $togglingBlock.each(function() {
    const $thisBlock = $(this);
    const $toggleTitle = $thisBlock.find('.js-toggle-title');
    const $toggleBtn = $thisBlock.find('.js-toggle-btn');
    const $toggleContent = $thisBlock.find('.js-toggle-content');

    $toggleContent.hide();

    if ($thisBlock.hasClass('is-open')) {
      $toggleContent.show();
    }

    $toggleTitle.on('click tap', function(ev) {
      ev.preventDefault();
      const $thisTitle = $(this);

      $thisBlock.toggleClass('is-open');
      $thisTitle.next().slideToggle();

    });

    $toggleBtn.on('click tap', function (e) {
      e.preventDefault();
      $(this).closest($toggleContent).slideUp();
      $thisBlock.removeClass('is-open');
    });
  });
}