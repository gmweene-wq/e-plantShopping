import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../features/cart/cartSlice'
import './Header.css'

function LeafMark() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
      <path
        d="M16 3C8 6 4 12 5 22c0 0 2 6 11 7 0-9-3-14-8-18 6 2 10 6 12 12 3-8 1-16-4-20Z"
        fill="var(--leaf)"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.6" fill="currentColor" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

// currentPage: 'products' | 'cart'
export default function Header({ currentPage, onNavigate }) {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <header className="site-header">
      <button
        className="brand"
        onClick={() => onNavigate('products')}
        aria-label="Paradise Nursery home"
      >
        <LeafMark />
        <span className="brand-name">Paradise Nursery</span>
      </button>

      <nav className="header-nav" aria-label="Primary">
        {currentPage === 'cart' ? (
          <button className="nav-link" onClick={() => onNavigate('products')}>
            Continue shopping
          </button>
        ) : (
          <span className="nav-hint">Browse the collection</span>
        )}

        <button
          className="cart-button"
          onClick={() => onNavigate('cart')}
          aria-label={`View cart, ${totalQuantity} item${totalQuantity === 1 ? '' : 's'}`}
        >
          <CartIcon />
          <span className="cart-count" aria-hidden="true">
            {totalQuantity}
          </span>
        </button>
      </nav>
    </header>
  )
}
