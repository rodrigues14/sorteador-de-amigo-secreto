import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import Configuracao from './Paginas/Configuracao';
import Sorteio from './Paginas/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Configuracao />} />
          <Route path='/sorteio' element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}


export default App;
