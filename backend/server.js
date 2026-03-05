require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100
});

const users = {
    admin: {
        username: 'admin',
        passwordHash: '$2b$10$YourHashedPasswordHere'
    }
};

const getUserFromDatabase = async (username) => {
    return users[username] || null;
};


app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
