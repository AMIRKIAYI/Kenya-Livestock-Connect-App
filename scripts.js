const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Sign-In Route
app.post('/sign-in', (req, res) => {
    const { email, password } = req.body;
    // Add logic to authenticate user
    res.send('Sign-In successful');
});

// Sign-Up Route
app.post('/sign-up', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        res.send('Passwords do not match');
        return;
    }
    // Add logic to register user
    res.send('Sign-Up successful');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
