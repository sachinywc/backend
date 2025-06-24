const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: String,
  quantity: Number,
  customerName: String,
  phone: String,
  address: String,
  paymentMethod: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
