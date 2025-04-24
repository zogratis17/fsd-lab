const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB locally
mongoose.connect('mongodb://localhost:27017/loginSignup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

// Serve static files (CSS, JS, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Routes for Login, Signup, and Index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
