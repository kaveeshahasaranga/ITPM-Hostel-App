const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 👇 මම ඔයාගේ Password එකේ @ ලකුණ වෙනුවට %40 දැම්මා. දැන් මේක වැඩ කරන්න ඕන.
const dbURL = "mongodb+srv://igalawithana02_db_user:Rolex%40123@cluster0.zosx4yu.mongodb.net/hostelDB?appName=Cluster0";

mongoose.connect(dbURL)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
    res.send("Hello from Hostel Management Server!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});