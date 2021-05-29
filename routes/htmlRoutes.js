//define constants/dependencies------------------------
const path = require('path');
const router = require('express').Router();

//get path for notes-----------------------------------
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//get path for all else: index.html--------------------
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Exports-----------------------------------------------
module.exports = router;