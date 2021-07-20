import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
  return (
    <>
      <h1>Hello React!</h1>
      <h2>test</h2>
      <h1>これはテストです</h1>
      <p>hello</p>
    </>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Example />, document.getElementById('root'));
}
