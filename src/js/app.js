import '../css/main.scss';
import './lib/table';
import './lib/placeholder';
import './lib/browser';

import $ from 'jquery';

if (Modernizr.ie8compat) {
    $('input, textarea').placeholder();
} else {
    // not-supported
}

