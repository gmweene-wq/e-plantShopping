import { createSlice } from '@reduxjs/toolkit'

// Cart item shape: { name, image, cost (number), quantity }
const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload: { name, image, cost }
    addItem: (state, action) => {
      const { name, image, cost } = action.payload
      const existing = state.items.find((item) => item.name === name)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    // payload: name (string)
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload)
    },
    // payload: { name, quantity }
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const item = state.items.find((i) => i.name === name)
      if (!item) return
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.name !== name)
      } else {
        item.quantity = quantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.cost * item.quantity, 0)

export default cartSlice.reducer
