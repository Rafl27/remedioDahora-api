const express = require('express')
const router = express.Router()
const medicineController = require('../controllers/medicine')

// Add a medicine to a user's list of medicines
router.post('/:userId/addmed', medicineController.addMedicine)

// Edit a medicine
router.patch('/:id', medicineController.editMedicine)

module.exports = router