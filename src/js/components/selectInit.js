import '../modules/dep/jquery.selectric.min';

export class Select {
  constructor(el) {
    this.$el = $(el);
  }

  init() {
    this.$el.selectric();
  }
}

export const Selectric = new Select('.js-select');