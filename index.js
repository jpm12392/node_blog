const express = require('express');
const sequelize = require('./config/database'); // Import the sequelize instance
const Post = require('./models/Post'); // Import the Post model
const User = require('./models/User'); // Import the Post model
const postRoutes = require('./routes/postRoutes'); // Import post routes
const userRoutes = require('./routes/userRoutes'); // Import post routes
require('dotenv').config();


const app = express();

app.use(express.json()); // To parse JSON bodies

// Use the post routes
app.use('/api/posts', postRoutes)
// Use the User Routes
app.use('/api/users', userRoutes)

// Sync database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized with model changes.');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});