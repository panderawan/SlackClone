import React from 'react';

import styled from 'styled-components';
import Sidebar from '../sidebar/sidebar';
import Header from './../header/header';

function Layout() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default Layout;
