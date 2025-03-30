import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import LoginPage from './pages/LoginPage';
import AdminOrdersPage from './pages/AdminOrdersPage';

function App() {

  return (
    <CartProvider>
      <Router>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
