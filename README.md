# React E-Commerce UI

# Overview

Harmoni is a simple e-commerce platform designed to showcase a variety of products and provide a seamless shopping experience. The application features product browsing, category filtering and a shopping cart. Built with React, Redux, and React Router, Harmoni demonstrates modern frontend development practices.

## Deployed Link

The deployed version of the application at: [E-Commerce UI Live](https://ecommerce-harmoni.vercel.app/)

## Installation and Setup

1. Clone the repository: git clone <repository-url>
   cd <repository-folder>
2. Install Dependencies:
   Run the following command in the root folder of the project:
   npm install
3. Start the development server:
   npm start
   The application will be available at http://localhost:3000.

## Usage

- Visit the homepage to explore products.
- Use the search bar to find products by name or category.
- Add items to the shopping cart and view the count number on the cart icon.
- Click on a product card to view a modal with more details.
- Clear the cart or proceed to checkout from the cart page.

## Features

- **Dynamic Search and Filter**: Users can search products by name or category in real time.

- **Shopping Cart Functionality**: Add, remove, and manage cart items with a summary of the total price.

- **Responsive Design**: The UI is fully responsive and adapts to various screen sizes.

- **Product Description Modal**: Clicking a product displays more details in a modal. user can increase or decrease the quantity of product and Add to cart.

## Design Decisions

**Modular Components**:

- Components like Header, Footer, and ProductCard are reusable and isolated, promoting maintainability.

**Redux State Management**:

- cartSlice.js and productSlice.js manage application state efficiently, keeping business logic separate from UI components.

**Clean Navigation**:

- React Router is used for managing navigation between pages, ensuring a seamless user experience.

**API Integration**:

- Product data is fetched dynamically from a simulated API (getAllProducts and getCategories).

**Responsive Design**:

- The UI is designed to adapt seamlessly across desktop, laptop, and mobile devices, ensuring an optimal user experience on all screen sizes.

## Technologies Used

- **React JS**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A powerful state management library for managing chat state.
- **JavaScript (ES6+)**: For writing the application logic.
- **CSS**: Used for custom styles and maintaining design consistency.
- **Material-UI (MUI)**: A popular React UI framework for styling components.
- **React Router DOM**: For managing navigation and routing.
- **Axios**: For making HTTP requests to the FakeStore API.

## Challenges and Improvements

### Challenges Faced:

1. **Category Suggestions:**

Implementing real-time category suggestions in the search bar while
managing click events outside the dropdown required careful DOM
handling.

2. **Global State Management**:

Ensuring synchronization between the cart count and the cart items list was initially challenging, but Redux reducers provided an effective solution.

3. **Styling Consistency**:

Maintaining consistent styling across different components while keeping the design responsive was time-consuming.

## Potential Improvements:

1. **Enhanced Product Filtering**:

Introduce filters for price range, ratings, and stock availability for a more comprehensive browsing experience.

2. **Persistent State**:

Use local storage or a backend to persist cart and user data across sessions.

3. **Improved Modal Design**:

Add animations and more detailed product information to enhance the user experience.

4. **Testing**:

Implement unit and integration tests to ensure reliability and reduce bugs.

5. **Backend Integration**:

Replace the simulated API with a real backend to handle dynamic product data, user accounts, and orders.

6. **Payment Gateway**:

Implement a robust payment gateway system:

- Support multiple payment methods (e.g., credit cards, PayPal, digital wallets).

- Ensure secure transactions with SSL and tokenization.

- Provide a seamless payment experience with pre-filled user details and one-click checkout options.

- Display payment confirmation and error-handling messages for better user feedback.
