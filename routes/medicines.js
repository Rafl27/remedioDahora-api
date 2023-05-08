const express = require('express')
const router = express.Router()
const medicineController = require('../controllers/medicine')

// Add a medicine to a user's list of medicines
router.post('/:userId/medicines', medicineController.addMedicine)

// Edit a medicine
router.patch('/medicines/:id', medicineController.editMedicine)

// Remove a medicine
// router.delete('/medicines/:id', medicineController.removeMedicine)

module.exports = router