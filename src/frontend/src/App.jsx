import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import TutorialsPage from './pages/TutorialsPage';
import CartPage from './pages/CartPage';
import CartProvider from './context/CartContext';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

function App() {

  return (
    <CartProvider>
      <Router>
        {/* For notifications to shown anywhere in app */}
        <ToastContainer />
        <Routes>
          {/* Wrap pages with HomeLayout which includes the Header & Footer */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          {/* NOT wrapped with HomeLayout */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<OrderSuccessPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
