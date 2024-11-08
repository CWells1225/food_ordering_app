import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './components/data-provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < ChakraProvider>
    <DataProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </DataProvider>
  </ ChakraProvider>
);


