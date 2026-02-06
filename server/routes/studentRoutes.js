const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// 1. සිසුවෙක් Register කිරීම (Sign Up)
router.post('/register', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: "Student Registered Successfully!", student: newStudent });
    } catch (error) {
        res.status(400).json({ message: "Error Registering Student", error: error.message });
    }
});

// 2. සිසුන් Login වීම (Login Route) - 👇 මෙය අලුතින් එකතු කළ කොටසයි
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. ඒ Email එක තියෙන කෙනෙක් ඉන්නවද බලනවා
        const student = await Student.findOne({ email: email });
        
        if (!student) {
            return res.status(404).json({ message: "User not found! Please Register first." });
        }

        // 2. Password එක හරිද බලනවා (සරල ක්‍රමය)
        if (student.password === password) {
            res.status(200).json({ message: "Login Successful!", student: student });
        } else {
            res.status(401).json({ message: "Incorrect Password!" });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. සියලුම සිසුන්ගේ විස්තර ලබා ගැනීම (Get All)
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Students", error: error.message });
    }
});

module.exports = router;