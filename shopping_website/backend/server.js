const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const FILE = 'shopping.json';

app.post('/save', (req, res) => {
    const data = req.body;

    fs.writeFile(FILE, JSON.stringify(data, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "Error saving data" });
        res.json({ message: "Data saved successfully" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});