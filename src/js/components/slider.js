import slick from 'slick-carousel';

class Slider {
  constructor() {
    this.$slider = $('.js-slider');
    this.$mobileSlider = $('.js-mobile-slider');
    this.$cardSlider = $('.js-cards-slider');
    this.$defaultSlider = $('.js-default-slider');

    this.init();
  }

  init() {
    this.createSlider();
    this.createMobileSlider();
  }

  createMobileSlider() {
    this.$mobileSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 400,
      cssEase: 'ease',
      useTransform: true,
      adaptiveHeight: true,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slider-btn slider-btn_prev" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_l"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-btn slider-btn_next" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_r"></use></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
    });
  }

  createSlider() {
    this.$slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 900,
      cssEase: 'ease',
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false
    });
    this.$cardSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 1000,
      cssEase: 'ease',
      useTransform: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slider-btn slider-btn_prev" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_l"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-btn slider-btn_next" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_r"></use></svg></button>',
      responsive: [{
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 200
        }
      }, {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 400
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          speed: 400
        }
      }]
    });
    this.$defaultSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 700,
      cssEase: 'ease',
      useTransform: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slider-btn slider-btn_prev" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_l"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-btn slider-btn_next" data-fade-zoom><svg class="slider-btn__icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sld-arr_r"></use></svg></button>'
    });
  }
}

export default new Slider();