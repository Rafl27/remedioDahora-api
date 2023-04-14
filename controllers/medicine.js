const Medicine = require('../models/medicine')

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
    medicine.name = req.body.name
    medicine.amount = req.body.amount
    medicine.day = req.body.day
    await medicine.save()
    res.json(medicine)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.removeMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id)
    await medicine.remove()

    // Remove the medicine from the user's list of medicines
    const user = await User.findById(medicine.user)
    user.medicines.pull(medicine)
    await user.save()

    res.json({ message: 'Medicine deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
