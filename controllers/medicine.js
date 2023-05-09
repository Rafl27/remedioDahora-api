const Medicine = require('../models/medicine')
const User = require('../models/user')

exports.addMedicine = async (req, res) => {
  try {
    const medicine = new Medicine(req.body)
    await medicine.save()

    // Add the newly created medicine to the user's list of medicines
    const user = await User.findById(req.params.userId)
    user.medicines.push(medicine)
    await user.save()

    res.json(medicine)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.editMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id)
    medicine.amount = req.body.amount
    medicine.frequency = req.body.frequency
    medicine.active = req.body.active
    medicine.dose = req.body.dose
    await medicine.save()
    res.json(medicine)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

