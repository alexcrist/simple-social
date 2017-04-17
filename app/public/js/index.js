import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';

const header = document.getElementById('header');
const content = document.getElementById('content');

render(<Header/>, header)
render(<Content/>, content);