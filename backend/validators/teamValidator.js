const { body, validationResult } = require('express-validator')

exports.validateTeam = [
  body('name').notEmpty().withMessage('Name is required'),
  body('userIds').isArray().withMessage('User IDs must be an array'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  },
]
