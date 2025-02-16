import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './furni/components/Layout';
import Home from './furni/components/Home';
import Products from './furni/Products/Products';
import Navbar from './furni/components/Navbar';
import Cart from './furni/Context/Cart';
import PropTypes from 'prop-types';
import Login from './furni/components/login/Login';
import Signup from './furni/components/login/Signup';
import { CartProvider } from './furni/Context/CartContext';
import ContactUs from './furni/components/ContactUs/ContactUs';
import AboutUs from './furni/components/AboutUs/AboutUs';
import BlogPage from './furni/components/Blog/BlogPage';
import Services from './furni/Services/Services';
import BedroomSets from './furni/Services/BedroomSets';
import LivingRoom from './furni/Services/LivingRoom';
import DiningRoom from './furni/Services/DiningRoom';

function ErrorBoundary({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>{error.message}</p>
    </div>
  );
}

ErrorBoundary.propTypes = {
  error: PropTypes.object
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'Signup',
        element: <Signup />
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'bedroom-sets',
        element: <BedroomSets />
      },
      {
        path: 'dining-room',
        element: <DiningRoom />
      },
      {
        path: 'living-room',
        element: <LivingRoom />
      },

    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;