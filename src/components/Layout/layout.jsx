import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Sidebar from '../sidebar/sidebar';
import Header from './../header/header';

function Layout() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Outlet />
      </AppBody>
    </>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default Layout;
