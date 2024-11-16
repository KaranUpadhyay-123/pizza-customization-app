const Product = require('../models/Product');
const Order = require('../models/Order');

// Update Inventory
exports.updateInventory = async (req, res) => {
  const { type, quantity } = req.body;
  try {
    const product = await Product.findOne({ type });
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.stock += quantity;
    await product.save();
    res.status(200).json({ message: "Inventory updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating inventory" });
  }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = status;
    await order.save();
    res.status(200).json({ message: "Order status updated", status: order.status });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status" });
  }
};
