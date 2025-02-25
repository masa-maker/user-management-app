import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme
 from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/router/Router';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
