import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
  return <h1>Hello React!</h1>;
}

if (document.getElementById('root')) {
  ReactDOM.render(<Example />, document.getElementById('root'));
}
