# Paradise Nursery

A front end shopping application for a fictional houseplant nursery, built with React, Vite, and Redux Toolkit.

## Pages

1. **Landing page** with a background image, the company name, a short paragraph about the nursery, and a Get Started button that opens the product listing.
2. **Product listing page** with 11 houseplants grouped into 4 categories. Each plant shows a thumbnail, name, price, and an Add to Cart button that disables once the plant is in the cart.
3. **Shopping cart page** showing every plant added, its unit price and line total, increase and decrease buttons, and a delete button. It also shows the total number of plants, the total cost, a Continue Shopping button, and a Checkout button.

The header on the product and cart pages shows a cart icon with a live item count and navigation between pages.

## State management

Cart state lives in a single Redux Toolkit slice at src/features/cart/cartSlice.js with three actions: addItem, removeItem, and updateQuantity. The header count, cart totals, and disabled Add to Cart buttons all read from that slice.

## Running locally

    npm install
    npm run dev

The dev server runs at http://localhost:5173.

## Building

    npm run build      # output goes to dist/
    npm run preview    # preview the production build

## Deploying to GitHub Pages

The base in vite.config.js must match your GitHub repository name, otherwise the assets will 404. It is currently set to /shoppingreact. If your repo has a different name, change that value first.

    npm run deploy

This runs the build and publishes dist/ to the gh-pages branch. In your repository settings, set Pages to serve from the gh-pages branch.

## Project structure

    src/
      app/store.js                 Redux store
      features/cart/cartSlice.js   cart reducer, actions, selectors
      data/plants.js               plant catalog (categories + plants)
      components/                  Header, LandingPage, ProductList, CartPage
      assets/                      hero background and plant illustrations
      App.jsx                      page switching
      main.jsx                     entry, wraps App in the Redux Provider
