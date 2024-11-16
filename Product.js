const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  type: { type: String }, // 'base', 'sauce', 'cheese', 'veggie', 'meat'
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Product', productSchema);
