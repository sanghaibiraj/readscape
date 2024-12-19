import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="orders" element={<h1>Orders</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
