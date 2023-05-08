const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dose: { type: Number, required: true },
  frequency: { type: String, required: true },
  time: { type: String, required: true },
  remind: { type: Boolean, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Medicine', medicineSchema)
