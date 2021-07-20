import React from 'react';
import styled from 'styled-components';

const HederStyles = styled.div`
  h1 {
    color: red;
  }
`;

export default function Header() {
  return (
    <HederStyles>
      <p>ここにヘッダーが入ります</p>
    </HederStyles>
  );
}
