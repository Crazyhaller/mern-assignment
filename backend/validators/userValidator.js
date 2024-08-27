const { body, validationResult } = require('express-validator')

exports.validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('domain').notEmpty().withMessage('Domain is required'),
  body('gender').notEmpty().withMessage('Gender is required'),
  body('availability')
    .isBoolean()
    .withMessage('Availability must be a boolean'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  },
]
