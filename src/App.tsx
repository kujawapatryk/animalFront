import React from 'react';

import {Header} from "./components/layout/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter} from 'react-router-dom';

export const App = () => {

  return (
    <>

      <Header/>
        <BrowserRouter>
      <Main/>
        </BrowserRouter>
    </>
  )
};


