import { useState } from 'react'
import LandingPage from './components/LandingPage'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import './App.css'

// No router in this project's dependencies, so navigation is a simple
// state toggle between the three pages: landing -> products -> cart.
export default function App() {
  const [page, setPage] = useState('landing') // 'landing' | 'products' | 'cart'

  return (
    <div className="app">
      {page === 'landing' && <LandingPage onGetStarted={() => setPage('products')} />}
      {page === 'products' && <ProductList onNavigate={setPage} />}
      {page === 'cart' && <CartItem onNavigate={setPage} />}
    </div>
  )
}