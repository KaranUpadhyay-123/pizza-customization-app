const express = require('express');
const { placeOrder, getOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/place', authMiddleware, placeOrder);
router.get('/:orderId/status', authMiddleware, getOrderStatus);

module.exports = router;
