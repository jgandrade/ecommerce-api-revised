const userControllers = require('../controllers/userControllers');
const auth = require('../auth');
const express = require('express');
const router = express.Router();

router.get('/profile', auth.authenticateToken, userControllers.getUserProfile);
router.patch('/name/set', auth.authenticateToken, userControllers.changeName);
router.patch('/email/set', auth.authenticateToken, userControllers.changeEmail);
router.patch('/password/set', auth.authenticateToken, userControllers.changePassword);
router.patch('/mobilenumber/set', auth.authenticateToken, userControllers.changeNumber);
router.post('/addToCart', auth.authenticateToken, userControllers.addToCart);
router.post('/checkout', auth.authenticateToken, userControllers.checkOut);
router.patch('/cart/updateQuantity', auth.authenticateToken, userControllers.modifyCartQuantity);
router.delete('/cart/delete', auth.authenticateToken, userControllers.deleteCart);
router.patch('/address/set', auth.authenticateToken, userControllers.updateAddress);
router.patch('/toggleUserRole', auth.authenticateToken, userControllers.toggleUserAdmin);
router.get('/getUserCart', auth.authenticateToken, userControllers.getUserCart);
router.get('/getUserOrders', auth.authenticateToken, userControllers.getUserOrders);
router.get('/getUsers', auth.authenticateToken, userControllers.getAllUsers);

module.exports = router;