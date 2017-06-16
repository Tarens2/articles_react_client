import React from 'react';
import * as ReactDom from 'react-dom';

import Root from './root';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
let app = document.getElementById('app');
ReactDom.render(<Root />, app);
