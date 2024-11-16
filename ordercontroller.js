const Order = require('../models/Order');
const Product = require('../models/Product');

exports.placeOrder = async (req, res) => {
  const { userId, items, total } = req.body;

  try {
    const order = new Order({
      user: userId,
      items,
      total,
      status: 'Order Received'
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to place order." });
  }
};

exports.getOrderStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ status: order.status });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order status." });
  }
};

