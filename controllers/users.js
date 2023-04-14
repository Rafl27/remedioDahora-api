const User = require('../models/user')

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
