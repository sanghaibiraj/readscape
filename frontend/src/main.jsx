import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import {Provider} from 'react-redux'
import { store } from './redux/store.js';
import 'sweetalert2/dist/sweetalert2.js'
import CartPage from './pages/books/CartPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>

      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
