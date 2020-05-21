const express = require('express');
const router = express.Router();

// @ROUTE GET api/contacts
// @DESC Get all users contacts
// @ACCESS Private
router.get('/', (req, res) => {
    res.send('get all contacts');
});


// @ROUTE POST  api/contacts
// @DESC Add new contact
// @ACCESS Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @ROUTE PUT api/contact/:id
// @DESC Update contact
// @ACCESS Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @ROUTE DELETE api/contact/:id
// @DESC Update contact
// @ACCESS Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;