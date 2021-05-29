//Define constants/dependencies-------------------------------------------
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

//get route for reading & returning notes---------------------------------
router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    console.log(notes);
    res.send(notes);
})

//post route for adding & Saving new notes--------------------------------- 
router.post('/notes', (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4();
    const newNote = { title, text, id };
    console.log(req.body.id);
    const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    notes.push(newNote);
    //Writing new file------------------------------------------------------
    fs.writeFileSync
        ('db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.json(notes);
})

//Exports --------------------------------------------------------------------
module.exports = router;