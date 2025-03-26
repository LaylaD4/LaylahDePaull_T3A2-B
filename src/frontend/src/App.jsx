import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage'; 
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Router>
      <Routes>
        {/* Wrap pages with HomeLayout which includes the Header & Footer */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} /> 
        </Route>
      </Routes>
    </Router>
  )
}

export default App
