const express = require('express');
const router = express.Router();

// @ROUTE GET api/users
// @DESC GET logged in user
// @ACCESS Private
router.get('/', (req, res) => {
    res.send('get logged in user');
});

// @ROUTE POST api/auth 
// @DESC AUTH user & get token
// @ACCESS Public
router.post('/', (req, res) => {
    res.send('log in user');
});

module.exports = router;