const mongoose = require('mongoose')
const frequencyEnum = require('../enums/frequencyEnum');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: false },
  dose: { type: Number, required: false },
  frequency: { type: String, enum: Object.values(frequencyEnum), required: false },
  time: { type: String, required: false },
  active: { type: Boolean, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Medicine', medicineSchema)
