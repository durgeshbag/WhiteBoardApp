const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('UserPage get');
});

router.post('/', (req, res) => {
    res.send('post user');
});

module.exports = router;