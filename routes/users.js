const express = require('express');
const router = express.Router();

// @ROUTE POST api/users
// @DESC Register a user
// @ACCESS Public 
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;