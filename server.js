// Dependencies
// ===========================================================
const express = require('express');
const app = express();
const PORT =process.env.PORT||3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware 
// ===============================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Express Call
// ===============================================
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 