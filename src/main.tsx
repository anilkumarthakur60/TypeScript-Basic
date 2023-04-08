import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider } from './context/CartProvider';
import { ProductsContextProvider } from './context/ProductProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsContextProvider>
  </React.StrictMode >,
)
