const inventory = require('../model/inventory');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rbi');

inventory.create([
  {
    ProductName: 'Retirement Gift',
    Quantity: 0,
  },
  {
    ProductName: 'High Tea',
    Quantity: 0,
  },
  {
    ProductName: 'Meeting Combo',
    Quantity: 0,
  },
], () => {});

