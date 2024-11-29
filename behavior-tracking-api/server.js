const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // For handling file paths

const app = express();
const PORT = 3008;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Mock Data
const data = {
  cartActions: [
    {
      action: 'Added to Cart',
      timestamp: '2023-10-05 14:23:10',
      product: 'Wireless Headphones',
      image: '/images/images.jpeg', // Image URL referencing the public folder
    },
    {
      action: 'Removed from Cart',
      timestamp: '2023-10-05 15:10:45',
      product: 'Bluetooth Speaker',
      image: '/images/images-14.jpeg',
    },
    {
      action: 'Added to Cart',
      timestamp: '2023-10-05 16:05:30',
      product: 'Smartwatch',
      image: '/images/images-3.jpeg',
    },
  ],

  timeSpent: [
    {
      product: 'Product A',
      time: '5 mins',
      image: '/images/images-10.jpeg',
    },
    {
      product: 'Product B',
      time: '12 mins',
      image: '/images/images-11.jpeg',
    },
    {
      product: 'Product C',
      time: '8 mins',
      image: '/images/images-12.jpeg',
    },
  ],

  pageViews: [
    {
      page: 'Product Page',
      time: '10:10 AM',
      image: '/images/images-4.jpeg',
    },
    {
      page: 'Checkout',
      time: '10:30 AM',
      image: '/images/images-5.jpeg',
    },
    {
      page: 'Exit Checkout',
      time: '10:35 AM',
      image: '/images/images-9.jpeg',
    },
  ],

  checkoutExits: [
    { category: 'Electronics', abandonedCarts: 30 },
    { category: 'Clothing', abandonedCarts: 15 },
    { category: 'Groceries', abandonedCarts: 10 },
  ],

  trackingOverview: {
    pageViews: 12345, // Replace with dynamic calculation if needed
    timeOnPages: '3 mins', // Mock value
    cartActions: 567, // Mock value
    checkoutExitRate: '15%', // Mock value
  },
};

// Routes
// Cart Actions Endpoint
app.get('/api/cart-actions', (req, res) => {
  res.json(data.cartActions);
});

// Time Spent Endpoint
app.get('/api/time-spent', (req, res) => {
  res.json(data.timeSpent);
});

// Page Views Endpoint
app.get('/api/page-views', (req, res) => {
  res.json(data.pageViews);
});

// Checkout Exits Endpoint
app.get('/api/checkout-exits', (req, res) => {
  res.json(data.checkoutExits);
});

// Aggregated Tracking Overview
app.get('/api/tracking-overview', (req, res) => {
  res.json(data.trackingOverview);
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


