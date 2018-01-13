/**
 * App entry point.
 *
 * @module App
 */

import 'babel-polyfill';

/** Import common components (initialized by default) */
import './components/common';
import './components/publicAPI';

/** Import page controllers */
import { GeoMap, ContactMap } from './components/maps';

/**
 * Run appropriate scripts for each page.
 * */

/** Import utils */
import { currentPage } from './modules/dev/helpers';

switch (currentPage) {
/** geo map */
case 'home': {
  new GeoMap();
  break;
}
case 'contacts': {
  new ContactMap();
  break;
}
}