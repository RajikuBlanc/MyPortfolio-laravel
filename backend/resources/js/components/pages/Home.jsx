import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

function Example() {
  return (
    <>
      <Header />
      <h1>Hello React!</h1>
      <Footer />
    </>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Example />, document.getElementById('root'));
}
