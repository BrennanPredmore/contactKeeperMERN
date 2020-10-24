const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @ROUTE POST api/users
// @DESC Register a user
// @ACCESS Public
router.post(
  '/',
  [
      check('name', 'Please add name')
      .not()
      .isEmpty(),
      check('email', 'Please include a valid email'). isEmail(),
      check('password', 'Please enter a passowrdr with 6 or more characters').isLength({min: 6})
    ],
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('passed')
  }
);

module.exports = router;
