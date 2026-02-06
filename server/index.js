const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Route එක ගෙන්වා ගැනීම

const app = express();
app.use(cors());
app.use(express.json());

// Database සම්බන්ධ කිරීම
const dbURL = "mongodb+srv://igalawithana02_db_user:Rolex%40123@cluster0.zosx4yu.mongodb.net/hostelDB?appName=Cluster0";

mongoose.connect(dbURL)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Routes සම්බන්ධ කිරීම
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Hostel Management Server!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});