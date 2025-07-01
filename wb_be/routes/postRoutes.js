const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('postpage get');
});

router.post('/', (req, res) => {
    res.send('postpage post');
});


module.exports = router;