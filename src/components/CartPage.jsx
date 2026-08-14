import { useDispatch, useSelector } from 'react-redux'
import {
  updateQuantity,
  removeItem,
  selectCartItems,
  selectTotalQuantity,
  selectTotalCost,
} from '../features/cart/cartSlice'
import Header from './Header'
import './CartPage.css'

function CartRow({ item, onInc, onDec, onDelete }) {
  return (
    <li className="cart-row">
      <div className="cart-row-thumb">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-row-info">
        <h3 className="cart-row-name">{item.name}</h3>
        <p className="cart-row-unit">${item.cost} each</p>
      </div>

      <div className="qty">
        <button
          className="qty-btn"
          onClick={() => onDec(item)}
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>
        <span className="qty-value" aria-live="polite">
          {item.quantity}
        </span>
        <button
          className="qty-btn"
          onClick={() => onInc(item)}
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
      </div>

      <div className="cart-row-total">${item.cost * item.quantity}</div>

      <button
        className="delete-btn"
        onClick={() => onDelete(item)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Delete
      </button>
    </li>
  )
}

export default function CartPage({ onNavigate }) {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalCost = useSelector(selectTotalCost)

  const inc = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  const dec = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
  const del = (item) => dispatch(removeItem(item.name))

  const handleCheckout = () => {
    window.alert('Coming Soon')
  }

  return (
    <div className="cart-page">
      <Header currentPage="cart" onNavigate={onNavigate} />

      <main className="cart-main">
        <h1 className="cart-title">Your cart</h1>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-lead">Nothing here yet.</p>
            <p className="cart-empty-sub">
              Add a plant or two and they will show up here, ready to adjust.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('products')}
            >
              Browse plants
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div className="summary-stat">
                <span className="summary-num">{totalQuantity}</span>
                <span className="summary-label">
                  plant{totalQuantity === 1 ? '' : 's'} in cart
                </span>
              </div>
              <div className="summary-stat">
                <span className="summary-num">${totalCost}</span>
                <span className="summary-label">total cost</span>
              </div>
            </div>

            <ul className="cart-list">
              {items.map((item) => (
                <CartRow
                  key={item.name}
                  item={item}
                  onInc={inc}
                  onDec={dec}
                  onDelete={del}
                />
              ))}
            </ul>

            <div className="cart-actions">
              <button
                className="btn btn-ghost"
                onClick={() => onNavigate('products')}
              >
                Continue shopping
              </button>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
