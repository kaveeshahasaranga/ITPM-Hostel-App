const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const studentRoutes = require('./routes/studentRoutes'); // 👇 අපි අලුතින් හදපු Routes ගෙන්වා ගැනීම

app.use(cors());
app.use(express.json());

// 👇 Database Connection (ඔයාගේ පාස්වර්ඩ් එක මෙතන හරියට තියෙනවද බලන්න)
const dbURL = "mongodb+srv://igalawithana02_db_user:Rolex%40123@cluster0.zosx4yu.mongodb.net/hostelDB?appName=Cluster0";

mongoose.connect(dbURL)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// 👇 Routes භාවිතා කිරීම
// කවුරුහරි localhost:3001/students/register කියලා එව්වොත් මේ Route එක වැඩ කරනවා
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Hostel Management Server!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});