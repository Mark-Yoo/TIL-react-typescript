import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RespondCheck from './RespondCheck';

const Hot = hot(RespondCheck); // HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));