import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

const theme = "f2 bg-blue white";

ReactDOM.render(<HelloWorld theme={theme}/>, document.getElementById('root'));