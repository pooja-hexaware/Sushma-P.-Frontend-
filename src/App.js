import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home';
import MenuList from './MenuList/menuList';
import Cart from './Cart/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
