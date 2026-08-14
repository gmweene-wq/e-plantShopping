import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from '../features/cart/cartSlice'
import { plantCategories } from '../data/plants'
import Header from './Header'
import './ProductList.css'

function PlantCard({ plant, inCart, onAdd }) {
  return (
    <article className="plant-card">
      <div className="plant-thumb">
        <img src={plant.image} alt={plant.name} loading="lazy" />
      </div>
      <div className="plant-body">
        <div className="plant-headline">
          <h3 className="plant-name">{plant.name}</h3>
          <span className="plant-price">${plant.cost}</span>
        </div>
        <p className="plant-desc">{plant.description}</p>
        <button
          className={`btn add-btn ${inCart ? 'add-btn-added' : 'btn-primary'}`}
          onClick={() => onAdd(plant)}
          disabled={inCart}
        >
          {inCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const inCartNames = new Set(cartItems.map((i) => i.name))

  const handleAdd = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }))
  }

  return (
    <div className="products-page">
      <Header currentPage="products" onNavigate={onNavigate} />

      <main className="products-main">
        <div className="products-intro">
          <p className="products-eyebrow">The Collection</p>
          <h1 className="products-title">Find your next plant</h1>
          <p className="products-sub">
            Grouped by what they do best. Add anything to your cart and adjust the
            numbers before checkout.
          </p>
        </div>

        {plantCategories.map((cat) => (
          <section className="category" key={cat.category}>
            <div className="category-head">
              <h2 className="category-name">{cat.category}</h2>
              <p className="category-blurb">{cat.blurb}</p>
            </div>

            <div className="plant-grid">
              {cat.plants.map((plant) => (
                <PlantCard
                  key={plant.name}
                  plant={plant}
                  inCart={inCartNames.has(plant.name)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
