# e-plantShopping (Paradise Nursery)

Front end shopping application for Paradise Nursery, a fictional houseplant store, built with React, Vite, and Redux Toolkit. Final project for the IBM React course.

## Pages

1. Landing page with a background image, the company name, an About Us section, and a Get Started button that opens the product listing.
2. Product listing page with plants grouped into categories. Each plant shows a thumbnail, name, description, and cost, plus an Add to Cart button that disables and reads "Added to Cart" once added. The header shows a cart icon with a live item count.
3. Shopping cart page showing each plant with its unit cost, quantity, and line total, plus increase, decrease, and delete controls, the total cart amount, a Continue Shopping button, and a Checkout button.

## State management

Cart state lives in a Redux Toolkit slice in src/CartSlice.jsx with three reducers: addItem, removeItem, and updateQuantity. The store is configured in src/store.js and provided to the app in src/main.jsx.

## Running locally

    npm install
    npm run dev

The dev server runs at http://localhost:5173/e-plantShopping/

## Deploying to GitHub Pages

The base in vite.config.js is set to /e-plantShopping/ to match the repository name.

    npm run deploy

This builds the app and publishes dist/ to the gh-pages branch. Set Pages to serve from the gh-pages branch in the repository settings.
