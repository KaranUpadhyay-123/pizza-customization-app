const express = require('express');
const { updateInventory, updateOrderStatus } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.put('/inventory', authMiddleware, adminMiddleware, updateInventory);
router.put('/order-status', authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;
