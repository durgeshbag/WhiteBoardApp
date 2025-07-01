const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDatabase = require('./db');

app.use(cors());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use(express.json());

connectToDatabase();

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});