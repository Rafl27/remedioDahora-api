const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  day: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Medicine', medicineSchema)
