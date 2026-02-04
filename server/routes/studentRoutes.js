const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // අපි කලින් හදපු Student Model එක ගෙන්වා ගැනීම

// 1. සිසුවෙක් අලුතින් ලියාපදිංචි කිරීම (Create / Register)
// Frontend එකෙන් එවන දත්ත (req.body) Database එකේ Save කරනවා
router.post('/register', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: "Student Registered Successfully!", student: newStudent });
    } catch (error) {
        res.status(400).json({ message: "Error Registering Student", error: error.message });
    }
});

// 2. සියලුම සිසුන්ගේ විස්තර ලබා ගැනීම (Read / Get All)
// Admin හෝ Warden ට සිසුන් ලිස්ට් එක බලන්න මෙය ඕන වෙනවා
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Students", error: error.message });
    }
});

module.exports = router;