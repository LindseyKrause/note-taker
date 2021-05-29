const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    console.log(notes);
    res.send(notes);
})

//post 
router.post('/notes', (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4();
    const newNote = { title, text, id };
    console.log(req.body.id);
    const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    notes.push(newNote);
    fs.writeFileSync
        ('db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.json(notes);
})

module.exports = router;