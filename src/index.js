import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'dom-node-polyfills';
import 'fetch-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import './assets/style/style.scss';
import './script/main.js';

// import './assets/style/style.css';

import './assets/pug/index.pug';