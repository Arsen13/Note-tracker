require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const app = express();

const noteRoutes = require('./routes/note.route');
const authRoutes = require('./routes/auth.routes');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use('/', noteRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(`Server is running on ${PORT}`)
    } catch (e) {
        console.log(e)
    }
});

module.exports = app;