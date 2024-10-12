import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './components/GlobalStyles/index.jsx'
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from './pages/Cart/CartContext/index.jsx'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <CartContext>
     <GlobalStyle>
      <App />
      </GlobalStyle>
      </CartContext>
  </StrictMode>,
)
