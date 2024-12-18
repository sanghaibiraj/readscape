import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <nav>Navbar</nav>
      <main className='min-h-screen'>
      <Outlet />

      </main>
      <footer>Footre</footer>
    </>
  )
}

export default App
