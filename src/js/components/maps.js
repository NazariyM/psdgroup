export class GeoMap {
  constructor() {
    this.init();
  }
  init() {
    initGeoMap();
    function initGeoMap() {
      ymaps.ready(init);

      function init() {
        const geoMap = new ymaps.Map('map', {
            center: [50.74142750, 58.30629675],
            zoom: 3,
            controls: []
          }),
          BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="geo__box">' +
            '<h5 class="geo__box-title">{{properties.name}}</h5>' +
            '<p class="geo__box-descr">{{properties.description}}</p> ' +
            '<a class="geo__box-btn btn" href="#!">смотреть услуги</a>' +
            '</div>');

        // begin countries
        const countries = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'static/img/icons/shield.png',
          iconImageSize: [32, 42],
          balloonOffset: [13, 192],
          hideIconOnBalloonOpen: false,
          balloonCloseButton: false,
          balloonContentLayout: BalloonContentLayout
        });

        const Kazakhstan = new ymaps.Placemark([51.39567825, 71.90857082], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Uzbekistan = new ymaps.Placemark([40.93894161, 69.79919582], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const China = new ymaps.Placemark([41.10722065, 114.79621997], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const abuDhabi = new ymaps.Placemark([23.82027108, 53.87626207], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const France = new ymaps.Placemark([44.27543105, 1.93849925], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Japan = new ymaps.Placemark([38.03921768, 139.39943675], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Turkey = new ymaps.Placemark([41.03283332, 33.40334300], {
          name: 'Турция, г. Стамбул',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Ukraine = new ymaps.Placemark([48.76147206, 35.68849925], {
          name: 'Украина, г. Харьков',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Belarus = new ymaps.Placemark([54.64816195, 27.60256175], {
          name: 'Беларусь, г. Гомель',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        const Russia = new ymaps.Placemark([55.75399400, 37.62209300], {
          name: 'Россия, г. Москва',
          description: 'Компания специализируется на оказании юридических услуг как физическим лицам, так и юридическим лицам.'
        });

        countries
          .add(Russia)
          .add(Ukraine)
          .add(Belarus)
          .add(Turkey)
          .add(France)
          .add(Japan)
          .add(abuDhabi)
          .add(China)
          .add(Uzbekistan)
          .add(Kazakhstan);
        geoMap.geoObjects.add(countries);
        // end countries

        geoMap.events.add('click', (e) => {
          geoMap.balloon.close();
        });

        geoMap.behaviors.disable('scrollZoom');
      }
    }
  }
}

export class ContactMap {
  constructor() {
    this.init();
  }
  init() {
    initContactMap();
    function initContactMap() {
      // contact-map
      ymaps.ready(init);
      function init() {
        const contactMap = new ymaps.Map('contact-map', {
          center: [55.73762983916488, 37.5944086229167],
          zoom: 18,
          controls: []
        });
        const ourPlace = new ymaps.Placemark(contactMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: 'static/img/icons/shield.png',
          iconImageSize: [32, 42],
          balloonOffset: [13, 192]
        });
        contactMap.geoObjects.add(ourPlace);
      }
    }
  }
}