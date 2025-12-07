const express = require('express');
const app = express();
require('dotenv').config();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.render('index', { message: "Welcome to your hosting panel!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
