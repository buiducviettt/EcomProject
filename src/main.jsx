import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import { CartProvider } from './pages/Cart/CartContext/index.jsx';
import 'react-loading-skeleton/dist/skeleton.css';
import { AuthProvider } from './components/Account/AccountContext/index.jsx';
import { FlashSaleProvider } from './pages/FlashSale/FlashSaleContext/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashSaleProvider>
      <AuthProvider>
        <CartProvider>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </CartProvider>
      </AuthProvider>
    </FlashSaleProvider>
  </StrictMode>,
);
